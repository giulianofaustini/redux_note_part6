import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

 import noteService from './services/notes'

import store from './store'


// let's clean up the main.jsx file a bit by moving the code related to the creation of the Redux store into its own, store.js file:
// const store = configureStore({
//   reducer:{
//   notes: noteReducer,
//   filter: filterReducer
// }
// })

// console.log(store.getState())

// A quick way to initialize the notes state based on the data received from the server is to fetch the notes in the index.js file and dispatch an action using the appendNote action creator for each individual note object:

// noteService.getAll().then(notes => notes.forEach(note => { store.dispatch(appendNote(note))}))


// noteService.getAll().then(notes =>
//   store.dispatch(setNotes(notes))
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
