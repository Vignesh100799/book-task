import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, setBook } from "../Reducer/Slice";
import Card from "./Card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);

  const handleDelete = async (userid)=>{
    try {
        await axios.delete(`https://656450eaceac41c0761de102.mockapi.io/author/${userid}`)
        dispatch(deleteBook(userid))
    } catch (error) {
      
    }
  }

  const getData = async () => {
    try {
      const booksdata = await axios.get(
        "https://656450eaceac41c0761de102.mockapi.io/author"
      );
      dispatch(setBook(booksdata.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <header className="full-width">
        <div className="container">
          <h1 className="page-title">Book Viewer</h1>
        </div>
      </header>
     <Card  data={data} handleDelete={handleDelete} />
      
      
    </div>
  );
};

export default Dashboard;
