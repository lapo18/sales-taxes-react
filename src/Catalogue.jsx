import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
function Catalogue(props) {
  return (
    <>
      <h2 className="display-5 fw-bold">Products catalogue</h2>
      <Col>
      {props.children}
        
      </Col>
    </>
  )
}
Catalogue.propTypes = {
  children: PropTypes.object.isRequired, // Add the missing prop type validation
}
export { Catalogue }
