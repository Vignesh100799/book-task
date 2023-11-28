import React from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setBook } from "../Reducer/Slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createbooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const data = useSelector((state) => state.app);

  const formik = useFormik({
    initialValues: {
      authorname: "",
      authordob: "",
      authorbio: "",
      books: 
        {
          authorname: "",
          title: "",
          isbn: "",
          publishedon: "",
          bookimage: "",
        },
      
    },
    validate: (values) => {
      let errors = {};
      return errors;
    },
    onSubmit: async (values) => {
      values.books.authorname = values.authorname;
      try {
        const response = await axios.post(
          "https://656450eaceac41c0761de102.mockapi.io/author",
          values,
          navigate('/')
        );
        // Check if the response status is 2xx (successful)
        if (response.status >= 200 && response.status < 300) {
          dispatch(setBook(response.data));
        } else {
          console.error("Unsuccessful response status:", response.status);
          console.error("Response data:", response.data);
          // Handle the error appropriately, e.g., show an error message to the user
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-5">
          <h1 className=" text-center m-5">Add Book</h1>
          <Input formik={formik} />
        </div>
      </div>
    </div>
  );
};

export default Createbooks;
