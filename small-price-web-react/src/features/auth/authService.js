import { fakeUser } from "../../data/users.js"

export function loginWithEmailAndPassword(email, password) {
  if (email === fakeUser.email && password === fakeUser.password) {
    return {
      name: fakeUser.name,
      email: fakeUser.email,
    }
  }

  return null
}

export function getTestCredentials() {
  return {
    email: fakeUser.email,
    password: fakeUser.password,
  }
}
