import React from 'react'
import VideoPlayer from './VideoPlayer'

describe('<VideoPlayer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VideoPlayer />)
  })
})