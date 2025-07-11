import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from "./Button";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(10, 'Message must be at least 10 characters'),

  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: values.name,
        email: values.email,
        message: values.message,
        timestamp: new Date(),
      });

      console.log("Document written with ID:", docRef.id);
      setSuccessMessage("");
       setTimeout(() => setSuccessMessage(""), 2000);
      resetForm();
    } catch (error) {
      console.error("Error adding document:", error);
      setSuccessMessage("❌ Something went wrong. Please try again.");
        setTimeout(() => setSuccessMessage(""), 2000); 
    }
    setSubmitting(false);
  };

  return (


      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
        <Form className="formik-form">

            <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

            <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Enter your message"
            />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>

          <div className="button-container">
             <Button
              text={isSubmitting ? "Submitting..." : "Sumbit"}
              width="10rem"
              height="3rem"
              onClick={handleSubmit} 
              isSubmitting={isSubmitting}
            />
            </div>
            {successMessage && ( <p className="success-message">{successMessage}</p>
  )}
          </Form>
        )}
      </Formik>
  );
};
export default ContactForm;
