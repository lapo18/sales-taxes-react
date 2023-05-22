import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
function ReceiptButton() {
  return (
    <div className="d-flex justify-content-end mb-4">
    <Col xs={6} md={4} lg={3}>
      <Button
        style={{ maxWidth: '255px' }}
        className="w-100 text-white text-uppercase"
      >
        Generate Receipt
      </Button>
    </Col>
      
    </div>
  )
}

export {ReceiptButton}