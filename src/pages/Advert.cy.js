import React from 'react'
import Advert from './Advert'

describe('<Advert />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Advert />)
  })
})