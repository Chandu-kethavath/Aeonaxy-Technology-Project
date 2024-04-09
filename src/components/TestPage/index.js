


import {useState} from 'react';
// import {Link} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'



function TestPage(){
    const initialValues ={username: "", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);


    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value} =e.target
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
        setIsSubmit(true);
    };

    // const handleLogin = () =>{
    //     setLoggedIn(true);
    // };
    // if(loggedIn){
    //     return<Redirect to ="/login" />
    // }

    useEffect(() => {
        console.log(formErrors);
     if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formErrors);
     }
    },[formErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        
    };


    const validate =  (values) => {
        const errors = {};
        const regax =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username="Username is required!";
        }
        if(!values.email){
            errors.email="Email is required!";
        } else if (!regax.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if(!values.password){
            errors.password="Password is required!";
        } else if (values.password < 4){
            errors.password = "Password must be required more than 4 charaters!";
        }
        else if (values.password > 10){
            errors.password = "Password cannot exceed  more than 10 charaters!";
        }
        return errors;

    };

    return(
        <div>
           {Object.keys(formErrors).length === 0 && isSubmit ? (
           <div className='text-bg'>Login Successfully</div>
           ) :( 
           <pre>{JSON.stringify(formValues,undefined,2)}</pre>
           )}
            
           <form onSubmit={handleSubmit} >
            <h1>Login Form</h1>
            <div>
                <div>
                    <div>
                        <label>Username</label>
                        <input placeholder="username" name="username" 
                        type="text" value={formValues.username} 
                        onChange={handleChange} />
                    </div>
                    <p>{formErrors.username}</p>
                    <div>
                        <label>Email</label>
                        <input placeholder="email"  
                        name="email" type="email" value={formValues.email} 
                        onChange={handleChange} />
                    </div>
                    <p>{formErrors.email}</p>
                    <div>
                        <label>Password</label>
                        <input placeholder="password"  
                        name="password" type="password" value={formValues.password} 
                        onChange={handleChange} />
                    </div>
                    <p>{formErrors.password}</p>
                    <button >Submit</button>
                </div>
            </div>
           </form>
           <button className='click'>Click Here</button>
        </div>
    )

}
export default TestPage