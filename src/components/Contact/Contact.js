import React from 'react';
import '../../assets/styles/Contact.css';
import ContactForm from './ContactForm'
import CompanyLogo from '../../assets/images/ContactPhotos/ssglogo.png'
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className="contact">
            <Container fluid className='align-items-center justify-content-center' style={{ paddingBottom: '75px', paddingTop: '50px', width: '75vw' }}>
                <Row>
                    <Col md={12} className="text-center mainTitle" style={{}}>
                        <p className="mainTitle">Contact Us</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="contact-info" style={{ paddingBottom: '50px' }}>
                        <h2 className='mb-5'>Get in touch</h2>
                        <p>If you have any questions please reach out to us through text or email on the contact details provided below. Also, you can provide your information and send us a message and we will contact you shortly. Thank you!</p>
                        <img src={CompanyLogo} alt="Company Logo" className="w-75 company-logo pt-5 pb-5" />
                        <div className="contact-details">
                            <p>Address: 2535-B TX-121 #110, Lewisville, Texas</p>
                            <p>Email: zyadani@southwestsolutions.com</p>
                            <p>Phone: +1(214)492-9721</p>
                        </div>
                        <div className="social-media-icons mt-5">
                            <a href="https://www.facebook.com/profile.php?id=100093305784958" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://instagram.com/ssg_interns" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/company/southwest-solutions-group/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </Col>
                    <Col md={6}>

                        <ContactForm />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Contact;

