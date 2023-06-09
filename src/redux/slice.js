import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Max Farmaha', number: '459-12-56' },
  { id: 'id-2', name: 'Mykyta Slobodyanuck', number: '443-89-12' },
  { id: 'id-3', name: 'Ihor Vinnik', number: '645-17-79' },
  { id: 'id-4', name: 'grey4uk14 Stakhura', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => (state = action.payload.toLowerCase()),
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
