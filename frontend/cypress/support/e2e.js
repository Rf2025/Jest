// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


// script for testing homepage
describe('Homepage', () => {
    it('should load and display homepage', () => {
      cy.visit('/'); 
      cy.contains('Welcome to lrnr homepage'); 
    });
  
    it('should have a working link to the quiz generator', () => {
      cy.get(' <NavLink to="/" className="brand-logo">lrnr</NavLink>').click(); 
      cy.url().should('include', '/');
    });
  });



  //test for quiz generator 
  describe('Quiz Generator', () => {
    beforeEach(() => {
      cy.visit('/quiz-generator'); 
    });
  
    it(' display quiz generator inputs', () => {
      cy.contains('Quiz Generator'); 
    });
  
    it('should generate a quiz when inputs are provided', () => {
      cy.get('value={topic}').type('what is the topic');
      cy.get('value={expertise}').type('what is the expertise');
      cy.get('value={questionCount}').type('The number of questions');
      cy.get('value={styleOfQuestions}').type('the style of questions');
  
      cy.contains('quiz created'); 
      cy.contains('quiz responses');
    });
  
    it('should show an error message if inputs are missing', () => {
      cy.get('onClick={handleSubmit}').click();
  
      cy.contains('question inputs'); 
      cy.contains('all inputs are  required');
    });
  });
  
  //test navbar routes


describe('Nav routes', () => {
    beforeEach(() => {
        //go to homepage
      cy.visit('/');
    });
  
    it('should navigate to the About page', () => {
      // click on account route
      cy.get('nav').contains('home').click();
  
      // check url
      cy.url().should('include', '/account');
  
      // check account page
      cy.contains('account').should('be.visible');
    });
  
    it('should navigate to the quiz and quiz generator page', () => {
      //check quiz generator route
      cy.get('nav').contains('quiz-generator').click();
  
      // check quiz url
      cy.url().should('include', '/quiz-generator');
  
      // check content
      cy.contains('quiz generator page').should('be.visible');
    });
  
  });
  

  // test footer

  describe('footer routes', () => {
    beforeEach(() => {
        //go to homepage
      cy.visit('/');
    });
  
    it('should navigate to the About page', () => {
      // click on account route
      cy.get('footer').contains('home').click();
  
      // check url
      cy.url().should('include', '/account');
  
      // check account page
      cy.contains('account').should('be.visible');
    });
  
    it('should go to the quiz page', () => {
      //check quiz generator route
      cy.get('nav').contains('quiz-generator').click();
  
      // check quiz url
      cy.url().should('include', '/quiz-generator');
  
      // check content
      cy.contains('quiz generator page').should('be.visible');
    });
  
  });
  