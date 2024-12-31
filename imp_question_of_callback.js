// callback example
// example 1
// find area of circle for 3 circle radius given in array
let circleRadii = [5, 12, 15];

// Function to calculate the area of a circle
function areaOfCircle(r) {
  return Math.PI * r * r;
}

// Callback function is passed as the second argument to calculation()
function calculation(allRadii, logic) {
  const output = [];
  for (let i = 0; i < allRadii.length; i++) {
    // Execute the logic (callback) for each radius
    output.push(logic(allRadii[i]));
  }
  return output;
}

// Pass areaOfCircle function as a callback to calculation()
const result = calculation(circleRadii, areaOfCircle);
console.log(result); // Output: [78.53981633974483, 452.3893421169302, 706.8583470577034]

// example 2
// A function that takes another function as a parameter (callback)
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Calling the callback function
}

// A simple callback function that gets executed after greet()
function sayGoodbye() {
  console.log("Goodbye!");
}

// Using the greet function and passing sayGoodbye as the callback
greet("Alice", sayGoodbye);

// example 3

// Simulate an asynchronous operation (e.g., fetching data from an API)
function fetchDataFromAPI(url, callback) {
  console.log("Fetching data from " + url + "...");

  // Simulating an async delay (like an API call using setTimeout)
  setTimeout(() => {
    const data = { id: 1, name: "Alice" }; // Simulated fetched data
    console.log("Data fetched successfully!");

    // Passing the fetched data to the callback function
    callback(null, data);
  }, 2000); // Simulated 2-second delay
}

// Function to handle the fetched data
function handleFetchedData(error, data) {
  if (error) {
    console.log("Error fetching data:", error);
    return;
  }

  console.log("Handling fetched data:", data);
  processUserData(data, (error, processedData) => {
    if (error) {
      console.log("Error processing data:", error);
      return;
    }

    console.log("Processed data:", processedData);
  });
}

// Function to simulate processing of the fetched data
function processUserData(data, callback) {
  console.log("Processing data for user:", data.name);

  // Simulating an asynchronous operation (like processing the data)
  setTimeout(() => {
    const processedData = { ...data, processed: true }; // Adding processed flag
    console.log("Data processed successfully!");

    // Returning processed data to the callback
    callback(null, processedData);
  }, 1500); // Simulated 1.5-second delay
}

// Using the callback-based functions
fetchDataFromAPI("https://api.example.com/user", handleFetchedData);
