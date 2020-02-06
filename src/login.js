import React from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            email : ''
        }
    }

    setEmail=(e)=>{
        this.setState({
            email : e.target.value
        })
    }
    
    render() {
        return (
            <div class="login_div">
                <Form>
                    <Jumbotron>
                        <h3>LOGIN</h3><br/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={(e)=>this.setEmail(e)} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <Link to="/Dashbord">
                        <Button variant="outline-success" onClick={()=>{localStorage.setItem('email',this.state.email)}}>Login</Button>
                    </Link>
                    </Jumbotron>
                </Form>
            </div>
        )
    }
}
export default Login;