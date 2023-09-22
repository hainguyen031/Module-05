import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  selectBookDetail,
  editBook,
  getBook,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../asset/css/index.css";

export default function BookEditing() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const isCreate = !bookId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookDetail = useSelector(selectBookDetail);
  const success = useSelector(selectSuccess);

  const getBookDetail = async () => {
    if (bookDetail == null) {
      dispatch(getBook(bookId));
    } else {
      const { id, title, quantity } = bookDetail;
      const currentBookDetail = { id, title, quantity };
      setBook(currentBookDetail);
    }
  };

  useEffect(() => {
    getBookDetail();

    // eslint-disable-next-line
  }, [success]);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(editBook(book));
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
      <h1>Book Edit</h1>
      <form>
        <div className="input-group mb-3">
          <label className="input-group-text">Id</label>
          <input
            readOnly
            name="id"
            className="form-control"
            value={book.id || ""}
            onChange={handleChange}
          />
        </div>
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
        <div>
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
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
