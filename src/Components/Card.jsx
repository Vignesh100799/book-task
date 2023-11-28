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
                  <div className="col-4">
                    <div class="card mb-3" style={{ maxWidth: "540px" }}>
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={item.books.bookimage}
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{item.books.title}</h5>
                            <p class="card-text">{item.authorbio}</p>
                            <p class="card-text">
                              <small class="text-body-secondary">
                                {item.books.publishedon}
                              </small>
                            </p>
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
