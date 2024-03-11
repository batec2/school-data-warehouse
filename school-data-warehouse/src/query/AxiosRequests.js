import axios from "axios";

/**
 * Fetches the courses from the api
 * @returns list of courses
 */
export const fetchWarehouse = async ({ queryKey }) => {
  let response;
  if (queryKey[1]) {
    response = await axios.get(`http://localhost:8888/`, {
      params: queryKey[1],
    });
  } else {
    response = await axios.get(`http://localhost:8888/`);
  }
  if (response.status !== 200) {
    throw new Error(`Failed to get data`);
  }
  return response.data;
};

/**
 * Sends a post request with file to server
 * @param {} param0
 */
export const uploadFile = async ({ file }) => {
  // Need to send in FormData object to upload files
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`http://localhost:8888/`, formData);
  if (response.status !== 200) {
    throw new Error(`Failed to get data`);
  }
};
