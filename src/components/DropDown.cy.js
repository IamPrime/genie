import React from 'react'
import DropDown from './DropDown'

describe('<DropDown />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DropDown />)
  })
})