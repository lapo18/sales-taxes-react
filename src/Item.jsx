import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useState } from 'react'
function Item({name,price,category,image,onAddBasket}) {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckBox = (event) => {
    setIsChecked(event.target.checked)
  }
  return (
    <>
      <Card>
        <Card.Header className="bg-white rounded-1 shadow-sm position-relative">
          <Card.Img variant="top" src={image} />
          <Badge className="bg-dark position-absolute">
            {category.toUpperCase().replace("-"," ") }
          </Badge>
        </Card.Header>
        <Card.Body className="bg-secondary p-0 mt-3">
          <h5 className="m-0">{name}</h5>
          <div className="mb-2 price">${price}</div>
          <Form.Check
            type="checkbox"
            label="Apply import duty"
            onClick={handleCheckBox}
          />
          <Button
            variant="primary"
            className="text-white mt-3 rounded-1 border-0 fs-6 w-100"
            checked={isChecked}
            onClick={()=>onAddBasket(isChecked)}
          >
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}
Item.propTypes = {
  name: PropTypes.string.isRequired, 
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onAddBasket: PropTypes.func.isRequired,
}

export { Item }
