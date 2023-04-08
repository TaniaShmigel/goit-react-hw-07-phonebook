import { GlobalStyle } from './GlobalStyle';

import { Container, TitleContact, TitleForm } from './App.styled';
import FormContact from './FormContact';
import SearchFilter from './SearchFilter';
import ListContact from './ListContact';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <TitleForm>Phonebook</TitleForm>
      <FormContact />
      <TitleContact>Contacts</TitleContact>
      <SearchFilter />
      <ListContact />
      </Container>
  );
}
