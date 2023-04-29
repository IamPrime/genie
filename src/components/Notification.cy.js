import React from 'react'
import Notification from './Notification'

describe('<Notification />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Notification />)
  })
})