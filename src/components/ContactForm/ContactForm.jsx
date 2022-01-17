import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './ContactForm.module.css';
export default function ContactForm() {
  const [name, setName] = useState('');
  console.log(name);
  const [number, setNumber] = useState('');
  console.log(number);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log({ name, value });
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    navigate('/contacts');
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <Button variant="outline-light" type="button" size="sm" onClick={() => navigate(-1)}>
        Back to contact list
      </Button>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <Button variant="primary" type="submit" size="sm">
            Add contact
          </Button>
        </form>
      </Container>
    </>
  );
}
