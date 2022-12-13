import { Select, Button, Form, Table, DatePicker, PageHeader, Row, Col, Card } from 'antd'
const RangePicker = DatePicker.RangePicker
import moment from 'moment'
import axios from 'axios'
import { ModalKruger, notificationKruger } from "/config/ant_components";
import { axiosGet } from "/config/http";
import React, { useState, useEffect } from 'react';
import config from '/config/default';
import { Excel } from 'antd-table-saveas-excel'
import funciones from '/config/funciones_generales';
import es_ES from 'antd/lib/date-picker/locale/es_ES';
var CancelToken = null
var source = null

function App({ dataUser, form }) {
    const [Reporte, setReporte] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [vaccine, setVaccine] = useState([]);

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
            getVaccine()
            return () => {
                source.cancel('Operation canceled by the user.');
            }
        } catch (error) {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }

    }, []);




    const { getFieldDecorator, getFieldValue } = form


    const fcn_exportar = () => {
        setLoading(true)
        try {

            const excel = new Excel();
            excel
                .addSheet("Kruger")
                .setTBodyStyle({
                    border: true,
                    fontSize: 8,
                })


            excel.setTHeadStyle({
                fontSize: 9,
                background: '143F6B',
                color: 'F7F5F2',
                v: 'center',
                h: 'center',
                bold: true,

            })
                .setRowHeight(0.7, "cm")
                .addColumns(columns)
            excel.setRowHeight(0.7, "cm")
                .setTBodyStyle({
                    border: true,
                    bold: false,
                    fontSize: 8,
                    background: undefined,
                    color: undefined,
                    v: 'center',
                    h: 'center',
                })
                .addDataSource(Reporte, {
                })
                .saveAs("Reporte_" + getFieldValue("filter") + ".xlsx", 'blob', false);
            setLoading(false)
        } catch (err) {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
            setLoading(false)
        }

    }
    const columns = [
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
        {

            align: 'center',
            title: 'Direccion',
            dataIndex: 'address',
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
        {

            align: 'center',
            title: 'Celular',
            dataIndex: 'cellPhone',
            width: 60,
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
            title: 'Fecha de vacuna',
            dataIndex: 'dateVaccine',
            width: 100,
            render: (text, record) => {
                return {
                    props: {
                        style: { textAlign: 'center' },
                    },
                    children: !record.vaccine || record.vaccine == "novacunado" ? "No aplicada" : text
                };
            }
        },
        {

            align: 'center',
            title: 'Dosis / Vacuna',
            key: 'vaccineDose',
            width: 100,
            render: (text, record) => {

                return {
                    props: {
                        style: { textAlign: 'center' },
                    },
                    children: !record.vaccine || record.vaccine == "novacunado" ? "No aplicada" : record.doseNumber + " de " + vaccine.find(item => item.id == record.vaccineId)?.nameVaccine
                };
            }
        }


    ]



    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    const disabledDate = (current) => {
        return current > moment().endOf('day');
    }

    const ejecutar = async () => {
        setReporte([])
        let v_obj = await funciones.validateForm(form);
        if (v_obj.value) {
            setLoading(true)
            if (getFieldValue("filter") == "stateVaccine") {
                axiosGet(config.ip_web + "/person?vaccine=" + getFieldValue("stateVaccine").trim() + "&rolId=2", {}, {}, config.timeOut, source).then(res => {
                    const response = res.data
                    setReporte(response)
                    setLoading(false)
                }).catch(err => {
                    setLoading(false)
                    ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
                })
            } else if (getFieldValue("filter") == "typeVaccine") {
                axiosGet(config.ip_web + "/person?vaccineId=" + getFieldValue("typeVaccine") + "&rolId=2", {}, {}, config.timeOut, source).then(res => {
                    const response = res.data
                    setReporte(response)
                    setLoading(false)
                }).catch(err => {
                    setLoading(false)
                    ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
                })
            } else {
                axiosGet(config.ip_web + "/person?rolId=2", {}, {}, config.timeOut, source).then(res => {
                    let response = res.data
                    setLoading(false)
                    setReporte(response.filter(item => item.dateVaccine >= getFieldValue("rangeDate")[0].format("YYYY-MM-DD") && item.dateVaccine <= getFieldValue("rangeDate")[1].format("YYYY-MM-DD")))
                }).catch(err => {
                    setLoading(false)
                    ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
                })
            }


        } else {
            notificationKruger("info", "Kruger", "Formulario inválido", 3)
        }
    }
    return (
        <div id='inicio' className="App" style={{ padding: '5px 15px', overflow: 'hidden' }}>
            <PageHeader
                title="Reporte de Vacunación"
                extra={[
                    <Button type="primary" key="1" icon='thunderbolt' disabled={Loading} onClick={ejecutar} />,
                    <Button title='Exportar' key="2" type="primary" icon='file-excel' disabled={Loading || Reporte.length == 0} onClick={() => { fcn_exportar() }} ></Button>,
                ]}
            />

            <Form
                layout='horizontal'
            >
                <Row gutter={[24, 16]} type="flex" justify="space-around" align="middle">

                    <Col span={24}>
                        <Card
                            size="small"
                            bordered={false}
                            style={{ boxShadow: '0 0 4px rgb(115, 129, 121)' }}
                        >
                            <Row gutter={[24]} type="flex" justify="space-around" >
                                <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} >
                                    <Form.Item label="Criterio" className="card_venta" {...formItemLayout}>
                                        {
                                            getFieldDecorator('filter', { initialValue: "stateVaccine", rules: [{ required: true, message: 'Campo incompleto' }] })
                                                (
                                                    <Select
                                                        loading={Loading}
                                                        showSearch
                                                        optionFilterProp="children"
                                                    >
                                                        <Select.Option value={"stateVaccine"} key={"stateVaccine"} >Estado de vacunación</Select.Option>
                                                        <Select.Option value={"typeVaccine"} key={"typeVaccine"} >Tipo de vacuna</Select.Option>
                                                        <Select.Option value={"rangeDate"} key={"rangeDate"} >Rango de fecha de vacunación</Select.Option>
                                                    </Select>
                                                )
                                        }
                                    </Form.Item>

                                </Col>
                                <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}  >
                                    {
                                        getFieldValue("filter") == "stateVaccine" ?
                                            <Form.Item label="Estado" className="card_venta" {...formItemLayout}>

                                                {
                                                    getFieldDecorator('stateVaccine', { rules: [{ required: true, message: 'Campo incompleto' }] })
                                                        (
                                                            <Select
                                                                allowClear={true}
                                                                loading={Loading}
                                                            >
                                                                <Select.Option value={"vacunado"} key={"vacunado"} >Vacunado</Select.Option>
                                                                <Select.Option value={"novacunado"} key={"novacunado"} >No vacunado</Select.Option>
                                                                <Select.Option value={" "} key={" "} >Sin actualizar Información</Select.Option>
                                                            </Select>
                                                        )
                                                }
                                            </Form.Item>
                                            : getFieldValue("filter") == "typeVaccine" ?
                                                <Form.Item label="Tipo" className="card_venta" {...formItemLayout}>

                                                    {
                                                        getFieldDecorator('typeVaccine', { rules: [{ required: true, message: 'Campo incompleto' }] })
                                                            (
                                                                <Select

                                                                >
                                                                    {
                                                                        vaccine.map(item => <Select.Option value={item.id} key={item.id}>{item.nameVaccine}</Select.Option>)
                                                                    }

                                                                </Select>
                                                            )
                                                    }
                                                </Form.Item>

                                                :
                                                <Form.Item label="Fechas" className="card_venta" {...formItemLayout}>
                                                    {
                                                        getFieldDecorator('rangeDate', { rules: [{ required: true, message: 'Campo incompleto' }] })
                                                            (

                                                                <RangePicker
                                                                    locale={es_ES}
                                                                    format="DD-MM-YYYY"
                                                                    disabledDate={disabledDate}
                                                                />
                                                            )
                                                    }
                                                </Form.Item>


                                    }
                                </Col>

                            </Row>

                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card

                            size="small"
                            bordered={false}
                            style={{ boxShadow: '0 0 4px rgb(115, 129, 121)' }}
                        >
                            <Row gutter={[24]} type="flex" justify="space-around">
                                <Col lg={24} xs={24}  >
                                    <Table
                                        columns={columns}
                                        size="small"
                                        dataSource={Reporte}
                                        rowKey={(record, index) => index}
                                        pagination={false}
                                        bordered={true}
                                        loading={Loading}
                                        scroll={{ x: true, y: 340 }}
                                        style={{ textAlign: 'center' }}

                                    />
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                </Row>

            </Form>

        </div>

    )
}


export default Form.create()(App);
