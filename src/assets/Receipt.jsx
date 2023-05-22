import { Col } from "react-bootstrap"
import {Row} from "react-bootstrap"
function Receipt() {
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
            <div id="total">$0.00</div>
          </Col>
        </Row>
        <Row>
          <Col xs={5}></Col>
          <Col xs={4}>
            <div className="fs-6">Including taxes</div>
          </Col>
          <Col>
            <div id="taxes">$0.00</div>
          </Col>
        </Row>
      </Col>
    </div>
   )
}

export {Receipt}