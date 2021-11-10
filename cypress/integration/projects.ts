describe("Projects page", () => {
  it("Possible to navigate to projects page from start page", () => {
    cy.visit("/")
    cy.findByRole('link', { name: 'projects' }).click()
    cy.contains("projects")
  })

  it("Portfolio project is visible and fetched from CMS", () => {
    cy.visit("/projects")
    cy.contains(/portfolio/i)
  })
})