import { useSelector } from 'react-redux';

import { selectContactByName, selectFilter } from 'redux/selectors';
import { List } from './ListContact.styled';
import ElementContact from '../ElementContact';

const ListContact = () => {
  const contacts = useSelector(selectContactByName);
  const filter = useSelector(selectFilter);

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const makeList = array => {
    return array.map(({ id, name, phone }) => {
      return (
        <ElementContact
          key={id}
          contactName={name}
          contactNumber={phone}
          contactId={id}
        />
      );
    });
  };
  return <List>{makeList(makeFiltredContacts())}</List>;
};

export default ListContact;
