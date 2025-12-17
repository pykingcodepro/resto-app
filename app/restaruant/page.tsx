"use client";

import React, { FormEvent, useState } from 'react'
import LoginComponent from '../_components/LoginComponent'
import SignUpComponent from '../_components/SignUpComponent'

export default function page() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
        <h1>Auth</h1>
        {
          login
          ? <LoginComponent />
          : <SignUpComponent />
        }
        <br />
        <span> { login ? "Don't have an account?" : "Already have an account?" }  
          <button
            onClick={(e:FormEvent) => {
              e.preventDefault();
              setLogin(!login);
            }}
          >
            { login ? "Sign up" : "Login" }
          </button>
        </span>
    </>
  )
}
