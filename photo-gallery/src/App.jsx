import React, { useState, useEffect } from "react";
import "./App.css";

const images = [
  {
    name: "Naruto",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OZElhVpFbGGe45nlqktqbs4U5wKUIDQurg&usqp=CAU",
  },
  {
    name: "Kakashi",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qsqKr806KMMHJH0D5drMWtQPNDhGSwM4PQ&usqp=CAU",
  },
  {
    name: "Kenshin",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNKekdj7m50kG3ExfZGEj2P6wEAWETIJq3Q&usqp=CAU",
  },
  {
    name: "Eren",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_AeA6pVd6_-ZrQuzpdCv1d8zShv-mfT3YA&usqp=CAU",
  },
  {
    name: "Guts",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fyvEckM0NNand3o1rV64HdbVfNYHcc3r_xtAguYEvMROi_teyuhXW80B3K6B14uAu0k&usqp=CAU",
  },
  {
    name: "Leonidas",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1o5utsdfAXRjqo8hNRqiebGBnz0Ind641Q&usqp=CAU",
  },
  {
    name: "Natsu",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnedLNqjVzeQS2LRz0PYkj7OvoENjC7qOnZw&usqp=CAU",
  },
  {
    name: "Edward",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurgEFRuvIXGatucaTZ03hEyzmHNoEMJ5gxw&usqp=CAU",
  },
  {
    name: "Luffy",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOI68479K7w1AMCKA948D3lj8WVX9ADKIHQ&usqp=CAU",
  },
  {
    name: "Ace",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCcHFWz-bE10WLXI4uKOslLf0nJwkDer0nA&usqp=CAU",
  },
  {
    name: "Zoro",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIoMUTu4SnPjRI9Z61duvwKjmvKRhEgxCkw&usqp=CAU",
  },
  {
    name: "Shanks",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V9WM1tTOPWqJLOChqHHlJNkOBwdhlaYWBQ&usqp=CAU",
  },
  {
    name: "Ichigo",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQrOQoh5lU8rqZbK6qvFERN74RjLRn9aqPw&usqp=CAU",
  },
  {
    name: "Songoku",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqcm7Ypgb3RQeGr0RM3j6ZIATBDauaCRg7g&usqp=CAU",
  },
  {
    name: "Vegeta",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mb6DKqgmJQC03d0xWyeD97Wr743V_Hw4EQ&usqp=CAU",
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div className="App-div"></div>;
};

export default App;
