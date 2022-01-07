import React from 'react';
import BookManagementPage from './components/book-management-page';
import BookViewerPage from './components/book-viewer-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetailsPage from './components/book-details-page';


export default function App() {
  return (<>
  <BrowserRouter>

    <Routes>

      <Route path="bookview" >
        <Route path=":bookId" element ={<BookDetailsPage/>}/>
        <Route path="" element={<BookViewerPage/>}></Route>
      </Route>

      <Route path="management" element={<BookManagementPage/>}/>
      <Route path="" element={<BookViewerPage/>}/>
    </Routes>
  </BrowserRouter>
  </>);
}

