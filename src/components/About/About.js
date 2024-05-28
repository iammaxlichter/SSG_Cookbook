import React from 'react';
import '../../assets/styles/About.css';
import ImageSlideshow from '../ImageSlideshow'; 
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap grid compo
import teamPhoto from  '../../assets/images/AboutPhotos/teamPhoto.jpg';

function About() {
    return (
        <div className="about">
            <Container fluid className='align-items-center justify-content-center' style={{ paddingTop: '100px', width: '80vw' }}>
                <Row>
                    <Col md={12} className="text-center mainTitle" style={{  }}>
                        <p className="mainTitle">About the Authors</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="d-flex align-items-center justify-content-center custom-padding-left" style={{ paddingBottom: '100px', fontSize: '15px' }}>
                        <div>
                            Welcome to the Southwest Solutions Group Intern cookbook project! We are a group of 18 interns who are all undergraduates at various schools across the nation. We have all come together to create a cookbook that showcases the diverse flavors and cultures of the employees here at SSG. Through working on this cookbook, the intern class has gotten even closer to each other and the rest of the company. We are thrilled to share the recipes within the cookbook and hope to bring both new and familiar flavors to our readers. We hope that each recipe brings you the joy that it brought its authors.
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center justify-content-center custom-padding-right" style={{ paddingBottom: '100px' }}>
                        <img
                            src={teamPhoto}
                            alt="Group of interns at Southwest Solutions Group"
                            className="img-fluid"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <ImageSlideshow /> 
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" style={{ width: '40%', paddingTop: '25px', margin: 'auto', fontSize: '16px' }}>
                        Here we have each and every intern's individual photo.
                        Click on their photo to view their LinkedIn!
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
