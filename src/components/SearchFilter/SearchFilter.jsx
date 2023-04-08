import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Label, Input } from './SearchFilter.styled';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={handleFilter} />
    </Label>
  );
};

export default SearchFilter;
