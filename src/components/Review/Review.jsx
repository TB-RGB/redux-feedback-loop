import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector } from "react-redux"
import axios from "axios"

const Review = ()=>{
    const history = useHistory()
    const feelings = useSelector(store=>store.feedback.feeling)
    const understanding = useSelector(store=>store.feedback.understanding)
    const support = useSelector(store=>store.feedback.support)
    const comments = useSelector(store=>store.feedback.comments)
    const feedback = useSelector(store=>store.feedback)

    const handleSubmit =()=>{
        
        axios.post('/api/feedback', feedback)
            .then(response=>{
                history.push('/feedback')
            })
            .catch(err=>{
                console.error('Error in axios POST', err)
            })
    }

    return(
        <>
        <h1>Review Your Feedback</h1>
        <h4>Feelings: {feelings}</h4>
        <h4>Understanding: {understanding}</h4>
        <h4>Support: {support}</h4>
        <h4>Comments: {comments}</h4>
        <button onClick={()=>handleSubmit()}>Submit</button>
        </>
    )
}

export default Review