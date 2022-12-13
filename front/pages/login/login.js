import { useState } from 'react'
import { Icon, Form, Input, Button, Layout } from 'antd';
import Loader from '/components/Loader/c_Loader'
import { notificationKruger, ModalKruger } from "/config/ant_components";
import { axiosGet } from "/config/http";
import Router from 'next/router'
import config from '/config/default'
import funciones from '/config/funciones_generales'




function Login({ form }) {
    const { getFieldDecorator } = form;
    const [loading, setLoading] = useState(false)
    const btn_login = async () => {
        if (!loading) {
            let validate = await funciones.validateForm(form);
            if (validate.value) {
                setLoading(true)
                axiosGet(config.ip_web + "/person?userName=" + form.getFieldValue("txtUserName")?.toLowerCase() + "&password=" + form.getFieldValue("txtPassword")).then(res => {
                    const response = res.data
                    if (!Array.isArray(response)) {
                        return ModalKruger("Ocurrio un problema al retornar datos.", "warn")
                    }
                    if (response.length == 0) {
                        return ModalKruger("Contraseña o usuario incorrecto.", "warn")
                    }
                    localStorage.setItem('token', JSON.stringify({
                        'id': response[0].id,
                        'name': response[0].name,
                        'lastName': response[0].lastName,
                        'idRol': response[0].rolId,

                    }))
                    Router.push('/sider')

                }).catch(err => {
                    ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
                }).finally(() => {
                    setLoading(false)
                })

            } else {
                notificationKruger("warning", "Kruger", "Formulario inválido", 2)
            }


        }

    };

    return (
        <div>
            <Loader visible={loading} />
            <Layout>
                <Layout.Content>
                    <div className="fon">
                        <div className="containerLogin">
                            <div>
                                <img style={{ width: '60%' }} src="img/logo_kruger.png" alt="" />
                                <br />
                                <br />
                                <Form >
                                    {getFieldDecorator('txtUserName', {
                                        rules: [{ required: true, message: 'Campo vacio' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Usuario"
                                            size='large'
                                        />,
                                    )}
                                    <br />
                                    <br />
                                    {getFieldDecorator('txtPassword', {
                                        rules: [{ required: true, message: 'Campo vacio' }],
                                    })(
                                        <Input.Password
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Contraseña"
                                            size='large'
                                            onPressEnter={btn_login}
                                        />
                                    )}
                                    <br />
                                    <br />
                                    <Button
                                        block
                                        style={{ color: 'white', backgroundColor: '#0060A8' }}
                                        disabled={loading}
                                        size='large'
                                        onClick={btn_login}

                                    >
                                        Iniciar Sesión
                                    </Button>
                                    <br />
                                    <br />
                                </Form>
                            </div>
                        </div>
                    </div>
                </Layout.Content>
            </Layout>
        </div>

    )
}


const LoginForm = Form.create()(Login);
export default LoginForm;
