import axios from 'axios'
import React, { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const UserRegister = (email, password) => {
    return axios
      .post('https://bootcamp.akbolat.net/auth/local/register', {
        username: email,
        email: email,
        password: password
      })
      .then((response) => {
        setCookies('userToken', response.data.jwt, 5)
        return response.status
      })
      .catch((error) => {
        return error.response.status
      })
  }

  const UserLogin = (email, password) => {
    return axios
      .post('https://bootcamp.akbolat.net/auth/local', {
        identifier: email,
        password: password
      })
      .then((response) => {
        setCookies('userToken', response.data.jwt, 5)
        return response.status
      })
      .catch((error) => {
        return error.response.status
      })
  }
  const getCookies = (cookie) => {
    let name = cookie + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return true
      }
    }
    return false
  }

  const setCookies = (cookieName, cookieValue, cookieDays) => {
    const d = new Date()
    d.setTime(d.getTime() + cookieDays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/'
  }
  const checkUser = () => {
    return getCookies('userToken')
  }
  return (
    <AuthContext.Provider
      value={{
        UserRegister,
        UserLogin,
        checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, AuthContext, useAuth }
