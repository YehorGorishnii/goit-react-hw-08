import Contact from '../Contact/Contact';
import { selectfilterContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectfilterContacts);

  return (
    <ul className={css.box}>
      {contacts.map(item => (
        <li className={css.item} key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
