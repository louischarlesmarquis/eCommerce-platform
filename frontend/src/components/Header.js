import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import '../index.css' //changes in index.css do not update in header.js

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
    <Navbar variant="dark" expand='lg' collapseOnSelect style={{ backgroundColor: '#0a4275' }}>
        <Container >
          <LinkContainer to='/'>
            <Navbar.Brand><img
              src="logo.jpg"
              width="90"
              height="45"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <NavDropdown title="PRODUITS" id="nav-styling">
              <LinkContainer to='/'>
                <NavDropdown.Item id="category-dropdown">Categorie1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavDropdown.Item id="category-dropdown">Categorie2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavDropdown.Item id="category-dropdown">Categorie3</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavDropdown.Item id="category-dropdown">Categorie4</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/'>
                <NavDropdown.Item id="category-dropdown">Categorie5</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Panier
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Se déconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Se connecter
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Utilisateurs</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Produits</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Commandes</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header


