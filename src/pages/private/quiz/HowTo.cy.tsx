import React from 'react'
import HowTo from './HowTo'

describe('<HowTo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HowTo />)
  })
})