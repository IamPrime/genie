import React from 'react'
import QuizCategory from './QuizCategory'

describe('<QuizCategory />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QuizCategory />)
  })
})