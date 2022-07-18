import { Formik, Form, Field , ErrorMessage} from "formik";
import {Link} from 'react-router-dom';
import React,{useState} from "react";
import * as Yup from 'yup';

const formSchema = Yup.object().shape(
    {
        username: Yup.string().required('Tiene que introducir un usuario'),
        password : Yup.string().required('Debe introducir una contraseña')
    }
)

const TaskFormik = ({loggin}) => {
    const [errorLoggin, setErrorLoggin] = useState('');
    const BBDD = [
        {
            username:"jomicar15",
            password:"miguel321"
        },        
        {
            username:"pepe",
            password:"pepe"
        }
    ];

    const compare = (values)=> {        
        //buscando elemento en la base de datos
        const user = BBDD.find( (item) => item.username===values.username);
        if(user === undefined){
            setErrorLoggin('usuario o contraseña incorrecto');
        }else if (user !== undefined){
            if(values.password === user.password){
                loggin();
            }else{
                setErrorLoggin('usuario o contraseña incorrecto');
            }
        };

    }

    const initialCredentials = {
        username:'',
        password:'',
    }



    return(
        <div className="formik">
            <h4>Login</h4>
            <Formik
                initialValues={ initialCredentials }
                //yup validation schema
                validationSchema = { formSchema }
                onSubmit={values => {
                        console.log(values);
                        compare(values);
                        values.username = "";
                        values.password = "";
                }
                }
            >
                { props => {
                    const {
                        errors
                    } = props

                    return(
                        <Form>
                        <label htmlFor="username">Usuario:</label>
                        <Field className='input' id="username" name="username" placeholder="Ingrese nombre usuario" />
                        {
                            errors.username && (<div className="error"><ErrorMessage name="username"/></div>)
                        }

                        <label htmlFor="password">Contraseña</label>
                        <Field className='input' id="password" name="password" placeholder="Ingrese contraseña" />
                        {
                            errors.password  && (<div className="error"><ErrorMessage name="password"/></div>)
                        }

                        <div className="error">{errorLoggin.length>0 ?  errorLoggin : null}</div>

                        <button className="btnAgregar" type="submit">Login</button>
                        <Link to='/register' >No estas registrado?</Link>
                    </Form>
                    )
                }}
            </Formik>  
        </div>

    );
}

export default TaskFormik;