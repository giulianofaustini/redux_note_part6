import { useEffect } from 'react'

import {initializeNotes} from './reducers/noteReducer'

import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   noteService
  //     .getAll().then(notes => dispatch(setNotes(notes)))
  // }, [])


 // this following dispatches the setNotes action from the App.js and adds them to the store
  useEffect(() => {
    dispatch(initializeNotes()) 
  }, []) 

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App