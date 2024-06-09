import Header from "../Header/Header"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Feeling = ()=>{
    const history = useHistory()
    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()

    const handleNext = ()=>{
        history.push('/understanding')
        dispatch({type: 'ADD_FEELING', payload: feeling})
        setFeeling('')
    }
    return(
        <>
        <Header />
        <h1>Feeling</h1>

        <h4>Feeling?</h4>
        <input type="Number" value={feeling} onChange={(event)=>setFeeling(event.target.value)} />
        <button onClick={()=>handleNext()}>Next</button>
        </>
    )
}

export default Feeling