import { CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Viewuser from "./Viewuser";

const Card = ({ data, handleDelete }) => {
  return (
    <div className="full-width main">
      <div className="container">
        <div className="row d-flex">
          <div className="books">
            {Array.isArray(data.author.books) &&
              data.author.books.map((item, index) => {
                return (
                  <div key={index} className="col-4">
                    <div data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                      <div
                        className="card mb-3"
                        style={{
                          maxWidth: "310px",
                          height: "460px",
                          backgroundImage: `url(${item.books.bookimage})`,
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4"></div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <Viewuser
                                item={item}
                                index={index}
                                handleDelete={handleDelete}
                              />
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
