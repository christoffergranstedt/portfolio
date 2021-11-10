describe("Contact me page", () => {
  it("Possible to navigate to contact page from start page", () => {
    cy.visit("/")
    cy.findAllByRole('link', { name: 'contact' }).click()
    cy.contains("contact me")
  })
})