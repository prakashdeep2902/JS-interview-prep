// // example of callbackhell
// // Simulating fetching data from an API
function getDataFromAPI(callback) {
  setTimeout(() => {
    console.log("Fetching data from API...");
    const response = { id: 1, name: "Alice" }; // Simulated response
    callback(response);
  }, 1000); // Simulate a 1-second delay
}

// Simulating processing the fetched data
function processData(data, callback) {
  setTimeout(() => {
    console.log("Processing data...");
    const processedData = { ...data, processed: true }; // Simulated processing
    callback(processedData);
  }, 1000); // Simulate a 1-second delay
}

// Simulating saving the processed data to a database
function saveToDatabase(data, callback) {
  setTimeout(() => {
    console.log("Saving data to database...");
    const result = { ...data, saved: true }; // Simulated result
    callback(result);
  }, 1000); // Simulate a 1-second delay
}

// Simulating sending an email notification
function sendEmailNotification(data, callback) {
  setTimeout(() => {
    console.log("Sending email notification...");
    const notificationStatus = { success: true }; // Simulated status
    callback(notificationStatus);
  }, 1000); // Simulate a 1-second delay
}

// Calling the functions in sequence using nested callbacks (Callback Hell)
// getDataFromAPI(function (response) {
//   processData(response, function (processedData) {
//     saveToDatabase(processedData, function (result) {
//       sendEmailNotification(result, function (notificationStatus) {
//         console.log("Operation Complete:", notificationStatus);
//       });
//     });
//   });
// });

// Simulating fetching data from an API

// remove callback hell using promises
function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching data from API...");
      const response = { id: 1, name: "Alice" }; // Simulated response
      resolve(response); // Resolve the promise with the response data
    }, 1000); // Simulate a 1-second delay
  });
}

// Simulating processing the fetched data
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processing data...");
      const processedData = { ...data, processed: true }; // Simulated processing
      resolve(processedData); // Resolve the promise with processed data
    }, 1000); // Simulate a 1-second delay
  });
}

// Simulating saving the processed data to a database
function saveToDatabase(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Saving data to database...");
      const result = { ...data, saved: true }; // Simulated result
      resolve(result); // Resolve the promise with the saved result
    }, 1000); // Simulate a 1-second delay
  });
}

// Simulating sending an email notification
function sendEmailNotification(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sending email notification...");
      const notificationStatus = { success: true }; // Simulated status
      resolve(notificationStatus); // Resolve the promise with notification status
    }, 1000); // Simulate a 1-second delay
  });
}

getDataFromAPI()
  .then((response) => processData(response))
  .then((processedData) => saveToDatabase(processedData))
  .then((result) => sendEmailNotification(result))
  .then((notificationStatus) => {
    console.log("Operation Complete:", notificationStatus);
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors in the chain
  });

//end remove callback hell using promises

//remove callback hell using async await

// Simulating fetching data from an API
function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching data from API...");
      const response = { id: 1, name: "Alice" }; // Simulated response
      resolve(response); // Resolve the promise with the response data
    }, 1000); // Simulate a 1-second delay
  });
}

// Simulating processing the fetched data
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processing data...");
      const processedData = { ...data, processed: true }; // Simulated processing
      resolve(processedData); // Resolve the promise with processed data
    }, 1000); // Simulate a 1-second delay
  });
}

// Simulating saving the processed data to a database
function saveToDatabase(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Saving data to database...");
      const result = { ...data, saved: true }; // Simulated result
      resolve(result); // Resolve the promise with the saved result
    }, 1000); // Simulate a 1-second delay
  });
}

// Simulating sending an email notification
function sendEmailNotification(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sending email notification...");
      const notificationStatus = { success: true }; // Simulated status
      resolve(notificationStatus); // Resolve the promise with notification status
    }, 1000); // Simulate a 1-second delay
  });
}

// Using async/await to handle asynchronous operations in sequence
async function performOperations() {
  try {
    const response = await getDataFromAPI(); // Wait for API response
    const processedData = await processData(response); // Wait for data processing
    const result = await saveToDatabase(processedData); // Wait for database save
    const notificationStatus = await sendEmailNotification(result); // Wait for email notification
    console.log("Operation Complete:", notificationStatus);
  } catch (error) {
    console.error("Error:", error); // Handle any errors that occur during the execution
  }
}

// Call the async function to execute the operations
performOperations();

// end remove callback hell using async await
