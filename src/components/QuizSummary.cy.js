import React from 'react'
import QuizSummary from './QuizSummary'

describe('<QuizSummary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QuizSummary />)
  })
})