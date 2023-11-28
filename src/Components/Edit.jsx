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

  useEffect(() => {
    const getbooks = async () => {
      try {
        const bookslist = await axios.get(
          `https://656450eaceac41c0761de102.mockapi.io/author/${params.id}`
        );
        dispatch(editBook(bookslist.data));
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
