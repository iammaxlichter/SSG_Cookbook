import React from 'react';
import '../../assets/styles/Recipes.css';
import { Container, Row, Col } from 'react-bootstrap';

// Static imports for all images
import appleImage from '../../assets/images/RecipesPhotos/apple.jpg';
import bananaImage from '../../assets/images/RecipesPhotos/banana.jfif';
import bawlImage from '../../assets/images/RecipesPhotos/bawl.jfif';
import dalImage from '../../assets/images/RecipesPhotos/dal.jpg';
import jalapenoImage from '../../assets/images/RecipesPhotos/jalapeno.jfif';
import momoImage from '../../assets/images/RecipesPhotos/Momo.jpg';
import ribsImage from '../../assets/images/RecipesPhotos/ribs.jfif';
import tacoImage from '../../assets/images/RecipesPhotos/taco.jpg';
import wontonsImage from '../../assets/images/RecipesPhotos/Wontons.jpg';

const recipes = [
    { img: appleImage, title: 'Apple Pecan Salad', description: 'by Brae Shaw, an easy and healthy addition to any occasion.' },
    { img: bananaImage, title: 'The BEST Banana Bread', description: "by Katherine Callahan, a family speciality that can't go wrong!" },
    { img: bawlImage, title: 'Oatmeal Peanut Butter Protein Balls', description: 'by Kendra Foss, a quick and easy sweet treat for breakfast!' },
    { img: dalImage, title: 'Dal Khichdi', description: 'by Vaibhavi Trivedi, a satisfying meal not just for your gut, but for your mind too.' },
    { img: jalapenoImage, title: 'Jalapeno Poppers (shortcut version)', description: 'by Lori Channel, healthy, hearty, and full of taste.' },
    { img: momoImage, title: 'Momo', description: 'by Damber Bokati, a delicious steamed dumplings filled with seasoned chicken.' },
    { img: ribsImage, title: '3-2-1 Ribs', description: 'by Heidi Clark, a fool proof method of making perfect and delicious ribs!' },
    { img: tacoImage, title: 'Vegan Crispy BBQ Broccoli Tacos', description: 'by Faith Hoover, a elegant twist on a staple food.' },
    { img: wontonsImage, title: 'Green Chile Wontons', description: 'by Todd Richardson, an Asian-Mexican fusion delight.' }
];

function Recipes() {
    return (
        <div id="recipes" className="recipes">
            <Container>
                <Container fluid className='align-items-center justify-content-center' style={{ paddingTop: '100px' }}>
                    <Row className="mb-2">
                        <Col md={12} className="text-center mainTitle">
                            <p className="mainTitle" style={{}}>Recipes Preview</p>
                        </Col>
                    </Row>
                    <Row>
                        {recipes.map((recipe, index) => (
                            <Col key={index} xs={6} sm={6} md={4} className="">
                                <div className="recipe-image-container">
                                    <img src={recipe.img} alt={recipe.title} className="img-fluid" />
                                    <div className="recipe-text">
                                        <strong><br></br>{recipe.title}</strong>
                                        <p className="mx-auto text-center"><br></br>{recipe.description}<br></br></p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col className="text-center" style={{ paddingBottom: '100px', width: '40%', margin: 'auto', fontSize: '16px' }}>
                            All of these recipes were donated by SSG employees, friends, and family. <br></br>
                            Just hover over image to see what the recipe is all about! (click the image if you are are on mobile)
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Recipes;
