import { useState } from "react"
import validation from "../validation"

const Form = ({login}) => {

    const [userData, SetData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})


    const handleChange = (event) => {
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
        SetData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }


    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />
                
                {errors.e1 ? <p>{errors.e1}</p> : errors.e2 ? <p>{errors.e2}</p> : <p>{errors.e3}</p>}
                
                <hr />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}

                <hr/>

                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form