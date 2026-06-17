import { authCopy } from "../../../src/constants/copy.js"
import { fakeUser } from "../../../src/data/users.js"
import { getInitials } from "../../../src/features/auth/authUtils.js"

describe("Login flow", () => {
  function openLoginModal() {
    cy.contains("button", authCopy.loginButton).click()
    cy.contains(authCopy.loginTitle).should("be.visible")
  }

  function submitLoginForm(email, password) {
    cy.get('form[aria-label="Login form"]').within(() => {
      cy.get("#email").clear().type(email)
      cy.get("#password").clear().type(password)
      cy.contains("button", authCopy.loginButton).click()
    })
  }

  beforeEach(() => {
    cy.visit("/")
  })

  it("shows an error when login fails", () => {
    openLoginModal()
    submitLoginForm(fakeUser.email, "wrong-password")

    cy.contains(authCopy.loginError).should("be.visible")
    cy.contains(fakeUser.name).should("not.exist")
  })

  it("logs in and logs out", () => {
    openLoginModal()
    submitLoginForm(fakeUser.email, fakeUser.password)

    cy.contains("button", fakeUser.name).should("be.visible")
    cy.contains(getInitials(fakeUser.name)).should("be.visible")

    cy.contains("button", fakeUser.name).click()
    cy.contains(authCopy.profileTitle).should("be.visible")
    cy.contains(fakeUser.email).should("be.visible")

    cy.contains("button", authCopy.logoutButton).click()

    cy.contains("button", authCopy.loginButton).should("be.visible")
    cy.contains(authCopy.profileTitle).should("not.exist")
  })
})
