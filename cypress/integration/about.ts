describe("About me page", () => {
  it("Possible to navigate to about page from start page", () => {
    cy.visit("/")
    cy.findByRole('link', { name: /about/i }).click()
    cy.contains("about me")
  })

  it("Educations is visible and fetched from CMS", () => {
    cy.visit("/about")
    cy.contains("Linnaeus University")
  })

  it("Programming language is visible and fetched from CMS", () => {
    cy.visit("/about")
    cy.contains("Python")
  })
})