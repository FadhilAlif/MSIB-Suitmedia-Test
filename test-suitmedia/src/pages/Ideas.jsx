import React, { useEffect, useState } from "react";
import { fetchIdeas } from "../api/IdeasData";

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
  });

  return <div>o</div>;
};

export default Ideas;
