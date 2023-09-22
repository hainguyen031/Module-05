import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  selectBookList,
  getBooks,
  setSuccess,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../asset/css/index.css"

export default function BookList() {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookList = useSelector(selectBookList);
  const success = useSelector(selectSuccess);

  const getBookList = async () => {
    if (!success) {
      dispatch(getBooks());
    } else {
      setBooks(bookList);
      dispatch(setSuccess(true));
    }
  };

  useEffect(() => {
    getBookList();

    // eslint-disable-next-line
  }, [success]);

  function handleCreate(e) {
    e.preventDefault();
    navigate("/book/add");
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Books</h1>
      <table border={1} className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Quantity</th>
            <th colSpan={2}>
              <button
                type="button"
                onClick={handleCreate}
                className="btn btn-success"
              >
                Create
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id} </td>
              <td>{book.title} </td>
              <td>{book.quantity} </td>
              <td>
                <Link to={`/book/${book.id}`}>Detail</Link>
              </td>
              <td>
                <Link to={`/book/edit/${book.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
