import { useState } from 'react'
import Authentication from './Authentication'
import UnAuthentication from './UnAuthentication'
import './App.css'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  const [signUpData, setsignUpData] = useState(JSON.parse(window.localStorage.getItem("newToken")) || false)  
  const [logOut, setLogOut] = useState(false)


  if(signUpData){
    if(token.login == signUpData.login && token.password == signUpData.password){
      return <Authentication setLogOut={setLogOut}/>
    }else{
      return <UnAuthentication setsignUpData={setsignUpData} setToken={setToken}/>
    }
  }else{
    if(token.login == "Stalin" && token.password == '123'){
      return <Authentication/>
    }else{
      return <UnAuthentication setsignUpData={setsignUpData} setToken={setToken}/>
    }
  } 
  
  
}
export default App
