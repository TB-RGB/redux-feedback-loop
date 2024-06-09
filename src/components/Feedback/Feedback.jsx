import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


const Feedback = ()=>{
    const history = useHistory()

    return(
        <>
        <h1>Feedback</h1>
        <button onClick={()=>history.push('/')}>Leave New Feedback</button>
        </>
    )
}

export default Feedback