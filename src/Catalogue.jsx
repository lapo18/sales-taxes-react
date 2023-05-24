import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { Item } from './Item'
function Catalogue({data,onAddBasket}) {
  return (
    <>
      <h2 className="display-5 fw-bold">Products catalogue</h2>
      <Row xs={2} md={3} lg={4} className="gy-5 gx-3 gx-md-5">
        
          {data.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              price={item.price}
              category={item.category}
              image={item.image}
              onAddBasket={(imported) =>onAddBasket(item.name, imported)}
            />
          ))}

      </Row>
    </>
  )
}
Catalogue.propTypes = {
  data: PropTypes.array.isRequired, // Add the missing prop type validation
  onAddBasket: PropTypes.func.isRequired, // Add the missing prop type validation
}
export { Catalogue }
