import axios from "axios";

const baseUrl = "https://suitmedia-backend.suitdev.com/api/ideas";

export const fetchIdeas = async (pageNumber, pageSize, pageSort) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        "page[number]": pageNumber,
        "page[size]": pageSize,
        append: ["small_image", "medium_image"],
        sort: pageSort,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
