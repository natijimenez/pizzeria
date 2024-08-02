/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ image, name, ingredients, price }) => {
  return (
    <>
      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={image} />
        <ListGroup className="list-group-flush pizzaCard">
          <ListGroup.Item className='card-name'>Pizza {name}</ListGroup.Item>
          <ListGroup.Item className="card-title-ingredients">Ingredientes:<br></br> <span className="card-ingredients">🍕 {ingredients}</span></ListGroup.Item>
          <ListGroup.Item className="card-price">Precio: <span className="card-price">${price}</span></ListGroup.Item>
        </ListGroup>
        <Card.Body className='card-btns-container'>
          <Card.Link href="#" className="card-link card-btn-more">Ver más 👀</Card.Link>
          <Card.Link href="#" className="card-link card-btn-add">Añadir 🛒</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardPizza