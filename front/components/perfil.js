import { Card, Button, Form,  Input, Row, Col,  Modal,  PageHeader,   Select, DatePicker } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { ModalKruger, notificationKruger } from "/config/ant_components";
import { axiosGet,  axiosPut } from "/config/http";
import config from '/config/default';
import funciones from '/config/funciones_generales';
import C_Loader from '../components/Loader/c_loaderHijo'
import moment from "moment";
var CancelToken = null
var source = null
function App({ dataUser, form }) {
    const [Loading, setLoading] = useState(false);
    const [vaccine, setVaccine] = useState([]);
    const [msg, setMsg] = useState(false);
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
        axiosGet(config.ip_web + "/person/" + dataUser.id, {}, {}, config.timeOut, source).then(res => {
            const response = res.data
            if (!response.id) {
                return ModalKruger("Ocurrio un problema al retornar datos.", "warn")
            }
            setForm(response)
        }).catch(err => {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }).finally(() => {
            setLoading(false)
        })
    }
    const getVaccine = () => {
        axiosGet(config.ip_web + "/vaccine", {}, {}, config.timeOut, source).then(res => {
            const response = res.data
            setVaccine(response)
        }).catch(err => {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        })
    }
    useEffect(() => {
        try {


            CancelToken = axios.CancelToken;
            source = CancelToken.source();
            setMsg("Consultando sus datos...")
            getVaccine()
            getPerson()
            return () => {
                source.cancel('Operation canceled by the user.');
            }
        } catch (error) {
            Modal.error({
                title: ' SYSTEMSEC',
                content: 'Ocurrio un problema al mostrar datos.'
            });
        }

    }, []);




    const onKeyPressNumber = (event) => {
        if (!(event.charCode >= 48 && event.charCode <= 57))
            event.preventDefault();
    }
    const { getFieldDecorator, setFieldsValue, getFieldValue, resetFields } = form
    const disabledDate = (current) => {
        return current > moment().endOf('day');
    }
    const save = async () => {
        try {

            let validate = await funciones.validateForm(form);
            if (!validate.value) {
                return notificationKruger("warning", "Kruger", "Formulario inválido", 2)
            }

            formulario.address = getFieldValue("txtAdress")?.toUpperCase()
            formulario.cellPhone = getFieldValue("txtCellPhone")
            formulario.vaccine = getFieldValue("txtVaccine")
            formulario.vaccineId = getFieldValue("txtVaccine") == "vacunado" ? getFieldValue("txtVaccineId") : ""
            formulario.dateBirth = getFieldValue("dtpDateBirth").format("YYYY-MM-DD")
            formulario.dateVaccine = getFieldValue("txtVaccine") == "vacunado" ? getFieldValue("dtpDateVaccine").format("YYYY-MM-DD") : ""
            formulario.doseNumber = getFieldValue("txtVaccine") == "vacunado" ? getFieldValue("txtDoseNumber") : ""
            setLoading(true)
            axiosPut(config.ip_web + "/person/" + formulario.id, formulario, {}, config.timeOut, source).then(res => {
                setLoading(false)
                notificationKruger("success", "Kruger", "Datos actualizado correctamente.", 3)
                setForm(res.data)

            }).catch(error => {
                if (axios.isCancel(error))
                    return
                setLoading(false)
                ModalKruger(error.message || "Error inesperado, intente de nuevo", "error")
            });

        } catch (error) {
            setLoading(false)
            ModalKruger(error.message || "Error inesperado, intente de nuevo", "error")
        }
    }
    return (
        <div style={{ position: 'relative' }}>
            {
                Loading ? <C_Loader visible={Loading} msj={msg} /> :
                    <div id='inicio' className="App" style={{ padding: '5px 15px', overflow: 'hidden', paddingBottom: 20 }}>
                        <PageHeader
                            title={"Información personal"}
                            extra={[
                                <Button title='Actualizar' key="1" type="primary" icon='save' disabled={Loading} onClick={save} ></Button>,
                            ]}
                        />

                        <Row gutter={[24, 16]} type="flex" justify="space-around" align="middle">
                            <Col span={24}>
                                <Card

                                    size="small"
                                    bordered={false}
                                    style={{ boxShadow: '0 0 4px rgb(115, 129, 121)' }}
                                >
                                    <Form
                                        layout='vertical'

                                    >
                                        <Row gutter={[12, 0]}>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >
                                                <Form.Item label="Identificacion"  >
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
                                                            readOnly={true}
                                                        />)}
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                <Form.Item label={"Nombres"} >
                                                    {getFieldDecorator('txtName', {
                                                        initialValue: formulario.name,
                                                        rules: [{ required: true, message: 'Campo incompleto' },
                                                        ]
                                                    })
                                                        (<Input
                                                            readOnly={true}
                                                            type="text"

                                                        />)}
                                                </Form.Item>
                                            </Col>

                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                <Form.Item label="Apellidos"  >
                                                    {getFieldDecorator('txtLastName', { initialValue: formulario.lastName, rules: [{ required: true, message: 'Campo incompleto' }] })
                                                        (<Input
                                                            readOnly={true}
                                                            type="text"
                                                        />)}
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >
                                                <Form.Item label="Correo"  >
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
                                                        (<Input
                                                            type="email"
                                                            name="email"
                                                            readOnly={true}
                                                        />)}
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                <Form.Item label="Direccion"  >
                                                    {getFieldDecorator('txtAdress', { initialValue: formulario.address, rules: [{ required: true, message: 'Campo incompleto' }] })
                                                        (<Input
                                                            type="text"
                                                        />)}
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                <Form.Item label="Telefono"  >
                                                    {getFieldDecorator('txtCellPhone', {
                                                        initialValue: formulario.cellPhone, rules: [{ required: true, message: 'Campo incompleto' }, {
                                                            min: 10,
                                                            message: 'Sólo 10 dígitos',
                                                        },
                                                        {
                                                            max: 10,
                                                            message: 'Sólo 10 dígitos',
                                                        }]
                                                    })
                                                        (<Input
                                                            onPaste={(e) => { e.preventDefault(); }}
                                                            onKeyPress={onKeyPressNumber}
                                                        />)}
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                <Form.Item label="Fecha de Nacimiento"  >
                                                    {
                                                        getFieldDecorator('dtpDateBirth', { initialValue: formulario.dateBirth != "" ? moment(formulario.dateBirth) : null, rules: [{ required: true, message: 'Campo incompleto' }] })
                                                            (<DatePicker
                                                                style={{ width: '100%' }}
                                                                disabledDate={disabledDate}
                                                            />)
                                                    }
                                                </Form.Item>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                <Form.Item label="Estado de vacunacion"  >
                                                    {getFieldDecorator('txtVaccine', { initialValue: formulario.vaccine, rules: [{ required: true, message: 'Campo incompleto' }] })
                                                        (<Select

                                                        >
                                                            <Select.Option value={"vacunado"} key={"vacunado"}>VACUNADO</Select.Option>
                                                            <Select.Option value={"novacunado"} key={"novacunado"}>NO VACUNADO</Select.Option>

                                                        </Select>)}
                                                </Form.Item>
                                            </Col>
                                            {
                                                getFieldValue("txtVaccine") == "vacunado" &&
                                                <div>
                                                    <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                                                        <Form.Item label="Tipo de vacuna"  >
                                                            {getFieldDecorator('txtVaccineId', { initialValue: formulario.vaccineId, rules: [{ required: true, message: 'Campo incompleto' }] })
                                                                (<Select

                                                                >
                                                                    {
                                                                        vaccine.map(item => <Select.Option value={item.id} key={item.id}>{item.nameVaccine}</Select.Option>)
                                                                    }

                                                                </Select>)}
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                        <Form.Item label="Fecha de vacunación"  >
                                                            {
                                                                getFieldDecorator('dtpDateVaccine', { initialValue: formulario.dateVaccine != "" ? moment(formulario.dateVaccine) : null, rules: [{ required: true, message: 'Campo incompleto' }] })
                                                                    (<DatePicker
                                                                        style={{ width: '100%' }}
                                                                        disabledDate={disabledDate}
                                                                    />)
                                                            }
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}  >

                                                        <Form.Item label="N° de dosis"  >
                                                            {getFieldDecorator('txtDoseNumber', {
                                                                initialValue: formulario.doseNumber, rules: [{ required: true, message: 'Campo incompleto' }]
                                                            })
                                                                (<Input
                                                                    onPaste={(e) => { e.preventDefault(); }}
                                                                    onKeyPress={onKeyPressNumber}
                                                                />)}
                                                        </Form.Item>
                                                    </Col>

                                                </div>
                                            }


                                        </Row>
                                    </Form>
                                </Card>

                            </Col>

                        </Row>
                    </div>
            }




        </div>



    )

}

export default Form.create()(App);
