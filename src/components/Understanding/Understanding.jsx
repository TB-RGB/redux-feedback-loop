import Header from "../Header/Header"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Understanding = ()=>{
    const history = useHistory()
    const dispatch = useDispatch()
    const [understanding, setUnderstanding] = useState('')

    const handleNext =()=>{
        dispatch({type: 'ADD_UNDERSTANDING', payload: understanding})
        setUnderstanding('')
        history.push('/support')

    }

    return(
        <>
        <Header />
        <h1>Understanding</h1>
        <h3>Understanding?</h3>
        <input type="number" value={understanding} onChange={(event)=>setUnderstanding(event.target.value)}/>
        <button onClick={()=>handleNext()}>Next</button>
        </>
    )
}

export default Understanding