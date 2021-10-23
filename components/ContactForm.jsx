import classNames from 'classnames'
import { gql } from 'graphql-request'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import axios from 'axios'

export const ContactFormFragment = gql`
  fragment ContactFormFragment on ContactFormRecord {
    id
    title
    image {
      url
    }
  }
`

const ContactForm = ({ image, title }) => {
  return (
    <div
      className={classNames('mx-auto bg-light py-8 rounded-md my-8', {
        'max-w-7xl': image,
        'max-w-3xl': !image,
      })}
    >
      <div
        className={classNames('grid', {
          'md:grid-cols-2 grid-cols-1': image,
          'grid-cols-1': !image,
        })}
      >
        {image && (
          <div className="relative h-full w-4/5 mx-auto">
            <Image
              src={image}
              layout="fill"
              className="object-cover w-auto h-full border-md overflow-hidden rounded-md"
            />
          </div>
        )}
        <div className="w-full px-8 py-24 bg-white rounded-md">
          <h2 className="text-6xl text-coal">{title}</h2>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.name) {
                errors.name = 'Enter your name'
              }
              if (!values.email) {
                errors.email = 'Email is required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }
              if (!values.message) {
                errors.message = 'Enter a message'
              }
              return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await axios.post('/api/mail', {
                  name: values.name,
                  email: values.email,
                  message: values.message,
                })
                alert('Message sent')
              } catch (error) {
                console.log(error)
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                <div className="relative w-full">
                  <Field
                    type="text"
                    name="name"
                    className="w-full my-4 p-2 bg-transparent border-b border-coal placeholder-coal focus:outline-none"
                    placeholder="Name"
                  />
                  <Error name="name" />
                </div>
                <div className="relative w-full">
                  <Field
                    type="email"
                    name="email"
                    className="w-full my-4 p-2 bg-transparent border-b border-coal placeholder-coal focus:outline-none"
                    placeholder="Email"
                  />
                  <Error name="email" />
                </div>
                <div className="relative w-full">
                  <Field
                    type="text"
                    name="message"
                    component="textarea"
                    className="w-full my-4 p-2 bg-transparent border-b border-coal placeholder-coal focus:outline-none"
                    placeholder="Message"
                  />
                  <Error name="message" />
                </div>
                <CustomButton type="submit" disabled={isSubmitting}>
                  Submit
                </CustomButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

const Error = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="absolute text-red-500 text-sm font-medium transform top-1/2 -translate-y-1/2 right-4"
    />
  )
}

export default ContactForm
