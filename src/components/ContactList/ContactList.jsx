import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contactsList = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contact__list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={styles.contact__item} key={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            variant="outline-danger"
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
