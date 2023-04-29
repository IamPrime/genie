import React from 'react'
import Categories from './Categories'

describe('<Categories />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Categories />)
  })
})