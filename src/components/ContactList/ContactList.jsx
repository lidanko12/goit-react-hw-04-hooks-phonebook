
import s from './ContactList.module.css'


export default function ContactList({ contacts, onDeleteContact }) {
  return (
  <ul className={s.list}>
      {contacts.map(({id,name,number }) => (
        <li className={s.listItem} key={id}>
          {`${name}: ${number}`}
          <button
            className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


