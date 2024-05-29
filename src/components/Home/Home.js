import React from 'react';
import '../../assets/styles/Home.css'; // Make sure your CSS file is properly linked
import coverImage from '../../assets/images/HomePhotos/CBCover.png'; // Import the image used in the right column
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap grid components

function Home() {
    return (

        <div id="home" className="home">
            <Container>
                <Container fluid>
                    <Row className="align-items-center justify-content-center" style={{ height: '100vh' }}>
                        <Col md={6} className="text-column text-center align-items-center justify-content-center">
                            <div className="leftCol">
                                <p className="intro-line">Delicious, easy recipes</p>
                                <p className="main-title">SSG Cookbook</p>
                                <p className="call-to-action">Buy now, Only $25!</p>
                            </div>
                        </Col>
                        <Col md={6} className="image-column mx-auto text-center justify-content-center align-items-center">
                            <div className="rightCol">
                                <img
                                    src={coverImage}
                                    alt="Cover"
                                    className="img-fluid"
                                    style={{ height: '400px' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Home;
