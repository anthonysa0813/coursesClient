import React, { useEffect, useState } from "react";
import { getData, postfetch } from "../api/useFetch";
import useForm from "../hooks/useForm";
import { CoursesResponse } from "../interfaces";
import { BoxModal, ModalContainer } from "../styles/Modal";
import { TableContainer } from "../styles/TableStyle";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Label from "./elements/Label";
import TextArea from "./elements/TextArea";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";

const Table = () => {
  const [coursesData, setCoursesData] = useState<CoursesResponse[] | []>([]);
  const [blockActive, setBlockActive] = useState(false);
  const [showModal, seTshowModal] = useState(false);
  const [error, setError] = useState(false);
  const notifySuccess = () => toast("Se creó el curso");
  const [formInitialValue, setFormInitialValue] = useState({
    name: "",
    price: "",
    description: "",
    slug: "",
    teacher: "",
  });

  const { name, price, description, slug, teacher, handleChange } =
    useForm(formInitialValue);

  useEffect(() => {
    getData("courses").then((res) => {
      console.log(res);
      setCoursesData(res);
    });
  }, []);

  const showModalFunc = () => {
    seTshowModal((state) => !state);
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
      <TableContainer>
        <div className="tableHead">
          <h3>Todos los Cursos ({coursesData.length})</h3>
          <div className="actions">
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
                <div className={`box `}>
                  <div className={`check`}>
                    <input
                      type="checkbox"
                      onClick={() => setBlockActive((state) => !state)}
                    />
                  </div>
                  <div className="title">{course.name}</div>
                  <div className="slug">{course.slug}</div>
                  <div className="status">
                    {course.status ? (
                      <div
                        className={`statusButton ${
                          course.status ? "published" : "draft"
                        }`}
                      >
                        Published
                      </div>
                    ) : (
                      "Draft"
                    )}
                  </div>
                  <div className="price">
                    <div className={`statusButton priceBg`}>
                      {course.price} USD
                    </div>
                  </div>
                  <div className="duration">
                    <div className="statusButton fill-warning">Editar</div>
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
