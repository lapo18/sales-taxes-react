import { Col } from "react-bootstrap"
import { Table } from "react-bootstrap"
import { FaTrashAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'
function Cart({basket,onDelete}) {
  const removeCartItem =(name)=>{
    onDelete(name)
  }
  return (
    <>
      <h2 className="cart display-5 fw-bold mb-3">
        Selected products
      </h2>
      <div className="bg-white rounded-1 mb-3">
        <Col className="px-md-4 py-1">
          <Table borderless hover className="mb-0 products-list">
            <thead>
              <tr>
                <th className="col-5 col-md-6 col-lg-7">PRODUCT</th>
                <th className="col">IMPORTED</th>
                <th className="col">PRICE</th>
                <th className="col">TAX</th>
                <th className="col empty"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider" id="shopping-cart">
              {basket.length === 0 ? (
                <tr className="col-12 text-end">
                  <td colSpan={12} className="fullwidth text-center">Cart is Empty</td>
                </tr>
              ) : (
                basket.map((item) => (
                  <tr key={item.name}>
                    <td className="fw-bold">{item.name}</td>
                    <td>{item.imported?'Yes':'No' }</td>
                    <td>
                      {'$' + item.price}
                      {/* {(parseFloat(price) + parseFloat(taxes)).toFixed(2)} */}
                    </td>
                    <td>{'$' + item.taxes}</td>
                    <td
                      onClick={()=>removeCartItem(item.name)}
                      // onClick="removeCartItem(${i})"
                      className="delete-button text-danger"
                    >
                      <FaTrashAlt />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </div>
    </>
  )
}
Cart.propTypes = {
  basket: PropTypes.array.isRequired, 
  onDelete: PropTypes.func.isRequired, 
}

export {Cart}