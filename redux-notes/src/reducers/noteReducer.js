import { createSlice } from '@reduxjs/toolkit'

import noteService from '../services/notes'

// const initialState = [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]

// const generateId = () =>
//   Number((Math.random() * 1000000).toFixed(0))


const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    // let's replace the createNote action creator created by the createSlice function with an asynchronous action creator (below)

    // createNote(state, action) {
    //   console.log(JSON.parse(JSON.stringify(state)))
    //   state.push(action.payload)
    // },


    toggleImportanceOf(state, action) {
      console.log(JSON.parse(JSON.stringify(state)))   
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        important: !noteToChange.important 
      }
      
      return state.map(note =>
        note.id !== id ? note : changedNote 
      )
    },


    appendNote(state, action) {
      state.push(action.payload)
    },


    // Let's add an action creator setNotes which can be used to directly replace the notes array.
    setNotes(state, action) {
      return action.payload
    }
  },
})

export const { toggleImportanceOf , appendNote, setNotes} = noteSlice.actions

// define an action creator initializeNotes which initializes the notes based on the data received from the server

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}
//  an asynchronous operation is executed, after which the action changing the state of the store is dispatched.

export const createNote = content => {
  return async dispatch => {
    const newNote = await noteService.createNote(content)
    dispatch(appendNote(newNote))
  }
}



export default noteSlice.reducer

















// const initialState = [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]

// const noteReducer = (state = initialState, action) => {
//   console.log('ACTION: ', action)
//   switch(action.type) {
//     case 'NEW_NOTE':
//       return [...state, action.payload]
//     case 'TOGGLE_IMPORTANCE':
//       const id = action.payload.id
//       const noteToChange = state.find(n => n.id === id)
//       const changedNote = { 
//         ...noteToChange, 
//         important: !noteToChange.important 
//       }
//       return state.map(note =>
//         note.id !== id ? note : changedNote 
//       )
//     default:
//       return state
//     }
//   } 

// const generateId = () =>
//   Number((Math.random() * 1000000).toFixed(0))

// export const createNote = (content) => {
//   return {
//     type: 'NEW_NOTE',
//     payload: {
//       content,
//       important: false,
//       id: generateId()
//     }
//   }
// }
// export const toggleImportanceOf = (id) => {
//   return {
//     type: 'TOGGLE_IMPORTANCE',
//     payload: { id }
//   }
// }  

// export default noteReducer