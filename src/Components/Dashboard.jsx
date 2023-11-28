import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../Reducer/Slice";
import Card from "./Card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);

  const getData = async () => {
    try {
      const booksdata = await axios.get(
        "https://656450eaceac41c0761de102.mockapi.io/author"
      );
      console.log(dispatch(setBook(booksdata.data)))   
    } catch (error) {}
  };
  useEffect(()=>{
    getData()
  },[])

  return (
    
    <div>
      <header class="full-width">
  <div class="container">
    <h1 class="page-title">Book Viewer</h1>
  </div>
</header>
      <Card data={data}/>
    </div>
  );
};

export default Dashboard;
