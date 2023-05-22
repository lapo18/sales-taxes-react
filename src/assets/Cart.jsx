import { Col } from "react-bootstrap"
import { Table } from "react-bootstrap"
import { FaTrashAlt } from 'react-icons/fa'
function Cart() {
  const removeCartItem =()=>{}
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
              <tr>
                <td className="fw-bold">$name</td>
                <td>$isImported</td>
                <td>
                  $$12.44
                  {/* {(parseFloat(price) + parseFloat(taxes)).toFixed(2)} */}
                </td>
                <td>$12.33{/*taxes.toFixed(2)*/}</td>
                <td
                  onClick={removeCartItem}
                  // onClick="removeCartItem(${i})"
                  className="delete-button text-danger"
                >
                  <FaTrashAlt />
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Bottle of perfume</td>
                <td>Yes</td>
                <td>$50.04</td>
                <td>$12.50</td>
                <td
                  onClick={removeCartItem}
                  className="delete-button text-danger"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Bottle of perfume</td>
                <td>Yes</td>
                <td>$50.04</td>
                <td>$12.50</td>
                <td
                  onClick={removeCartItem}
                  className="delete-button text-danger"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </td>
              </tr>
              <tr>
                <td className="fw-bold">Bottle of perfume</td>
                <td>Yes</td>
                <td>$50.04</td>
                <td>$12.50</td>
                <td
                  onClick={removeCartItem}
                  className="text-danger delete-button"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </div>
    </>
  )
}

export {Cart}