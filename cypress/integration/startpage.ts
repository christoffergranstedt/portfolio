describe("Startpage", () => {
  it("My name is visible on front page", () => {
    cy.visit("/")
    cy.contains("Christoffer Granstedt")
  })
})