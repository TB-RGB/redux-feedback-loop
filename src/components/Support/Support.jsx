import Header from "../Header/Header"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Support = ()=>{
    const history = useHistory()
    const dispatch = useDispatch()
    const [support, setSupport] = useState('')

    const handleNext = ()=>{
        dispatch({type: 'ADD_SUPPORT', payload: support})
        history.push('/comments')
        setSupport('')
    }

    return(
        <>
        <Header />
        <h1>Support</h1>
        <h3>Support?</h3>
        <input type="number" value={support} onChange={(event)=>setSupport(event.target.value)}/>
        <button onClick={()=>handleNext()}>Next</button>
        </>
    )
}

export default Support