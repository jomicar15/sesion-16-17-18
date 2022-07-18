import { Formik, Form, Field , ErrorMessage} from "formik";
import React from "react";
import * as Yup from 'yup';
import {useNavigate,Link} from 'react-router-dom';

const formSchema = Yup.object().shape(
    {
        username: Yup.string().required('Tiene que introducir un usuario'),
        email: Yup.string().email().required('Tiene que introducir un email válido'),
        password : Yup.string().required('Debe introducir una contraseña'),
        confirmPassword : Yup.string()
        .when("password",{
            is: value => (value && value.length > 0 ? true : false),
            then : Yup.string().oneOf(
                [Yup.ref("password")],
                'Las contraseñas deben coincidir'
            )
        })
        .required('Debe confirmar la contraseña')
    }
)


const RegisterFormik = () => {


    const navigate = useNavigate();
    
    const BBDD = [
        {
            username:"jomicar15",
            email:'jomicar12@gmail.com',
            password:"miguel321"
        },        
        {
            username:"pepe",
            email:'pepe@gmail.com',
            password:"pepe"
        }
    ];

    const includeUserBD = (values)=> {        
        //buscando elemento en la base de datos
        const { username, password , email} = values;
        let mensajeError='';
        console.log("entrando para almacenar en la base de datos");
        const validUser = BBDD.find( (item) => item.username===username);
        const validEmail = BBDD.find( (item) => item.email===email);

        if(validUser !== undefined) mensajeError+='El usuario ya existe';
        if(validEmail!== undefined) mensajeError+='El correo ya existe';

        if(validUser === undefined && validEmail=== undefined){
            BBDD.push({username:username,password:password,email:email});
            navigate('/');
        }else{
            console.log(mensajeError);
        };
        console.log("nueva Base de datos",BBDD);

    }

    const initialCredentials = {
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    }



    return(
        <div className="formik">
            <h4>Registro</h4>
            <Formik
                initialValues={ initialCredentials }
                //yup validation schema
                validationSchema = { formSchema }
                onSubmit={values => {
                        includeUserBD(values);
                        values.username = "";
                        values.password = "";
                        values.email = "";
                        values.confirmPassword = "";

                }
                }
            >
                { props => {
                    const {
                        errors,
                    } = props

                    return(
                        <Form>
                        <label htmlFor="username">Usuario:</label>
                        <Field className='input' id="username" name="username" placeholder="Ingrese nombre usuario" />
                        {
                            errors.username && (<div className="error"><ErrorMessage name="username"/></div>)
                        }

                        <label htmlFor="email">Email:</label>
                        <Field className='input' id="email" name="email" placeholder="Ingrese email" />
                        {
                            errors.email && (<div className="error"><ErrorMessage name="email"/></div>)
                        }

                        <label htmlFor="password">Contraseña:</label>
                        <Field className='input' id="password" name="password" placeholder="Ingrese contraseña" />
                        {
                            errors.password  && (<div className="error"><ErrorMessage name="password"/></div>)
                        }

                        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
                        <Field className='input' id="confirmPassword" name="confirmPassword" placeholder="Ingrese contraseña" />
                        {
                            errors.confirmPassword  && (<div className="error"><ErrorMessage name="confirmPassword"/></div>)
                        }

                        <button className="btnAgregar" type="submit">Registrar</button>
                        <Link to='/login' >Iniciar sesión</Link>
                        
                    </Form>
                    )
                }}
            </Formik>  
        </div>

    );
}

export default RegisterFormik;