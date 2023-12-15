import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="NoaKhali" special="vivag"></District>
      <District name="Barishal" special="people"></District>
      <District name="Cumilla" special="Moynamoti"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {posts.map((post) => (
        <Post title={post.title} body={post.body}></Post>
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div
      style={{
        backgroundColor: "lightsalmon",
        margin: "20px",
        padding: "20px",
        border: "2px solid salmon",
        borderRadius: "2px",
      }}
    >
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "lightblue",
  margin: "20px",
  borderRadius: "20px",
  padding: "20px",
};

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power:{power} </h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;
