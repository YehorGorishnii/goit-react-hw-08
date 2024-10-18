import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6707a8448e86a8d9e42c5c8c.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll' ,async (_, thunkAPI) => {
    try {
      const reponse = await axios.get('/contacts');
      return reponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    try {
      const reponse = await axios.post('/contacts', newContact);
      return reponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
      const reponse = axios.delete(`/contacts/${contactId}`, deleteContact);
      
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
