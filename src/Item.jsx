import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Item({name,price,category,image}) {
  // const addToBasket = () => console.log(1)
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
          <Form.Check type="checkbox" label="Apply import duty" />
          <Button
            variant="primary"
            className="text-white mt-3 rounded-1 border-0 fs-6 w-100"
          >
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
      {/* <div className="card">
        <div className="card-header bg-white rounded-1 shadow-sm position-relative">
          <img
            className="card-img-top"
            src={itemsData[i].image}
            alt=""
          />
          <span className="badge text-bg-dark position-absolute">
            {itemsData[i].category}
          </span>
        </div>
        <div className="bg-secondary card-body p-0 mt-3">
          <h5 className="m-0">{itemsData[i].name}</h5>
          <div className="mb-2 price">${itemsData[i].price}</div>
          <div className="form-check">
            <input
              id="cb${
        i + 1
      }"
              className="form-check-input"
              type="checkbox"
              value=""
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
            >
              Apply import duty
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary text-white mt-3 rounded-1 border-0 fs-6 w-100"
            onClick={() => addToBasket()}
          >
            ADD TO CART
          </button>
        </div>
      </div> */}
    </>
  )
}
Item.propTypes = {
  name: PropTypes.string.isRequired, // Add the missing prop type validation
  price: PropTypes.string.isRequired, // Add the missing prop type validation
  category: PropTypes.string.isRequired, // Add the missing prop type validation
  image: PropTypes.string.isRequired, // Add the missing prop type validation
}

export { Item }
