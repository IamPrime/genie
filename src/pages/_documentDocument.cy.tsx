import React from 'react'
import Document from './_document'

describe('<Document />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Document />)
  })
})