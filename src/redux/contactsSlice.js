import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact(state, { payload }) {
      const index = state.contacts.findIndex(contact => contact.id === payload);
      state.contacts.splice(index, 1);
    },
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
  },
  selectors: {
    selectContacts: state => state.contacts,
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
export const { selectContacts } = contactSlice.selectors;
























// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid'





// const slice = createSlice({
//     name: 'contacts',
//     initialState: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     reducers: {
//         deleteContact: (state, { payload }) => {
//             state = state.filter(item => item.id !== payload);
//         },
//         addContact: {
//             prepare(contact) {
//                 return {
//                     payload: {
//                         ...contact,
//                         id: nanoid(),
//                     },
//                 };
//             },
//             reducer(state, { payload }) {
//                 state.push(payload);
//             },
//         },
//     },
//     extraReducers: {},
// });


// export const contactsReducer = slice.reducer;
// export const { deleteContact, addContact } = slice.actions
// export const {selectContacts} = slice.selectors