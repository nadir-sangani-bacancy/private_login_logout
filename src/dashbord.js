import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashbord extends React.Component {
    componentDidMount() {

    }
    render() {
        let tok = localStorage.getItem("email")
        return (
            <div class="login_div">
                <Jumbotron>
                    <h3>LOGOUT</h3>
                <p>Login as {tok}</p>
                {tok && <Link exact to="/login">
                    <Button variant="outline-success" 
                    onClick={() => { localStorage.removeItem("email") }} >Logout</Button>
                </Link>
                }
                { !tok && <Redirect to="/login" /> }
                </Jumbotron>

            </div>
        )
    }
}
export default Dashbord;