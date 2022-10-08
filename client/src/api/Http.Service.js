import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    fetch("LOGS_URL", {
      method: "POST",
      body: JSON.stringify({ message: "API ERRORS" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return Promise.reject(error);
  }
);

export const getRequest = async (url) => {
  try {
    const res = await axios.get(url);
    return {
      success: res.status,
      data: res.data,
    };
  } catch (error) {
    console.log(`getrees ${error}`);
    return error.response;
  }
};

export const postRequest = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    return {
      success: res.status,
      data: res.data,
    };
  } catch (error) {
    return error.response;
  }
};
