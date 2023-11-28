import React, { useEffect } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { editBook, setBook } from "../Reducer/Slice";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      authorname: "",
      authordob: "",
      authorbio: "",
      books: [
        {
          title: "",
          isbn: "",
          publishedon: "",
          bookimage: "",
          authorname: "",
        },
      ],
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
          values
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
          <Input formik={formik} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
