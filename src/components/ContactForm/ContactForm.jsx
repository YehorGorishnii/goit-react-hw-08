import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
  id: "",
};

const validator = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Is Required!"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Is Required!"),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispstch = useDispatch()

  const handleNewContactSubmit = (values, action) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispstch(addContact(newContact))
    action.resetForm(); 
    
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleNewContactSubmit}
      validationSchema={validator}
    >
      <Form className={css.box}>
        <div className={css.list}>
          <label htmlFor={nameId}> Name</label>
          <Field type="text" name="name" id={nameId} className={css.imput} />
          <ErrorMessage name="name" component="span"  className={css.error} />
        </div>

        <div className={css.list}>
          <label htmlFor={numberId}> Number</label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.imput}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
