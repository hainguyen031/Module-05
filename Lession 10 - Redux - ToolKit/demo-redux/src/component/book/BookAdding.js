import React, { useState } from "react";
import { selectBookAdded, addBook } from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../asset/css/index.css";

export default function BookAdding() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const isCreate = !bookId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookAdded = useSelector(selectBookAdded);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(addBook(book));
    setBook(bookAdded);
    alert(
      `${isCreate ? "Create" : "Edit"} book ${JSON.stringify(
        book
      )} successfully!!!`
    );
    navigate("/");
    // window.location.reload();
  }

  function getBackBookList() {
    navigate("/");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Book Add</h1>
      <form>
        <div className="input-group mb-3">
          <label className="input-group-text">Title</label>
          <input
            name="title"
            className="form-control"
            value={book.title || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Quantity</label>
          <input
            name="quantity"
            className="form-control"
            value={book.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <div className="btnCSS">
          <button
            type="button"
            onClick={getBackBookList}
            className="btn bg-danger"
          >
            Back
          </button>
          &nbsp;
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
