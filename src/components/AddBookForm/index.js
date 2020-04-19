import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addBook } from '../../helpers';

const AddBookForm = () => {

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          author: '',
          description: '',
          price: 0,
          genre: ''
        }}

        onSubmit={(values , { resetForm }) => {
          addBook(values)
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Field
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="title"
            />
            <ErrorMessage
              name="title"
              component="div"
            />
            <Field
              type="text"
              name="author"
              value={values.author}
              onChange={handleChange}
              placeholder="author"
            />
            <ErrorMessage
              name="author"
              component="div"
            />
            <Field
              type="description"
              as="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="description"
            />
            <ErrorMessage
              name="description"
              component="div"
            />
            <Field
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              placeholder="price"
            />
            <ErrorMessage
              name="price"
              component="div"
            />
            <Field
              name="genre"
              as="select"
              placeholder="genre"
            >
              <option value="genre">genre</option>
              <option value="empty">empty</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="fiction">Fiction</option>
              <option value="horror">Horror</option>
              <option value="poetry">Poetry</option>
              <option value="mystery">Mystery</option>
              <option value="biographies">Biographies</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="science fiction">Science Fiction</option>
              <option value="technology">Technology</option>
            </Field>
            <ErrorMessage
              name="genre"
              component="div"
            />
            <button type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddBookForm;