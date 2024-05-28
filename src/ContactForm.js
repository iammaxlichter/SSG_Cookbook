import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const form = event.target;

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    alert("Thank you for your message! We will get back to you soon.");
                    form.reset(); 
                } else {
                    response.json().then(data => {
                        if (data.errors) {
                            alert('Oops, there was a problem: ' + data.errors.map(error => error.message).join(", "));
                        } else {
                            alert("Oops, there was a problem submitting your form");
                        }
                    });
                }
            }).catch(error => {
                alert("Oops, there was a problem submitting your form");
            });
    };

    return (
        <Form action="https://formspree.io/f/mleqkyjq" method="POST" onSubmit={handleSubmit}>
            <h2 className='mb-4'>Message Us</h2>
            <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" placeholder="Message" />

            </Form.Group>
            <Button variant="custom" type="submit">
                Send message
            </Button>
        </Form>
    );
}

export default ContactForm;
