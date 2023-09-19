import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  const [successfullForm, setSuccesfullForm] = useState(false);

  const checkErrors = (values) => {
    let errors = {};
    if (!values.from_name) {
      errors.from_name = "Please enter a name";
    }

    if (!values.from_email) {
      errors.from_email = "Please enter a email";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
        values.from_email
      )
    ) {
      errors.from_email = "Please enter a valid email";
    }

    if (!values.message) {
      errors.message = "Please enter a message";
    }

    return errors;
  };

  const sendEmail = (values, { resetForm }) => {
    resetForm();

    emailjs
      .send(
        "service_sh08jlm",
        "template_2v1d89x",
        values,
        import.meta.env.PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          setSuccesfullForm(true);
          setTimeout(() => {
            setSuccesfullForm(null);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          console.log("Hola");
          setSuccesfullForm(false);
          setTimeout(() => {
            setSuccesfullForm(null);
          }, 3000);
        }
      );
  };

  return (
    <Formik
      initialValues={{ from_name: "", from_email: "", message: "" }}
      validate={checkErrors}
      onSubmit={sendEmail}
    >
      {({ errors }) => (
        <Form className="bg-[#00264B] p-8 mt-10 rounded-xl border-[1px] border-primary flex-auto">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-200 font-bold text-lg">
              Name:
            </label>
            <Field
              id="from_name"
              className="bg-[#00172F] px-4 py-2 rounded-xl text-white caret-primary"
              placeholder="Name"
              name="from_name"
            />
            <ErrorMessage
              name="from_name"
              component={() => (
                <p className="text-sm text-red-600 font-medium py-1">
                  {errors.from_name}
                </p>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label className="text-gray-200 font-bold text-lg">Email:</label>
            <Field
              className="bg-[#00172F] px-4 py-2 rounded-xl text-white caret-primary"
              placeholder="johndoe@gmail.com"
              name="from_email"
            />
            <ErrorMessage
              name="from_email"
              component={() => (
                <p className="text-sm text-red-600 font-medium py-1">
                  {errors.from_email}
                </p>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label className="text-gray-200 font-bold text-lg">Message:</label>
            <Field
              as="textarea"
              className="bg-[#00172F] px-4 py-2 rounded-xl h-40 overflow-y-auto text-white caret-primary"
              placeholder="Message"
              name="message"
            />
            <ErrorMessage
              name="message"
              component={() => (
                <p className="text-sm text-red-600 font-medium py-1">
                  {errors.message}
                </p>
              )}
            />
          </div>
          <button
            type="submit"
            className="btn w-full mt-4 font-medium bg-primary"
          >
            Send
          </button>
          {successfullForm ? (
            <p className="w-full text-center mt-4 font-medium text-green-500">
              Form sent successfully!
            </p>
          ) : successfullForm === false ? (
            <p className="w-full text-center mt-4 font-medium text-red-500">
              There was an error!
            </p>
          ) : (
            ""
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
