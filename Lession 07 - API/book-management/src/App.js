import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookAdd from "./components/BookAdd";
import BookEdit from "./components/BookEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path={`/book/:bookId`} element={<BookDetails />} />
        <Route path={`/book/add`} element={<BookAdd />} />
        <Route path={`/book/edit/:bookId`} element={<BookEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
