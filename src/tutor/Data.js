import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errormsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => this.setState({ errormsg: err }));
  }
  render() {
    const { posts, errormsg } = this.state;
    return (
      <div>
        {posts.map((item) => (
          <h1>{item.title}</h1>
        ))}
      </div>
    );
  }
}

export default Data;
