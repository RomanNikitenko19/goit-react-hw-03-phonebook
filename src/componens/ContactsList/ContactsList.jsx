import PropTypes from "prop-types";
const ContactsList = ({ filterContacts, deleteContacts }) => {
  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {`${name}: ${number}`}
              <button onClick={() => deleteContacts(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  deleteContacts: PropTypes.func.isRequired,
  filterContacts: PropTypes.array.isRequired,
};

export default ContactsList;
