import React, { useEffect, useState } from "react";
import Input from "../components/elements/Input";
import Label from "../components/elements/Label";
import TextArea from "../components/elements/TextArea";
import MainLayout from "../layout/MainLayout";
import { EditForm } from "../styles/Edit";
import { useParams } from "react-router-dom";
import { editFetch, getCourseFetch } from "../api/useFetch";
import { CoursesResponse } from "../interfaces";
import useForm from "../hooks/useForm";
import Button from "../components/elements/Button";
import { ToastContainer, toast } from "react-toastify";

const EditCourse = () => {
  const { id = "" } = useParams();
  const [currentCourse, setCurrentCourse] = useState<CoursesResponse>({
    name: "",
    price: "",
    description: "",
    status: true,
    teacher: "",
    slug: "",
  });
  const notifySuccess = () => toast.success("Se actualizó el curso");
  // const [form, setForm] = useState({} as CoursesResponse)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setCurrentCourse({
      ...currentCourse,
      [e.target.name]: e.target.value,
    });
  };

  const changeStatusTrue = () => {
    setCurrentCourse({
      ...currentCourse,
      status: true,
    });
  };
  const changeStatusFalse = () => {
    setCurrentCourse({
      ...currentCourse,
      status: false,
    });
  };

  useEffect(() => {
    getCourseFetch("courses", id).then((res) => {
      console.log(res);
      setCurrentCourse({
        name: res.name,
        price: res.price,
        description: res.description,
        status: res.status,
        slug: res.slug,
        teacher: res.teacher,
      });
    });
  }, [id]);

  const editSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editFetch("courses", {
      ...currentCourse,
      _id: id,
      status: currentCourse.status == "published" ? true : false,
    }).then((res) => {
      console.log(res);
      notifySuccess();
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    });
  };

  return (
    <MainLayout>
      <h2>Editar</h2>
      <ToastContainer />

      <EditForm onSubmit={editSubmit}>
        <div className="field">
          <Label content="Nombre del curso" />
          <Input
            name="name"
            placeholder="nombre..."
            type="text"
            value={currentCourse.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <Label content="Slug" />
          <Input
            name="slug"
            placeholder="nombre..."
            type="text"
            value={currentCourse.slug}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <Label content="Profesor" />
          <Input
            name="teacher"
            placeholder="nombre..."
            type="text"
            value={currentCourse.teacher}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <Label content="Precio " />
          <Input
            name="price"
            placeholder="nombre..."
            type="text"
            value={currentCourse.price}
            onChange={handleChange}
          />
        </div>
        <div className="field status">
          <Label content="Estado" />
          <select name="status" onChange={handleChange}>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div className="field desc">
          <Label content="Descripción" />
          <TextArea
            name="description"
            placeholder="description..."
            value={currentCourse.description}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <Button
            type="submit"
            bg="fill-dark"
            onClick={() => console.log("click baby")}
          >
            <span>Editar</span>
          </Button>
        </div>
      </EditForm>
    </MainLayout>
  );
};

export default EditCourse;
