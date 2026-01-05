import type methods = require("../fetch/methods");

// ================= SETUP WRAPPER ====================
const BASE_URL = "https://691ffec531e684d7bfcb4dc8.mockapi.io/api/users";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const apiClient = async <T>(
  endpoint: string,
  method: RequestMethod,
  bodyData?: any
): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    method: method,
    headers: headers,
    body: bodyData ? JSON.stringify(bodyData) : null,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`API Error ${response.status} : ${errorBody}`);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("Terjadi kesalahan di Fetch Wrapper", error);
    throw error;
  }
};

const api = {
  get: <T>(endpoint: string) => apiClient<T>(endpoint, "GET"),

  post: <T>(endpoint: string, body: any) =>
    apiClient<T>(endpoint, "POST", body),

  put: <T>(endpoint: string, body: any) => apiClient<T>(endpoint, "PUT", body),

  delete: <T>(endpoint: string) => apiClient<T>(endpoint, "DELETE"),

  patch: <T>(endpoint: string, body: any) =>
    apiClient<T>(endpoint, "PATCH", body),
};

// ================= HOW TO USE ====================

interface ProductsType {
  id: string;
  title: string;
  price: number;
}

const prod1: ProductsType = {
  id: "1",
  title: "iPhone 17 pro max",
  price: 10000,
};

const prod2: ProductsType = {
  id: "2",
  title: "Xiaomi 17 pro max",
  price: 7500,
};

// Sending Data With Wrapper
const sendingData = async () => {
  try {
    const newProduct = await api.post<ProductsType>("/products", prod1);
    console.log("Added Success!", newProduct);
  } catch (error) {
    console.log(error);
  }
};

sendingData();

// Fetching Data With Wrapper
const fetchData = async () => {
  try {
    const products = await api.get<ProductsType[]>("/products");
    console.log("Success!", products);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// Replace Data With Wrapper
const replaceData = async () => {
  const id = 2;
  try {
    const replace = await api.put<ProductsType>(`/products/${id}`, prod2);
    console.log("Replace Success!", replace);
  } catch (error) {
    console.log(error);
  }
};

replaceData();

// Partial Update With Wrapper
const partialUpdate = async () => {
  const id = 3;
  try {
    const update = await api.put<ProductsType>(`/products/${id}`, {
      price: 500,
    });
    console.log("Update Success!", update);
  } catch (error) {
    console.log(error);
  }
};

partialUpdate();

// // Deleting by id With Wrapper
const deletData = async () => {
  const id = 11;
  try {
    const del = await api.delete<ProductsType>(`/products/${id}`);
    console.log("Delete Success!", del);
  } catch (error) {
    console.log(error);
  }
};

deletData(); // will be an error bcs id 11 doesn't exist again, if you wan to try change it.

// trying get data user
const getDataUsers = async () => {
  try {
    const dataUser = await api.get<methods.User[]>("/users");
    console.log(`Data Users :`, dataUser);
  } catch (error) {
    console.log(error);
  }
};

getDataUsers();
