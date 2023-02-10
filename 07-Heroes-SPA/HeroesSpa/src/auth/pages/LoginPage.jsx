import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContex";

export const LoginPage = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const onLogin = () =>{
    login('Leandro Martín')
    navigate('/Marvel',{
      replace:true
  });
  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button 
        className='btn btn-primary'
        onClick={onLogin}>
        login
      </button>
    </div>
  )
}
