import { ContactFeature, Input } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <ContactFeature>Find contacts by name</ContactFeature>
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};
