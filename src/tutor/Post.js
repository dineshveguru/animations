import React from "react";
import axios from "axios";

const Post = () => {
  const [data, setData] = React.useState({
    userId: "",
    title: "",
    body: "",
  });
  const changeHandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const { userId, title, body } = data;
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={changeHandler}
        />
        <input type="text" name="body" value={body} onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
