import React, { useEffect, useState } from "react";
import { deleteFetch, editFetch, getData, postfetch } from "../api/useFetch";
import useForm from "../hooks/useForm";
import { CoursesResponse } from "../interfaces";
import { BoxModalToDelete, TableContainer } from "../styles/TableStyle";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Label from "./elements/Label";
import TextArea from "./elements/TextArea";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Search from "./Search";

const Table = () => {
  const [coursesData, setCoursesData] = useState<CoursesResponse[] | []>([]);
  const [blockActive, setBlockActive] = useState(false);
  const [showModal, seTshowModal] = useState(false);
  const [showModalToDelete, setShowModalToDelete] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CoursesResponse>(
    {} as CoursesResponse
  );
  const [showEdit, setShowEdit] = useState(false);
  const [error, setError] = useState(false);
  const notifySuccess = () => toast("Se creó el curso");
  const notifySuccessDelete = () => toast("Se eliminó el/los curso(s)");
  const notifySuccessEdit = () => toast("Se editó el curso");
  const [coursesToDelete, setCoursesToDelete] = useState<String[] | []>([]);
  const [formInitialValue, setFormInitialValue] = useState({
    name: "",
    price: "",
    description: "",
    slug: "",
    teacher: "",
  });
  const [searchInput, setSearchInput] = useState("");

  const { name, price, description, slug, teacher, handleChange, form } =
    useForm(formInitialValue);

  useEffect(() => {
    getData("courses").then((res) => {
      console.log(res);
      setCoursesData(res);
    });
  }, []);
  useEffect(() => {
    console.log(coursesToDelete);
  }, [coursesToDelete]);

  const showModalFunc = () => {
    seTshowModal((state) => !state);
  };

  const showModalEditFunc = () => {
    setShowEdit((state) => !state);
  };

  const showModalToDeleteFunc = () => {
    setShowModalToDelete((state) => !state);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([name, description, price, description, slug].includes("")) {
      setError(true);
      console.log("todos los campos son obligatorios");
      return;
    }
    postfetch("courses", {
      name,
      price,
      description,
      slug,
      teacher,
    }).then((res) => {
      notifySuccess();
      seTshowModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  };

  const addDeleteCourse = (id: string = "") => {
    if (coursesToDelete.includes(id as never)) {
      const filterArr = coursesToDelete.filter((courseId) =>
        courseId === id ? !courseId : courseId
      );
      setCoursesToDelete(filterArr);
    } else {
      setCoursesToDelete([...coursesToDelete, id]);
    }
  };

  const deleteCourses = () => {
    const newArrToDelete = coursesToDelete.map((id) =>
      deleteFetch("courses", id as string)
    );
    Promise.all(newArrToDelete).then((res) => {
      notifySuccessDelete();
      showModalToDeleteFunc();
      window.location.reload();
    });
  };

  const editFunc = (course: CoursesResponse) => {
    setShowEdit((state) => !state);
    setCurrentCourse(course);
    setFormInitialValue(course);
  };
  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editFetch("courses", form).then((res) => {
      notifySuccessEdit();
      setShowEdit(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  };

  return (
    <>
      <ToastContainer />
      {showModal && (
        <Modal showModalFunc={showModalFunc}>
          <h1>CREA UN NUEVO CURSO</h1>
          <form onSubmit={onSubmit}>
            <Input
              name="name"
              placeholder="Escribe el nombre"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <Input
              name="slug"
              placeholder="Escribi el slug"
              type="text"
              value={slug}
              onChange={handleChange}
            />
            <Input
              name="price"
              placeholder="Cuál es el precio?"
              type="number"
              value={price}
              onChange={handleChange}
            />
            <Input
              name="teacher"
              placeholder="Quién es el profesor"
              type="text"
              value={teacher}
              onChange={handleChange}
            />
            <TextArea
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="Escribe una descripción..."
            />
            <Button bg="fill-dark" type="submit">
              <span>Agregar</span>
            </Button>
          </form>
        </Modal>
      )}
      {showModalToDelete && (
        <Modal showModalFunc={showModalToDeleteFunc}>
          <BoxModalToDelete>
            <h3>¿Deseas eliminar los cursos seleccionados?</h3>
            <strong>Recuerda el siguiente detalle:</strong>

            <span>Al eliminar no se recuperarán la información</span>
            <Button type="button" bg="fill-dark" onClick={deleteCourses}>
              <span>Eliminar curso(s)</span>
            </Button>
          </BoxModalToDelete>
        </Modal>
      )}
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setCoursesData={setCoursesData}
      />
      <TableContainer>
        <div className="tableHead">
          <h3>Todos los Cursos ({coursesData.length})</h3>
          <div className="actions">
            {coursesToDelete.length > 0 && (
              <Button
                type="button"
                bg="outline-dark"
                onClick={() => setShowModalToDelete(true)}
              >
                <span>Eliminar ({coursesToDelete.length}) cursos</span>
              </Button>
            )}
            <Button bg="fill-dark" onClick={showModalFunc} type="button">
              <span>Agregar un curso</span>
            </Button>
          </div>
        </div>
        <div className="tableBox ">
          <div className="box">
            <div className="check text-title">
              {/* <input type="checkbox" /> */}
            </div>
            <div className="text-title title">Nombre del curso</div>
            <div className="text-title slug">Slug</div>
            <div className="text-title status">Estado</div>
            <div className="text-title price">Precio</div>
            <div className="text-title duration">Acciones</div>
          </div>
          {coursesData.map((course) => {
            return (
              <>
                <div className={`box `} key={course._id}>
                  <div className={`check`}>
                    <input
                      type="checkbox"
                      onClick={() => addDeleteCourse(course._id)}
                    />
                  </div>
                  <div className="title">{course.name}</div>
                  <div className="slug">{course.slug}</div>
                  <div className="status">
                    <div
                      className={`statusButton ${
                        course.status ? "published" : "draft"
                      }`}
                    >
                      {course.status ? "published" : "draft"}
                    </div>
                  </div>
                  <div className="price">
                    <div className={`statusButton priceBg`}>
                      {course.price} USD
                    </div>
                  </div>
                  <div className="duration">
                    <Link
                      to={`/course/${course._id}`}
                      className="statusButton fill-warning"
                    >
                      Editar
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </TableContainer>
    </>
  );
};

export default Table;
