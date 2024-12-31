// const fetch = require("node-fetch"); // Assuming we're using node-fetch for making HTTP requests in a Node.js environment

// API URLs
const commentsAPI = "https://jsonplaceholder.typicode.com/comments";
const albumsAPI = "https://jsonplaceholder.typicode.com/albums";
const photosAPI = "https://jsonplaceholder.typicode.com/photos";
const usersAPI = "https://jsonplaceholder.typicode.com/users";

function fetusersAPI(callback) {
  fetch(usersAPI)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("data is not fetched properly");
    });
}

function fetCommentsApi(callback) {
  fetch(commentsAPI)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("data is not fetched properly");
    });
}

fetusersAPI(function (users) {
  console.log(users.find((user) => user.id == 1));
  fetCommentsApi((comments) => {
    console.log(comments.find((comment) => comment.id == 100));
  });
});

// here developer doe'nt have any controles over his code fetCommentsApi depends on futUrE if futUrE get any error then fetCommentsApi will face error also this call Inversion of Control (IoC)
