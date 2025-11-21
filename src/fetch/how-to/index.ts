const URLAPI = "https://jsonplaceholder.typicode.com/users";

// with then and catch
const getDataUsers = (url: string) => {
  fetch(url)
    .then((res) => {
      // we must check if the res was successful (status 200-299)
      if (!res.ok) {
        // if not ok, we throw an error to be caught by .catch()
        throw new Error(`HTTP error! Status : ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(`Fetch failed : ${error}`);
    });
};

getDataUsers(URLAPI);

// ==================================================================================== //

// with async await try catch
const getData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! Status : ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(`Fetch failed : ${error}`);
  }
};

getData(URLAPI);
