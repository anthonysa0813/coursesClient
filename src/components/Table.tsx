import React, { useEffect, useState } from "react";
import { getData } from "../api/useFetch";
import { CoursesResponse } from "../interfaces";
import { BoxModal, ModalContainer } from "../styles/Modal";
import { TableContainer } from "../styles/TableStyle";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Label from "./elements/Label";
import TextArea from "./elements/TextArea";
import Modal from "./Modal";

const Table = () => {
  const [coursesData, setCoursesData] = useState<CoursesResponse[] | []>([]);
  const [blockActive, setBlockActive] = useState(false);
  const [showModal, seTshowModal] = useState(true);

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
    console.log("jeje");
  };

  return (
    <>
      {showModal && (
        <Modal showModalFunc={showModalFunc}>
          <h1>CREA UN NUEVO CURSO</h1>
          <form onSubmit={onSubmit}>
            <Input placeholder="Escribe el nombre" type="text" value="" />
            <Input placeholder="Escribi el slug" type="text" value="" />
            <Input placeholder="Cuál es el precio?" type="number" value="" />
            <Input placeholder="Quién es el profesor" type="text" value="" />
            <TextArea placeholder="Escribe una descripción..." />
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
