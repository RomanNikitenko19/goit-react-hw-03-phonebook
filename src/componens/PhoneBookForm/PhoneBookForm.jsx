import PropTypes from "prop-types";
import Title from "../Title";
import Form from "../Form";

const PhoneBookForm = ({ addContacts}) => {
  return (
    <>
      <Title title={"Phonebook"} />
      <Form addContacts={addContacts} />
    </>
  );
};

PhoneBookForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};

export default PhoneBookForm;
