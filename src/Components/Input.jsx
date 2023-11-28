import { ButtonBase, TextField } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";

const Input = ({ formik }) => {
  return (
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
    
);
};


export default Input;
