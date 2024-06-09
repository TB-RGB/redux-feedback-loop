import Header from "../Header/Header"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Comments = ()=>{
    const history = useHistory()
    const dispatch = useDispatch()
    const [comments, setComments] = useState('')

    const handleNext =()=>{
        dispatch({type: 'ADD_COMMENTS', payload: comments})
        history.push('/review')
        setComments('')
    }
    return(
        <>
        <Header />
        <h1>Comments</h1>

        <h4>Comments?</h4>
        <input type="text" value={comments} onChange={(event)=>setComments(event.target.value)} />
        <button onClick={()=>handleNext()}>Next</button>
        </>
    )
}

export default Comments