import { GlobalStyle } from './GlobalStyle';

import { Container, TitleContact, TitleForm } from './App.styled';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import FormContact from './FormContact';
import SearchFilter from './SearchFilter';
import ListContact from './ListContact';

export default function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <TitleForm>Phonebook</TitleForm>
      <FormContact />
      <TitleContact>Contacts</TitleContact>
      <SearchFilter />
      {contacts.length === 0 && isLoading && <p>loading...</p>}
      {contacts.length === 0 && !isLoading ? (
        <p>You don't have contacts ☹️</p>
      ) : (
        <ListContact />
      )}
      {error && <p>Something went wrong, please try again later</p>}
    </Container>
  );
}
