import 'bootstrap/dist/css/bootstrap.min.css';
// import "../assets/css/style.css";
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
// import hook useHitory from react router dom
import { Redirect, useHistory } from 'react-router-dom';

//import axios
import axios from 'axios';
import Swal from 'sweetalert2';
import { default as Auth } from '../components/Auth';

function Login() {

  const [validated, setValidated] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // setValidated(Auth());

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    username: 'Please check the username',
    password: 'Please check the password',
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('email', email);
    formData.append('password', password);

    // console.log('email:' + email);
    // console.log('password:' + password);

    //send data to server
    await axios.post('http://localhost:8000/api/users/login', formData)
      .then((response) => {

        // console.log(response.data);
        if (response.data.response_code === 404) {
          Swal.fire({
            icon: "error",
            text: response.data.message,
          });
        } else {
          Swal.fire({
            icon: "success",
            text: "You are logged in !",
          });

          // console.log(response.data.conntent.api_token);

          // localStorage.removeItem('api_token');
          localStorage.setItem('api_token', response.data.conntent.api_token);

          // validated = Auth.checkLogin;
          // console.log(Auth.checkLogin);
          // setValidated(Auth());
          history.push('/');
          // this.props.history.push("/");
          // return <Redirect to="/Home" />


        }

        //set token on localStorage
        // localStorage.setItem('token', response.data.token);

        //redirect to dashboard
        // history.push('/dashboard');

        // console.log(response.data.response_code);
      })
      .catch((error) => {

        //assign error to state "validation"
        // setValidation(error.response.data);
        console.log(error);
      })
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   var [username, password] = document.forms[0];

  //   const userData = database.find((user) => user.username === username.value);

  //   if (userData) {
  //     if (userData.password !== password.value) {
  //       console.log('password salah');
  //       setErrorMessages({ name: "password", message: errors.password });
  //       // setValidated(true);
  //     } else {
  //       setValidated(true);
  //       console.log('success');
  //     }
  //   } else {
  //     console.log('username salah');
  //     setErrorMessages({ name: "username", message: errors.username });
  //     // setValidated(true);
  //   }

  // }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Badge bg="danger" text="white">{errorMessages.message}</Badge>
    );

  const renderForm = (
    <>
      
        <form onSubmit={handleSubmit}>
          <div className="form-group row mt-2 col-md-16" >
            <label htmlFor="staticEamil" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-7">
              <input type="email " value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
              {/* {renderErrorMessage("username")} */}
            </div>
          </div>
          <div className="form-group row mt-2 col-md-16">
            <label htmlFor="staticPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-7">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Password" required />
              {/* {renderErrorMessage("password")} */}
            </div>
          </div>
          <div className="form-group row mt-2 col-md-16">
            <label htmlFor="staticPassword" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <div className="button-container">
                <input type="submit" />
              </div>
            </div>
          </div>
          {/* <div className="button-container">
          <input type="submit" />
        </div> */}
        </form>

    </>
  );

  return (
    <Card style={{ width: '40rem' }}>
      <Card.Body>
        Login
        {/* {validated ? <div>Your are logged in</div> : renderForm} */}
        {renderForm}
      </Card.Body>
    </Card>

  );
}

export default Login