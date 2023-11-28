import { CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
                    <div className="card mb-3"  style={{ maxWidth: "310px",height :"460px", backgroundImage: `url(${item.books.bookimage})`}}>
                      <div className="row g-0">
                        <div className="col-md-4">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <div className="container">
                              <div className="row">
                                <div className="col-6">
                                  <Link
                                    to={`/edit/${item.id}`}
                                    className="btn btn-outline-primary"
                                  >
                                    Edit
                                  </Link>
                                </div>
                                <div className="col-6">
                                  <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger">
                                    Delete
                                  </button>
                                </div>
                              </div>
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
