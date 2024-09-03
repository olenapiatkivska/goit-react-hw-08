import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactBox}>
      <div className={css.contactBoxWrapp}>
        <p className={css.contactText}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.contactText}>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
