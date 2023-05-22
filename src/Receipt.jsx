import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import PropTypes from 'prop-types'
function Receipt({ basket }) {
  const total = basket.reduce((accumulator, obj) => {
    return accumulator + parseFloat(obj.price)
  }, 0)
  const totalTaxes = basket.reduce((accumulator, obj) => {
    return accumulator + parseFloat(obj.taxes)
  }, 0)
  return (
    <div className="d-flex justify-content-end mt-2">
      <Col
        xs={12}
        sm={10}
        md={8}
        lg={6}
        className="rounded-1 cart_summary shadow bg-white py-4 py-md-5 px-3 px-md-4"
      >
        <Row>
          <Col xs={5}>
            <h2 className="fw-bold">Receipt</h2>
          </Col>
          <Col xs={4}>
            <div className="fw-bold fs-5">Total amount</div>
          </Col>
          <Col>
            <div id="total">{'$' + total.toFixed(2)}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={5}></Col>
          <Col xs={4}>
            <div className="fs-6">Including taxes</div>
          </Col>
          <Col>
            <div id="taxes">{'$' + totalTaxes.toFixed(2)}</div>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
Receipt.propTypes = {
  basket: PropTypes.array.isRequired,
}

export {Receipt}