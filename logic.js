/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new train - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed


 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCyn0w7IfN1imwG8EAPeVlNXKamzMDbRTA",
    authDomain: "train-time-f686e.firebaseapp.com",
    databaseURL: "https://train-time-f686e.firebaseio.com",
    projectId: "train-time-f686e",
    storageBucket: "",
    messagingSenderId: "606866579867"
  };

  firebase.initializeApp(config);

  var database = firebase.database();