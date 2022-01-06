import React from 'react';
import BookManagementPage from './components/book-management-page';
import BookViewerPage from './components/book-viewer-page';


export default function App() {
  return (<>
    <BookViewerPage/>
    <BookManagementPage/>
  </>);
}

