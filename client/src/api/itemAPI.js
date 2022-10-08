import { BASE_URL } from "./Endpoints";
import { getRequest, postRequest } from "./Http.Service";

const ITEMS_URL = `${BASE_URL}/items`;

export const getItemAPI = async () => {
  try {
    const response = await getRequest(ITEMS_URL);
    return response;
  } catch (error) {
    console.log(`getItemAPi ${error}`);
  }
};

export const addItemAPI = async (data) => {
  try {
    const response = await postRequest(ITEMS_URL, data);
    return response;
  } catch (error) {
    console.log(`getItemAPi ${error}`);
  }
};
