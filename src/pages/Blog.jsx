import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../bookSlice";
const Blog = () => {
  const [data, setData] = useState([]);
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch=useDispatch()
  console.log('blog data',books);
  console.log('blog item',data);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json();
      })
      .then(
        (data) => {
          setData(data);
        },
        (err) => {
          return console.error(err);
        }
      );
  }, []);
  const handleDelete=(id)=>{
    dispatch(deleteBook(id))
  }
  return (
    <div>
      <h3>Blog</h3>
      <section>
        {data.data && Object.entries(data.data).map((value) => {
          const [, { email, avatar,id }] = value;
          return (
            <article key={id}>
              <h5>{email}</h5>
              <img src={avatar} alt={`Avatar for ${email}`}/>
              <Link to={email}>Learn More</Link>
            </article>
          );
        })}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                  <Link to='/edit-book' state={{id,title,author}}>
                  <button>Edit</button>
                  </Link>
                    
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Blog;
