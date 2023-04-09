import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { addContact } from 'redux/operations';

import {
  FormikForm,
  Label,
  Input,
  ErrorText,
  FormBtn,
} from './FormContact.styled';

const FormContact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    phone: '',
  };

  const FormScheme = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
    phone: string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          excludeEmptyString: true,
        }
      )
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const check = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm({
      name: '',
      phone: '',
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormScheme}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <FormikForm autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorText name="name" component="p" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="phone" />
          <ErrorText name="phone" component="p" />
        </Label>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormikForm>
    </Formik>
  );
};

export default FormContact;
