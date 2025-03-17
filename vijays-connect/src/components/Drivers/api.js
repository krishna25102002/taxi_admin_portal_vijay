import axios from "axios";

const API_BASE_URL = "http://52.66.69.48:4000"; 

export const fetchDrivers = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/driver/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching drivers:", error);
    throw error;
  }
};

export const fetchAllDocuments = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/upload/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

export const approveDriver = async (token, userId) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/driver/approve_user`,
      { userId: userId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error approving driver:", error);
    throw error;
  }
};

export const extendTrial = async (token, userId) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/driver/extend_expire_30_days`,
      { userId: userId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error extending driver expiration:", error);
    throw error;
  }
};

export const getDocumentUrl = async (token, documentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/upload/${documentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.url;
  } catch (error) {
    console.error("Error fetching pre-signed URL:", error);
    throw error;
  }
};
