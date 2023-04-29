import React from 'react'
import QuizzeD from './QuizzeD'

describe('<QuizzeD />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QuizzeD />)
  })
})