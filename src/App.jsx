import './App.css'
// NOTE : use of redux 
import { useDispatch , useSelector } from 'react-redux'
// NOTE : import the action from cunter sclice 
import { increment , subsctract , multiplication , divide , reset} from './features/counter/counterSlice.js'

import { useState } from 'react'

function App() {

  // NOTE : read the state from redux store 
   const count = useSelector((state) =>state.counter.value)
   const history  = useSelector((state)=>state.counter.history)

  //  NOTE : dispatch function 
  const dispatch = useDispatch()

  // NOTE :local state
  const [increamentAmount , setIncrementAmount] = useState(9)

  return (
    <>
     <h1>this is counter app using </h1>
     <button onClick={()=>dispatch(increment())}>click here to update the valye </button>
     <h1>updated value :{count}</h1>
     <button onClick={()=>dispatch(subsctract())}>click me to subsctract the value</button>
     <button onClick={()=>dispatch(multiplication())}>click me to mulltiply the value the value</button>
      <button onClick={()=>dispatch(divide())}>Click to divide the value</button>
      <button onClick={()=>dispatch(reset())}>Click to reset the value</button>
    </>
  )
}

export default App
