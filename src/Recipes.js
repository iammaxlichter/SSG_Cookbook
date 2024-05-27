import React from 'react';
import './Recipes.css';
import { Container, Row, Col } from 'react-bootstrap';
const recipes = [
    { img: 'apple.jpg', title: 'Apple Pecan Salad', description: 'by Brae Shaw, an easy and healthy addition to any occasion.' },
    { img: 'banana.jfif', title: 'The BEST Banana Bread', description: "by Katherine Callahan, a family speciality that can't go wrong!" },
    { img: 'bawl.jfif', title: 'Oatmeal Peanut Butter Protein Balls', description: 'by Kendra Foss, a quick and easy sweet treat for breakfast!' },
    { img: 'dal.jpg', title: 'Dal Khichdi', description: 'by Vaibhavi Trivedi, a satisfying meal not just for your gut, but for your mind too.' },
    { img: 'jalapeno.jfif', title: 'Jalapeno Poppers (shortcut version)', description: 'by Lori Channel, healthy, hearty, and full of taste.' },
    { img: 'Momo.jpg', title: 'Momo', description: 'by Damber Bokati, a delicious steamed dumplings filled with seasoned chicken.' },
    { img: 'ribs.jfif', title: '3-2-1 Ribs', description: 'by Heidi Clark, a fool proof method of making perfect and delicious ribs!' },
    { img: 'taco.jpg', title: 'Vegan Crispy BBQ Broccoli Tacos', description: 'by Faith Hoover, a elegant twist on a staple food.' },
    { img: 'Wontons.jpg', title: 'Green Chile Wontons', description: 'by Todd Richardson, an Asian-Mexican fusion delight.' }
];

function Recipes() {
    return (
        <div className="recipes">
            <Container fluid className='align-items-center justify-content-center' style={{ paddingTop: '100px', width: '80%'}}>
                <Row className="mb-5">
                    <Col md={12} className="text-center mainTitle">
                        <p className="mainTitle" style={{  }}>Recipes Preview</p>
                    </Col>
                </Row>
                <Row>
                    {recipes.map((recipe, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <div className="recipe-image-container">
                                <img src={`/RecipesPhotos/${recipe.img}`} alt={recipe.title} className="img-fluid" />
                                <div className="recipe-text">
                                    <strong><br></br>{recipe.title}</strong>
                                    <p className="mx-auto text-center"><br></br>{recipe.description}<br></br></p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
}

export default Recipes;
