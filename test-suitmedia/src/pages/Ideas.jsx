import React, { useEffect, useState } from "react";
import { fetchIdeas } from "../api/IdeasData";
import Hero from "../components/Hero";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../global.css";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("id:asc");

  useEffect(() => {
    const fetchDataApi = async () => {
      try {
        const res = await fetchIdeas({
          pageNumber: pageNumber,
          pageSize: perPage,
          pageSort: sortBy,
        });
        setIdeas(res);
        console.log("ideas res :", res);
      } catch (error) {
        console.log("Error fetch ideas", error);
      }
    };
    fetchDataApi();
  });

  return (
    <div>
      <Hero />
      <div className="container mt-5 mb-5 px-5">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-5">
            {/* Showing Card */}
            <div className="mb-0">Showing 10 - 20 of 200</div>
            <form className="d-flex align-items-center mb-0 gap-3">
              {/* Sort Per Page */}
              <div className="d-flex align-items-center gap-3">
                <label>Show Per Page :</label>
                <Form.Select
                  className="ms-auto rounded-pill"
                  aria-label="Default select example"
                  style={{ height: "40px", width: "120px" }}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </Form.Select>
              </div>
              {/* Sort By */}
              <div className="d-flex align-items-center gap-3">
                <label>Sort By :</label>
                <Form.Select
                  className="ms-auto rounded-pill"
                  aria-label="Default select example"
                  style={{ height: "40px", width: "120px" }}
                >
                  <option value="new">Newest</option>
                  <option value="last">Latest</option>
                </Form.Select>
              </div>
            </form>
          </div>
          <div className="d-flex flex-wrap gap-5 justify-content-between">
            <Card className="card" style={{ width: "18rem", height: "20rem" }}>
              <Card.Img variant="top" src="/suitmedialogo.png" />
              <Card.Body>
                <span>date 20202</span>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
