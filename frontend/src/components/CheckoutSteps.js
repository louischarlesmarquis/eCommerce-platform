import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link id="override-w-text">Se connecter</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Se connecter</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link id="override-w-text">Livraison</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Livraison</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link id="override-w-text">Paiement</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Paiement</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link id="override-w-text">Placer la commande</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Placer la commande</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps

