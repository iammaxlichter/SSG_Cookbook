import React from 'react';
import './Buy.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Buy() {
    return (
        <div className="buy" style={{ backgroundColor: '#004F9B', paddingBottom: '80px' }}>
            <Container fluid className='align-items-center justify-content-center' style={{ paddingTop: '50px', width: '80vw' }}>
                <Row>
                    <Col md={12} className="text-center mainTitle">
                        <p className="mainTitle" style={{ color: 'white' }}>Buy Now, Only $25!</p>
                    </Col>
                </Row>
                <Row>

                    {/* PayPal Card */}
                    <Col sm={12} md={6} lg={4} className='mb-4'>
                        <Card>
                            <a href="https://www.paypal.com/paypalme/SSGCookbook?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=aa77db92-0624-11ee-b1ac-40a6b7228275&ppid=RT000269&cnac=US&rsta=en_US%28en-US%29&cust=7HB4Z9TWJHMUY&unptid=aa77db92-0624-11ee-b1ac-40a6b7228275&calc=f602033308832&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.175.0&xt=104038%2C124817" target="_blank" rel="noopener noreferrer">
                                <Card.Img className="cardImage" variant="top" src="/BuyPhotos/paypal.png" />
                            </a>

                            <Card.Body>
                                <Card.Title className="mx-auto text-center mb-4"><strong>PayPal Payment Instructions</strong></Card.Title>
                                <Card.Text as="div">
                                    <ol className="paypal-steps">
                                        <li>Click the PayPal icon to the right of this text.</li>
                                        <li>Click the blue "Send" button (if the name above "@SSGCookbook" is Bethany Atencio, you are in the right place).</li>
                                        <li>Log-in to your PayPal account (if you aren't logged in already).</li>
                                        <li>Put $25.00 for the dollar amount.</li>
                                        <li>Under the payment, in the box that says "What's this payment for?" put <strong>"SSGCookbook (YOUR FULL NAME)/(YOUR EMAIL)/(SHIPPING ADDRESS)/(PHYSICAL COPY or PDF)".</strong></li>
                                        <li>Click the "Continue" and send the payment.</li>
                                        <li>Select the "For Friends and Family" option and continue and pay.</li>
                                        <li>You won't get a confirmation email, but we will email you shortly regarding your purchase. If you opted for the PDF version, the email will contain the copy.</li>
                                    </ol>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Zelle and BethanyQR Card */}
                    <Col sm={12} md={6} lg={4} className='mb-4'>
                        <Card>
                            <Card.Body>
                                {/* Row for images */}
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col xs={7}>
                                        <Card.Img style={{ padding: '25px' }} variant="top" src="/BuyPhotos/zelle.png" />
                                    </Col>
                                    <Col xs={5}>
                                        <Card.Img className="" variant="top" src="/BuyPhotos/BethanyQR.jpg" />
                                    </Col>
                                </Row>
                                <Card.Title className="mx-auto text-center mb-4 mt-4"><strong>Zelle Payment Instructions</strong></Card.Title>
                                <Card.Text as="div">
                                    <ol className="paypal-steps">
                                        <li>Log-in to your banking app and find the option where you can "Send/Transfer Money (through Zelle)"</li>
                                        <li>Scan the QR Code below if you can / there is an option. If the QR code doesn't work or you are on mobile, go to the next step.</li>
                                        <li>There should be an option to send money to the number and name to the left (970-697-7192 Bethany Atencio).</li>
                                        <li>Type in $25.00 for the dollar amount.</li>
                                        <li>Under the payment, in the box that says "What's this payment for?" put <strong>"SSGCookbook (YOUR FULL NAME)/(YOUR EMAIL)/(SHIPPING ADDRESS)/(PHYSICAL COPY or PDF)".</strong></li>
                                        <li>Send the payment. You won't get a confirmation email, but we will email you shortly regarding your purchase. If you opted for the PDF version, the email will contain the copy.</li>
                                    </ol>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Rave Card */}
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <a href="https://www.gmanageweb.com/HR/Store/#" target="_blank" rel="noopener noreferrer">
                                <Card.Img className="cardImage" variant="top" src="/BuyPhotos/Rave.png" />
                            </a>
                            <Card.Body>
                                <Card.Title className="mx-auto text-center mb-4"><strong>Rave Store Instructions (Employees Only)</strong></Card.Title>
                                <Card.Text as="div">
                                    <p>You can also buy the book through the RaveMoreStore if you are an employee of SSG!</p>
                                    <ol className="paypal-steps">
                                        <li>Click the logo on the right.</li>
                                        <li>In the filter, type "cookbook".</li>
                                        <li>Buy accordingly, you can buy either the physical copy or a PDF.</li>
                                    </ol>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Buy;
