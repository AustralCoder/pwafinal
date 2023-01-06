import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import FooterComponente from './Footer';

const EmpleadoComponente = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //PARA TARJETA DE EDITAR
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //PARA TARJETA DE BORRAR
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //PARA TARJETA DE AGREGAR
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }


    const [nombre, setNombre] = useState("")
    const [email, setemail] = useState("")
    const [numero, setNumero] = useState("")
    const [dni, setDni] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ocupacion, setOcupacion] = useState("")

    const [Delete, setDelete] = useState(false)
    //para actualizar y borrar
    const [id, setId] = useState("");

    // const url = 'http://localhost:8000/empleado';
    const url = 'https://empleadosback-production.up.railway.app/empleado'

    const GetEmpleadoData = () => {
        //get de la base de datos
        const url = 'https://empleadosback-production.up.railway.app/empleado'
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

//axios post


    const handleSubmite = () => {
        const url = 'https://empleadosback-production.up.railway.app/empleado'
        const Credenciales = { nombre, email, numero, dni, direccion, ocupacion }
        axios.post(url, Credenciales)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    //axios update
    const handleEdit = () => {
        const url = `https://empleadosback-production.up.railway.app/empleado/${id}`
        const Credenciales = { nombre, email, numero, dni, direccion, ocupacion }
        axios.put(url, Credenciales)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'exitoso') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //axios delete
    const handleDelete = () => {
        const url = `https://empleadosback-production.up.railway.app/empleado/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'exitoso') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmpleadoData();
    }, [])
    return (


        <div>

            <div className="background__form">
                <div className='row'>
                    <div className='mt-5 mb-4'>
                        <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                            Agregar Empleado
                        </Button>
                    </div>
                </div>
                <div className='row'>
                    <div className='table-responsive'>
                        <table className='table table-striped table-hover table-bordered'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Numero</th>
                                    <th>DNI</th>
                                    <th>Direccion</th>
                                    <th>Ocupacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Data.map((item) =>
                                    <tr key={item._id}>
                                        <td>{item.nombre}</td>
                                        <td>{item.email}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.dni}</td>
                                        <td>{item.direccion}</td>
                                        <td>{item.ocupacion}</td>
                                        <td style={{ minWidth: 190 }}>
                                            <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>Ver</Button>|
                                            <Button size='sm' variant='warning' onClick={() => { handleEditShow(SetRowData(item), setId(item._id)) }}>Editar</Button>|
                                            <Button size='sm' variant='danger' onClick={() => { handleViewShow(SetRowData(item), setId(item._id), setDelete(true)) }}>Eliminar</Button>|
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="carousel__section">

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://fondosmil.com/fondo/88249.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Asociacion</h3>
                            <p>Nos asociamos para asegurar condiciones dignas de trabajo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.delfuegonoticias.com.ar/public/images/noticias/16340-bomberos-voluntarios-de-todo-el-pais-en-alerta-no-reciben-fondos-de-la-nacion.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Hermandad</h3>
                            <p>Entre trabajadores ayudarnos para seguir adelante</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://radio3cadenapatagonia.com.ar/wp-content/uploads/2020/07/camioneros.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Compromiso</h3>
                            <p>
                                Nos comprometemos a asegurar mejor afinidad entre los obreros y laburantes de todos los rubros
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            <FooterComponente></FooterComponente>

            </div>





            {/* modal de tarjeta */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Datos del empleado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.nombre} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.numero} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.dni} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.direccion} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.ocupacion} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Borrar Empleado</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal de datos de empleado */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar Empleado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setNumero(e.target.value)} placeholder="Numero" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setDni(e.target.value)} placeholder="Dni" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setDireccion(e.target.value)} placeholder="Direccion" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setOcupacion(e.target.value)} placeholder="Ocupacion" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Agregar Empleado</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal para editar */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Empleado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Nombre</label>
                                <input type="text" className='form-control' onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" defaultValue={RowData.nombre} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Numero</label>
                                <input type="text" className='form-control' onChange={(e) => setNumero(e.target.value)} placeholder="Numero" defaultValue={RowData.numero} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>DNI</label>
                                <input type="text" className='form-control' onChange={(e) => setDni(e.target.value)} placeholder="Dni" defaultValue={RowData.dni} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Direccion</label>
                                <input type="text" className='form-control' onChange={(e) => setDireccion(e.target.value)} placeholder="Direccion" defaultValue={RowData.direccion} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Ocupacion</label>
                                <input type="text" className='form-control' onChange={(e) => setOcupacion(e.target.value)} placeholder="ocupacion" defaultValue={RowData.ocupacion} />
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Editar Empleado</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default EmpleadoComponente;