import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../global.css";

const Ideas = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage")
      ? JSON.parse(localStorage.getItem("currentPage"))
      : 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(
    localStorage.getItem("itemsPerPage")
      ? JSON.parse(localStorage.getItem("itemsPerPage"))
      : 10
  );
  const [sortOrder, setSortOrder] = useState(
    localStorage.getItem("sortOrder")
      ? JSON.parse(localStorage.getItem("sortOrder"))
      : "published_at"
  );
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchIdeasData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${itemsPerPage}&append[]=small_image&append[]=medium_image&sort=${sortOrder}`
        );
        console.log(response.data);
        const modifiedPosts = response.data.data.map((post) => {
          return {
            ...post,
            published_at: formatDate(post.published_at),
          };
        });

        setPosts(modifiedPosts);
        setTotalItems(response.data.meta.total);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchIdeasData();
  }, [currentPage, itemsPerPage, sortOrder]);

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
          <div className="d-flex flex-wrap gap-5 justify-content-center">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="card"
                style={{ width: "18rem", height: "20rem"}}
              >
                <Card.Img
                  variant="top"
                  src={post.small_image[0].url}
                  alt={post.title}
                />
                <Card.Body>
                  <span>{formatDate(post.published_at)}</span>
                  <Card.Text className="fw-bold fs-5">{post.title}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
