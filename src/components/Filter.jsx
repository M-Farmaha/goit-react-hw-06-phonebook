import PropTypes from 'prop-types';
import { ContactFeature, Input } from './styled';

export const Filter = ({ filter, handleFilter }) => {
  const handleChange = e => {
    handleFilter(e.currentTarget.value);
  };

  return (
    <>
      <ContactFeature>Find contacts by name</ContactFeature>
      <Input type="text" value={filter} onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
