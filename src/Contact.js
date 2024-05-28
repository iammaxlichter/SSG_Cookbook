import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <div className="contact">
            <Container fluid className='align-items-center justify-content-center' style={{ paddingTop: '50px', width: '80vw' }}>
                <Row>
                    <Col md={12} className="text-center mainTitle" style={{  }}>
                        <p className="mainTitle">Contact Us</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
