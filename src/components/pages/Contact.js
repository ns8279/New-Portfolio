import React, { useState } from "react";
import { validateEmail} from '../../utils/helpers';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {

    const [formState, setFormState] = useState({name: '', email: '', message: '',});
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        setFormState({...formState, [e.target.name]: e.target.value})

        //check for the email to be entered in a correct format and required
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
               // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }



        //check for the message to be entered / required
        if (e.target.name === 'message') {

        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }


        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

    }
    // console.log(formState)

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    
    return (
        
        <section>
            <Form onSubmit = {handleSubmit} className = "mx-5 my-5">

            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder={name} onBlur={handleChange} name = "name"/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder={email} onBlur = {handleChange}  name = "email"/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder = {message} rows="3" onBlur = {handleChange} name = "message"/>
            </Form.Group>

            
            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>

        </section>
    )
};

export default Contact;