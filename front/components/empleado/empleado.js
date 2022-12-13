import { Button, Form, Input, Table, Divider, Icon, Modal, PageHeader, Row, Col, Card, Popconfirm } from 'antd'
import axios from 'axios'
import { ModalKruger, notificationKruger } from "/config/ant_components";
import { axiosGet, axiosPost, axiosPut, axiosDelete } from "/config/http";
import React, { useState, useEffect } from 'react';
import config from '/config/default';
import funciones from '/config/funciones_generales';

var CancelToken = null
var source = null
var empleado = []
function App({ dataUser, form }) {
    const [Empleado, setEmpleado] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [modForm, setModForm] = useState(false);
    const [formulario, setForm] = useState({
        id: undefined,
        identification: "",
        name: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        dateBirth: "",
        address: "",
        cellPhone: "",
        vaccine: "",
        vaccineId: "",
        dateVaccine: "",
        doseNumber: "",
        rolId: 2
    })



    const getPerson = () => {
        setLoading(true)
        axiosGet(config.ip_web + "/rol/2?_embed=person", {}, {}, config.timeOut, source).then(res => {
            const response = res.data
            if (!response.person) {
                return ModalKruger("Ocurrio un problema al retornar datos.", "warn")
            }
            setEmpleado(response.person)
            empleado = response.person
        }).catch(err => {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }).finally(() => {
            setLoading(false)
        })
    }
    const deletePerson = (id) => {
        setLoading(true)
        axiosDelete(config.ip_web + "/person/" + id, {}, {}, config.timeOut, source).then(res => {
            getPerson()
        }).catch(err => {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }).finally(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        try {
            CancelToken = axios.CancelToken;
            source = CancelToken.source();
            getPerson()
            return () => {
                source.cancel('Operation canceled by the user.');
            }
        } catch (err) {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }

    }, []);

    const onChangeBusqueda = (val) => {
        try {
            if (val && val?.trim() != '') {
                var filter = empleado.filter((item) => {
                    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.lastName.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.identification.toLowerCase().indexOf(val.toLowerCase()) > -1) || item.email.toLowerCase().indexOf(val.toLowerCase()) > -1;
                })
            } else {
                var filter = empleado
            }
            setEmpleado(filter)
        } catch (err) {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }


    }
    const editPerson = (record) => {
        setForm({
            ...formulario,
            id: record.id,
            name: record.name,
            lastName: record.lastName,
            identification: record.identification,
            email: record.email
        })
        setModForm(true)
    }
    const columns = [
        {

            align: 'center',
            title: '#', key: 'operation',
            width: 70,
            render: (text, record) => {
                return (
                    <div>
                        <Button title='Editar' type='link' icon='edit' onClick={() => editPerson(record)}></Button>
                        <Divider type="vertical" />
                        <Popconfirm disabled={Loading} title="Desea eliminar este registro?" onConfirm={() => deletePerson(record.id)}>
                            <Icon title="Eliminar empleado" type="delete" />
                        </Popconfirm>
                    </div>
                );
            },
        },
        {

            title: 'Identificacion',
            align: 'center',
            dataIndex: 'identification',
            width: 80,
            render: (text, record) => {
                return {
                    props: {
                        style: { textAlign: 'center' },
                    },
                    children: text
                };
            }
        },
        {

            title: 'Nombres',
            align: 'center',
            dataIndex: 'name',
            width: 80,
            render: (text, record) => {
                return {
                    props: {
                        style: { textAlign: 'center' },
                    },
                    children: text
                };
            }
        },
        {

            align: 'center',
            title: 'Apellidos',
            dataIndex: 'lastName',
            width: 80,
            render: (text, record) => {
                return {
                    props: {
                        style: { textAlign: 'center' },
                    },
                    children: text
                };
            }
        },
        {

            align: 'center',
            title: 'Correo',
            dataIndex: 'email',
            width: 100,
            render: (text, record) => {
                return {
                    props: {
                        style: { textAlign: 'center' },
                    },
                    children: text
                };
            }
        },

    ]

    const { getFieldDecorator, setFieldsValue, getFieldValue, resetFields } = form



    const cleanInputs = () => {
        setForm({
            id: undefined,
            identification: "",
            name: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
            dateBirth: "",
            address: "",
            cellPhone: "",
            vaccine: "",
            vaccineId: "",
            dateVaccine: "",
            doseNumber: "",
            rolId: 2

        })
    }

    const save = async () => {
        try {

            let validate = await funciones.validateForm(form);
            if (!validate.value) {
                return notificationKruger("warning", "Kruger", "Formulario inválido", 2)
            }
            let validateCedula = funciones.validateCedula(getFieldValue("txtIdentification"))
            if (!validateCedula.status) {
                return notificationKruger("warning", "Kruger", validateCedula.message, 2)
            }
            formulario.identification = getFieldValue("txtIdentification")
            formulario.name = getFieldValue("txtName")?.toUpperCase()
            formulario.lastName = getFieldValue("txtLastName")?.toUpperCase()
            formulario.email = getFieldValue("txtEmail")
            formulario.userName = (formulario.name[0] + formulario.lastName.split(" ")[0] + formulario.identification.substring(6, 10)).toLowerCase()
            formulario.password = getFieldValue("txtIdentification")
            setLoading(true)
            if (formulario.id) {
                axiosPut(config.ip_web + "/person/" + formulario.id, formulario, {}, config.timeOut, source).then(res => {
                    notificationKruger("success", "Kruger", "Empleado " + (!formulario.id ? "registrado" : "actualizado") + " correctamente.", 3)
                    cleanInputs()
                    setModForm(false)
                    getPerson()

                }).catch(error => {
                    if (axios.isCancel(error))
                        return
                    setLoading(false)
                    ModalKruger(error.message || "Error inesperado, intente de nuevo", "error")
                });
            } else {
                let validateRepeated = await axiosGet(config.ip_web + "/person?identification=" + formulario.identification, {}, {}, config.timeOut, source)
                if (!validateRepeated?.data?.length == 0) {
                    setLoading(false)
                    return notificationKruger("warning", "Kruger", "Cédula ya ingresada.", 3)
                }
                axiosPost(config.ip_web + "/person", formulario, {}, config.timeOut, source).then(res => {
                    notificationKruger("success", "Kruger", "Empleado " + (!formulario.id ? "registrado" : "actualizado") + " correctamente.", 3)
                    cleanInputs()
                    setModForm(false)
                    getPerson()

                }).catch(error => {
                    if (axios.isCancel(error))
                        return
                    setLoading(false)
                    ModalKruger(error.message || "Error inesperado, intente de nuevo", "error")
                });
            }

        } catch (error) {
            setLoading(false)
            ModalKruger(error.message || "Error inesperado, intente de nuevo", "error")
        }
    }
    const onKeyPressNumber = (event) => {
        if (!(event.charCode >= 48 && event.charCode <= 57))
            event.preventDefault();
    }
    const onKetPressLetters = (e) => {
        let charCode = e.keyCode || e.which
        return (/^[a-zA-Z ñÑ áÁ éÉ íÍ óÓ úÚ]$/.test(String.fromCharCode(charCode))) ? null : event.preventDefault();

    }
    return (
        <div id='inicio' className="App" style={{ padding: '5px 15px', overflow: 'hidden' }}>
            <PageHeader
                title="Registro de Empleado"
                extra={[
                    <Button title='Nuevo' key="3" type="primary" icon='plus' disabled={Loading} onClick={() => setModForm(true)} >Nuevo</Button>

                ]}
            />

            <Row gutter={[24, 16]} type="flex" justify="space-around" align="middle">

                <Col span={24}>
                    <Card
                        extra={
                            <Input.Search
                                style={{ width: '270px' }}
                                allowClear={true}
                                placeholder='Busqueda'
                                onSearch={value => onChangeBusqueda(value)}
                            />
                        }
                        size="small"
                        bordered={false}
                        style={{ boxShadow: '0 0 4px rgb(115, 129, 121)' }}
                    >
                        <Row gutter={[24]} type="flex" justify="space-around">

                            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
                                <Table
                                    size='small'
                                    bordered
                                    pagination={{ pageSize: 7 }}
                                    columns={columns}
                                    dataSource={Empleado}
                                    rowKey={record => record.id}
                                    scroll={{ x: 'max-content' }}
                                    loading={Loading}

                                />
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>


            <Modal
                title={formulario.id ? "Edicion de Empleado" : "Registro de Empleado"}
                visible={modForm}
                okText={!formulario.id ? "Guardar" : "Actualizar"}
                cancelText="Cancelar"
                width={450}
                centered
                onCancel={() => { setModForm(false); cleanInputs() }}
                onOk={save}
                destroyOnClose={true}
                bodyStyle={{ padding: 20 }}
                closable={false}
                maskClosable={false}
                okButtonProps={
                    { disabled: Loading, loading: Loading }
                }
                cancelButtonProps={
                    { disabled: Loading, loading: Loading }
                }
            >

                <div className='infinite' style={{ padding: 0 }}>
                    <Form
                        layout='horizontal'
                        labelCol={{
                            xs: 7,
                            sm: 7,
                            md: 9,
                            lg: 9,
                            xl: 9,
                            xxl: 9,
                        }}
                        wrapperCol={{
                            xs: 15,
                            sm: 15,
                            md: 13,
                            lg: 13,
                            xl: 13,
                            xxl: 13,
                        }}
                    >

                        <Row gutter={[12, 0]}>
                            <Col span={24}  >
                                <Form.Item className='card' label="Identificacion"  >
                                    {getFieldDecorator('txtIdentification', {
                                        initialValue: formulario.identification, rules: [{ required: true, message: 'Campo incompleto' }, {
                                            min: 10,
                                            message: 'Sólo 10 dígitos',
                                        },
                                        {
                                            max: 10,
                                            message: 'Sólo 10 dígitos',
                                        }]
                                    })
                                        (<Input
                                            disabled={formulario.id}
                                            onPaste={(e) => { e.preventDefault(); }}
                                            onKeyPress={onKeyPressNumber}
                                        />)}
                                </Form.Item>
                            </Col>
                            <Col span={24}  >

                                <Form.Item className='card' label={"Nombres"} >
                                    {getFieldDecorator('txtName', {
                                        initialValue: formulario.name,
                                        rules: [{ required: true, message: 'Campo incompleto' },
                                        ]
                                    })
                                        (<Input
                                            onPaste={(e) => { e.preventDefault(); }}
                                            onKeyPress={onKetPressLetters}
                                            type="text"

                                        />)}
                                </Form.Item>
                            </Col>

                            <Col span={24}  >

                                <Form.Item className='card' label="Apellidos"  >
                                    {getFieldDecorator('txtLastName', { initialValue: formulario.lastName, rules: [{ required: true, message: 'Campo incompleto' }] })
                                        (<Input
                                            onPaste={(e) => { e.preventDefault(); }}
                                            onKeyPress={onKetPressLetters}
                                            type="text"
                                        />)}
                                </Form.Item>
                            </Col>
                            <Col span={24}  >
                                <Form.Item className='card' label="Correo"  >
                                    {getFieldDecorator('txtEmail', {
                                        initialValue: formulario.email,
                                        rules: [
                                            {
                                                type: 'email',
                                                message: 'Correo invalido!',
                                            },
                                            {
                                                required: true,
                                                message: 'Campo incompleto',
                                            }
                                        ]
                                    })
                                        (<Input type="email" name="email" />)}
                                </Form.Item>
                            </Col>


                        </Row>


                    </Form>
                </div>

            </Modal>

        </div>

    )
}


export default Form.create()(App);
