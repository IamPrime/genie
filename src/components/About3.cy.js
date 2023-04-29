import React from 'react'
import About3 from './About3'

describe('<About3 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<About3 />)
  })
})