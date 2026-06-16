import { fakeUser } from "../../../src/data/users.js"
import { getInitials } from "../../../src/features/auth/authUtils.js"

describe("Login flow", () => {
  function openLoginModal() {
    cy.contains("button", "Log in").click()
    cy.contains("Log in to Small Price").should("be.visible")
  }

  function submitLoginForm(email, password) {
    cy.get('form[aria-label="Login form"]').within(() => {
      cy.get("#email").clear().type(email)
      cy.get("#password").clear().type(password)
      cy.contains("button", "Log in").click()
    })
  }

  beforeEach(() => {
    cy.visit("/")
  })

  it("shows an error when login fails", () => {
    openLoginModal()
    submitLoginForm(fakeUser.email, "wrong-password")

    cy.contains("Email or password is incorrect.").should("be.visible")
    cy.contains(fakeUser.name).should("not.exist")
  })

  it("logs in and logs out", () => {
    openLoginModal()
    submitLoginForm(fakeUser.email, fakeUser.password)

    cy.contains("button", fakeUser.name).should("be.visible")
    cy.contains(getInitials(fakeUser.name)).should("be.visible")

    cy.contains("button", fakeUser.name).click()
    cy.contains("Your account").should("be.visible")
    cy.contains(fakeUser.email).should("be.visible")

    cy.contains("button", "Log out").click()

    cy.contains("button", "Log in").should("be.visible")
    cy.contains("Your account").should("not.exist")
  })
})
