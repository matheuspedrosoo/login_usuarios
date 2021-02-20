import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import './Register.css'

const Register = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/user', values).then(resp => {
      const { data } = resp
      if (data) {
        localStorage.setItem('app-token', data)
        history.push('/login')
      }
    })
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  return (
    <>
      <div className="container">
        <div className="h1">
          <h1>Olá, seja bem-vindo!</h1>
        </div>
        <div>
          <p className="p">Para acessar a plataforma faça seu cadastro.</p>
        </div>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Login">
            <div className="nome">
              <div className="label-nome">
                <label> NOME</label>
              </div>
              <Field name="firstName" className="input-nome" />
              <ErrorMessage
                component="span"
                name="firstName"
                className="Login-Error-firstName"
              />
            </div>

            <div className="lastName">
              <div className="label-sobrenome">
                <label> SOBRENOME</label>
              </div>
              <Field name="lastName" className="input-sobrenome" />
              <ErrorMessage
                component="span"
                name="lastName"
                className="Login-Error-lastName"
              />
            </div>

            <div className="Login-Group">
              <div className="label-email">
                <label> E-MAIL</label>
              </div>
              <Field name="email" className="input-email" />
              <ErrorMessage
                component="span"
                name="email"
                className="Login-Error-EMAIL"
              />
            </div>

            <div className="Login-Group">
              <div className="label-senha">
                <label> SENHA</label>
              </div>
              <Field name="password" className="input-senha" />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error-SENHA"
              />
            </div>
            <button className="Login-Btn" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Register
