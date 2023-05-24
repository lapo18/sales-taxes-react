import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import logo from './assets/logo_instilla.png'
function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Link
          href="#"
          className="text-primary text-uppercase text-end text-wrap fw-bold"
        >
          Sales Taxes Problem
        </Nav.Link>
      </Container>
    </Navbar>
    //  <header className="navbar bg-white rounded-1 shadow sticky-top">
    //     <nav className="container flex-nowrap">
    //     <a className="navbar-brand" href="https://instilla.it">
    //       <img className="logo" src={logo} alt="">
    //       </img>
    //     </a>
    //         <a className="nav-link text-primary text-uppercase text-end text-wrap fw-bold" href="">Sales Taxes Problem</a>
    //     </nav>
    // </header>
  )
}

export {Header}