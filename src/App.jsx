import './App.scss'
import { Header } from './Header'
import { Catalogue } from './Catalogue'
import { Cart } from './Cart'
import { Container } from 'react-bootstrap'
import { ReceiptButton } from './ReceiptButton'
import { Receipt } from './Receipt'
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
  },
]

const localBasket = localStorage.getItem('BASKET_V1')
console.log(localBasket)
let parsedBasket
if (!localBasket)
  parsedBasket = []
else
  parsedBasket = JSON.parse(localBasket)

const calcTaxes = (item, imported) => {
  let tax, importDuty
  item.category === 'other' ? (tax = 10.0) : (tax = 0.0)
  imported ? (importDuty = 5.0) : (importDuty = 0.0)
  const totalFee = (parseFloat(item.price) * (importDuty + tax)) / 100
  const roundedFee = Math.round(totalFee * 20) / 20
  return roundedFee.toFixed(2)
}
function App() {
  const [basket, setBasket] = useState(parsedBasket)
  
  const handleBasket = (name, imported) => {
    const indexItem = data.findIndex((item) => item.name === name)
    const newItem = { ...data[indexItem] }
    const taxes = calcTaxes(newItem, imported)
    newItem.taxes = taxes
    newItem.price = (
      parseFloat(newItem.price) + parseFloat(taxes)
      ).toFixed(2)
      newItem.imported = imported
      setBasket((prev) => {
      localStorage.setItem(
        'BASKET_V1',
        JSON.stringify([...prev, newItem])
      )
      return [...prev, newItem]
    })
  }

  const handleDelete = (name) => {
    const indexItem = basket.findIndex((item) => item.name === name)
    console.log(indexItem)
    const newBasket = [...basket]
    newBasket.splice(indexItem, 1)
    console.log(newBasket)
    setBasket(newBasket)
    localStorage.setItem('BASKET_V1', JSON.stringify(newBasket))
  }
  return (
    <>
      <Header />
      <Container className="my-5 pt-4">
        <Catalogue
          data={data}
          onAddBasket={(name, imported) =>
            handleBasket(name, imported)
          }
        />

        <Cart
          basket={basket}
          onDelete={(name) => handleDelete(name)}
        />
        <ReceiptButton />
        <Receipt basket={basket} />
      </Container>
    </>
  )
}

export default App
