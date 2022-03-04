const {
  Before,
  Given,
  When,
  Then
} = require("cypress-cucumber-preprocessor/steps");

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})
// When("My Step Definition", () => {
//     // ...test code here
// })
// Then("My Step Definition", () => {
//     // ...test code here
// })