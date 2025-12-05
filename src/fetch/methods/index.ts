const URLAPI = "https://691ffec531e684d7bfcb4dc8.mockapi.io/api/users/users";

export interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

const dataUser1: User = {
  id: "1",
  name: "John Doe",
  age: 27,
  email: "john@example.com",
};

const dataUser2: User = {
  id: "1",
  name: "Rimuru Tempest",
  age: 32,
  email: "rimuru@example.com",
};

// Sending data with (POST)
const sendingData = async () => {
  try {
    const response = await fetch(URLAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser1),
    });

    if (!response.ok) {
      throw new Error(`request failed status : ${response.status}`);
    }

    console.log("Success!!");
  } catch (error) {
    console.log(error);
  }
};

sendingData();

// Fetching data with (GET) default
const fetchData = async () => {
  try {
    const response = await fetch(URLAPI);

    if (!response.ok) {
      throw new Error(`request failed status : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// Replace data with (PUT)
const replaceData = async () => {
  try {
    const response = await fetch(`${URLAPI}/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser2),
    });

    if (!response.ok) {
      throw new Error(`request failed status : ${response.status}`);
    }

    console.log("Update Success!!");
  } catch (error) {
    console.log(error);
  }
};

replaceData();

// Partial Update with (PATCH)
const partialUpdateData = async () => {
  try {
    const response = await fetch(`${URLAPI}/2`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Alexa Tokyo",
        email: "alexa@example.com",
      }),
    });

    if (!response.ok) {
      throw new Error(`request failed status : ${response.status}`);
    }

    console.log("Update Profile Success!!!");
  } catch (error) {
    console.log(error);
  }
};

partialUpdateData();

// Deleting by id data with (DELETE)
const deletData = async () => {
  try {
    const response = await fetch(`${URLAPI}/4`);
    if (!response.ok) {
      throw new Error(`request failed status : ${response.status}`);
    }
    console.log("Success Delete!!");
  } catch (error) {
    console.log(error);
  }
};

deletData();
