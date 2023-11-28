import React, { useEffect } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { editBook, setBook } from "../Reducer/Slice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";

const Edit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      authorname: "",
      authordob: "",
      authorbio: "",
      books: 
        {
          title: "",
          isbn: "",
          publishedon: "",
          bookimage: "",
          authorname: "",
        },
      
    },
    validate: (values) => {
      let errors = {};
      return errors;
    },
    onSubmit: async (values) => {
      values.books.authorname = values.authorname;
      try {
        const response = await axios.put(
          `https://656450eaceac41c0761de102.mockapi.io/author/${params.id}`,
          values,
          navigate('/')
        );
          dispatch(setBook(response.data));
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  useEffect(() => {
    const getbooks = async () => {
      try {
        if(!params.id){
          console.error("error")
          return
        }
        const bookslist = await axios.get(
          `https://656450eaceac41c0761de102.mockapi.io/author/${params.id}`
        );
        // console.log(bookslist.data)
        // dispatch(editBook(bookslist.data));
        dispatch(editBook({ id: bookslist.data.id, ...bookslist.data }));
        formik.setValues(bookslist.data);
      } catch (error) {
        console.log(error);
      }
    };
    getbooks();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-5">
          <h1 className=" text-center m-5">Edit Book</h1>
          <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="col-6">
          <TextField
            id="outlined-basic"
            className=" input-group m-2"
            variant="outlined"
            label="Title"
            name = "books.title"
            type="text"
            value={formik.values.books?.title || ""}
            onChange={formik.handleChange}
          />
          <TextField
          id="outlined-basic"
          className=" input-group m-2"
          variant="outlined"
          label="Book Image Link"
          name="books.bookimage"
          type="text"
          value={formik.values.books?.bookimage || ""}
          onChange={formik.handleChange}
          />
    
          <TextField
            id="outlined-basic"
            className="input-group m-2"
            variant="outlined"
            label="Author"
            type="text"
            name="authorname"
            value={formik.values.authorname}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-6">
          <TextField
            id="outlined-basic"
            className=" input-group m-2"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            label="DOB"
            type="date"
            name="authordob"
            value={formik.values.authordob}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            className=" input-group m-2"
            label="Bio"
            type="text"
            name="authorbio"
            value={formik.values.authorbio}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-6">
          <TextField
            id="outlined-basic"
            className=" input-group m-2"
            variant="outlined"
            label="ISBN"
            type="text"
            name="books.isbn"
            value={formik.values.books?.isbn|| ""}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Publised on"
            className=" input-group m-2"
            InputLabelProps={{ shrink: true }}
            type="text"
            name="books.publishedon"
            value={formik.values.books?.publishedon|| ""}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-6 p-2">
          <button className="btn btn-primary" value={"Submit"} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
