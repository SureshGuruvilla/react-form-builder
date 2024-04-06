import Form from '../commons/Form/Form';
import { specs } from './_signupformspecs';

function SignupForm() {
  const handleSubmit = (isFormValid: boolean, data: any)=>{
      console.log(isFormValid, data);
  }
  return (
    <Form 
      style={{marginBlock: '50px'}}
      id='form'
      formSpecs={specs}
      onSubmit={handleSubmit}
    />
  )
}

export default SignupForm