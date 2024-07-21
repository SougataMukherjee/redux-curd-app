import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../bookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const book={id:uuidv4(),title,author}
    dispatch(addBook(book))
    navigate('/blog',{replace:true})
  };
  return (
    <div>
      <h2>Add book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author :</label>
          <input
            type="text"
            id="author"
            name="author"
            className="border"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
