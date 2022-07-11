import { Formik, Form, Field , ErrorMessage} from "formik";
import React from "react";
import '../../../css/taskFormik.css';
import * as Yup from 'yup';

const formSchema = Yup.object().shape(
    {
        title: Yup.string().required('Tiene que introducir un título'),
        description : Yup.string().required('Debe introducir una descripción'),
        priority : Yup.string().required('Debes seleccionar la prioridad')
    }
)



const TaskFormik = ({addTask}) => {
    const initialCredentials = {
        title:'',
        description:'',
        priority : ''
    }
    return(
        <div className="formik">
            <h4>Creador de tareas</h4>
            <Formik
                initialValues={ initialCredentials }
                //yup validation schema
                validationSchema = { formSchema }
                // onSubmit={async (values) => {
                //     await new Promise((r) => setTimeout(r, 500));
                //     alert(JSON.stringify(values, null, 2));
                // }
                onSubmit={values => {
                    addTask(values);
                }
                
                }
            >
                { props => {
                    const {
                        values,
                        touched,
                        errors
                    } = props

                    return(
                        <Form>
                        <label htmlFor="title">Título</label>
                        <Field id="title" name="title" placeholder="Ingrese titulo" />
                        {
                            errors.title && touched.title && (<div className="error"><ErrorMessage name="title"/></div>)
                        }

                        <label htmlFor="description">Descripción</label>
                        <Field id="description" name="description" placeholder="Ingrese descripcion" />
                        {
                            errors.description  && touched.description && (<div className="error"><ErrorMessage name="description"/></div>)
                        }
                        <div id="my-radio-group">Prioridad</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="priority" value="Normal" />
                                    NORMAL
                                </label>
                                <label>
                                    <Field type="radio" name="priority" value="Bloqueante" />
                                    BLOQUEANTE
                                </label>
                                <label>
                                    <Field type="radio" name="priority" value="Urgente"/>
                                    URGENTE
                                </label>
                            </div>
                        {
                            errors.priority && (<div className="error"><ErrorMessage name="priority"/></div>)
                        }
                        <button type="submit">Submit</button>
                    </Form>
                    )
                }}

                    

                    
                
            </Formik>  
        </div>

    );
}

export default TaskFormik;