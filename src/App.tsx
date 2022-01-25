import React, { useState } from 'react';
import LoginPage from './components/login-page';
import EmployeeHomePage from './components/employee-home-page';
import MemberHomePage from './components/member-home-page';


export default function App() {

  const [user, setUser] = useState({
    username:sessionStorage.getItem('username'), 
    isEmployee:Boolean(sessionStorage.getItem("isEmployee"))
  })


  return (<>{
    !user.username ? <LoginPage updateUser={setUser}/>: 
    user.isEmployee ? <EmployeeHomePage/>:<MemberHomePage/>
  }

  </>);
}

