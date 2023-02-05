import styles from '../Contacts/Contacts.module.scss';
import propTypes from 'prop-types';

export default function Contacts({ contacts, removeContact }) {
  const contactItem = contacts.map(({ name, number, id }) => {
    return (
      <li className={styles.listItem} key={id}>
        {name}: {number}
        <button
          className={styles.button}
          type="button"
          onClick={() => removeContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className={styles.contacts}>
      <ol className={styles.contactsList}>{contactItem}</ol>
    </div>
  );
}

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       number: PropTypes.string,
//       id: PropTypes.string,
//     })
//   ),
//   removeContact: PropTypes.func,
// };
