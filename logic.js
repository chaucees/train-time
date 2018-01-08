// Create button for adding new train - then update the html + update the database


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

database.ref().on("value", function(snapshot) {

console.log(snapshot.val()); 


// Button for adding Trains
$("#add-train-btn").on("click", function(event) {
event.preventDefault();

// Grabs user input
var empName = $("#train-name-input").val().trim();
var empDestination = $("#destination-input").val().trim();
var empFreq = moment($("#freq-input").val().trim(), "DD/MM/YY").format("X");
var empArrival = $("#arrival-input").val().trim();

// Creates local "temporary" object for holding employee data
var newEmp = {
name: empName,
role: empDestination,
start: empFreq,
rate: empRate
};


// Uploads employee data to the database
database.ref().push(newEmp);

// Logs everything to console
console.log(newEmp.name);
console.log(newEmp.destination);
console.log(newEmp.freq);
console.log(newEmp.arrival);})})

// Clears all of the text-boxes
$("#train-name-input").val("");
$("#destination-input").val("");
$("#freq-input").val("");
$("#arrival-input").val("");


// Add train data into the table
$("#train-table > tbody").append("<tr><td>" + empName + "</td><td>" + empDestination + "</td><td>" + empArrival + "</td><td>" + empFreq + "</td><td>");


