import React from 'react'
import Play from './Play'

describe('<Play />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Play />)
  })
})