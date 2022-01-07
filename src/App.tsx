import React, { createContext, useEffect, useState } from 'react';
import BookManagementPage from './components/book-management-page';
import BookViewerPage from './components/book-viewer-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetailsPage from './components/book-details-page';
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

