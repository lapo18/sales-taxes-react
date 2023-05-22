import './App.scss'
import { Header } from './Header'
import { Catalogue } from './Catalogue'
import { Item } from './Item'
import { Row } from 'react-bootstrap'
import { Cart } from './assets/Cart'
import { Container } from 'react-bootstrap'
import { ReceiptButton } from './ReceiptButton'
import { Receipt } from './assets/Receipt'
import { useState } from 'react'
const data = [
  {
    name: 'The Lord of the Rings',
    price: '50.50',
    category: 'books',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/lotr.jpg',
  },
  {
    name: 'Game of Thrones',
    price: '25.00',
    category: 'books',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/got.jpg',
  },
  {
    name: 'Chocolate bar',
    price: '9.99',
    category: 'food',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/cb.jpg',
  },
  {
    name: 'Box of chocolates',
    price: '14.99',
    category: 'food',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/boc.jpg',
  },
  {
    name: 'Headache pills',
    price: '15.00',
    category: 'medical-products',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/mmt.png',
  },
  {
    name: 'Music CD',
    price: '10.00',
    category: 'other',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/cd.png',
  },
  {
    name: 'Bottle of perfume',
    price: '50.50',
    category: 'other',
    image:
      'https://instilla-sales-tax-problem.s3.eu-central-1.amazonaws.com/c5.png',
  }
]
function App() {
  const [basket, setBasket]= useState([])
  const handleBasket=(name)=>{
    const indexItem=data.findIndex((item)=>(item.name===name))
    const newItem=data[indexItem]
    newItem.tax=newItem.price
    setBasket((prev) => [...prev, newItem])
   
  }
  return (
    
    <>
      <Header />
      <Container className="my-5 pt-4">
        <Catalogue>
        <Row
          xs={2}
          md={3}
          lg={4}
          className="gy-5 gx-3 gx-md-5"
        >
          {data.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              price={item.price}
              category={item.category}
              image={item.image}
              onAddBasket={()=>handleBasket(item.name)}
            />
          ))}
        </Row>
        </Catalogue>
        <Cart basket={basket} />
        <ReceiptButton/>
        <Receipt/>
      </Container>
    </>
  )
}

export default App
