const Validation = values => {
    const errors = {}
  
    if (!values.name) {
      errors.name = 'Name Required'
    } else if (values.name.length < 5) {
      errors.name = 'Name must be more than 5 char'
    }
  
    if (!values.username) {
      errors.username = 'Username Required'
    } else if (values.username.length < 8) {
      errors.username = 'Username must be more than 8 char'
    }
  
    if (!values.email) {
      errors.email = 'Email Required'
    } else if (values.email.length < 5) {
      errors.email = 'Enter your email'
    }
    if (!values.password) {
      errors.password = 'Password Required'
    } else if (values.password.length < 5) {
      errors.email = 'Enter your Password'
    }
    return errors
  }
  
  export default Validation
  