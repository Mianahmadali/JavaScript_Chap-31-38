let rightNowDate = new Date();
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getNameOfToday() {
    // Call getDay() as a function to get the current day index
    let dayIndex = rightNowDate.getDay(); 
    let dayName = dayOfWeek[dayIndex]; // Use the day index to get the day name
    let html = "Today is <span style = 'color:red;'>" + dayName + "</span>";
    
    // Update the inner HTML of the output element
    document.getElementById("output").innerHTML = html;
}
function calculateDaysPassedSinceIBorn() {
    let bod = document.getElementById("input").value; // Get the value from the input field
    if (!bod) {
        alert("Please Enter your Date of Birth");
        return; // Exit the function if no date is provided
    }

    let today = new Date(); // Get the current date
    let bornDate = new Date(bod); // Create a Date object from the input value

    // Get the time in milliseconds
    let nowDays = today.getTime(); // Call getTime() as a function
    let daysPassed = bornDate.getTime(); // Call getTime() as a function

    // Calculate the difference in milliseconds
    let totalDays = nowDays - daysPassed;

    // Convert milliseconds to days
    let totalDaysPassed = Math.floor(totalDays / (1000 * 60 * 60 * 24)); // Use Math.floor to get a whole number

    // Create the output string
    let html = "You have spent <span style='color:red;'>" + totalDaysPassed + "</span> days in this world.";
    
    // Update the inner HTML of the output element
    document.getElementById("output").innerHTML = html;
}
function whatIsYourNextBirthday() {
    let bod = document.getElementById("input").value; // Get the value from the input field
    if (!bod) {
        alert("Please Enter your Date of Birth");
        return; // Exit the function if no date is provided
    }

    let today = new Date(); // Get the current date
    let birthDate = new Date(bod); // Create a Date object from the input value

    // Set the next birthday to the current year
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    // If the next birthday is in the past, set it to the next year
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the difference in milliseconds
    let totalDays = nextBirthday - today; // Subtract today's date from next birthday

    // Convert milliseconds to days
    let totalDaysUntilNextBirthday = Math.ceil(totalDays / (1000 * 60 * 60 * 24)); // Use Math.ceil to get a whole number

    // Create the output string
    let html = "Your next birthday is in <span style='color:red;'>" + totalDaysUntilNextBirthday + "</span> days.";
    
    // Update the inner HTML of the output element
    document.getElementById("output").innerHTML = html;
}

function greetUser () {
    let userName = prompt("Please Enter Your Name");
    greetButton(userName); // Pass userName to the greetButton function
}

function greetButton(userName) { // Accept userName as a parameter
    let now = new Date();
    let hours = now.getHours();
    let greet = "";

    if (hours >= 4 && hours < 12) {
        greet = "Good Morning";
    } else if (hours >= 12 && hours < 18) {
        greet = "Good Afternoon";
    } else {
        greet = "Good Night";
    }

    // Add a space between userName and greet
    let html = greet + ", " + userName + "!"; 
    document.getElementById("output").innerHTML = html;
}
function tellTime(){
    var now = new Date()
    var hr = now.getHours()
    var min = now.getMinutes()
    var ser = now.getSeconds()
    document.getElementById("output").innerHTML += "You clicked the button @ " + hr + ":" + min + ":" + ser + "<br/>"

}
function tellTime1(){
    tellTime()
}
function tellTime2() {
    tellTime()
    
}
function tellTime3() {
    tellTime()
    
}
function CalculateTax() {
    
}

function calculteTex(){
    var price = +prompt("Enter Price")
    var taxRate = 17
    var tax = calculateTex(price , taxRate);
    let html = "Tax :" + tax;
    document.getElementById("output").innerHTML = html
}
function calculateTex(price , taxRate) {
    var tax = price * taxRate / 100 ;
    return tax ;
}
function calculateTotalPrice(){
    var price = +prompt("Enter Number")
    if (!price) {
        showToastify("Please enter your price")
    }
    var total = calculateTotal(price);
    let html = "Total :" +Math.round(total);
    document.getElementById("output").innerHTML= html
    
}
function calculateTotal(price){
    if (price <1000){
        var taxRate = 8
    }
    else {
        var taxRate = 17 ;
    }
    var tax = calculateTex(price ,taxRate)
    var total = price + tax;
    return total
}



const clearInput = () => {
    document.getElementById("input").value = ""; // Clear the input field
}

const getInputValue = () => {
    return document.getElementById("input").value; // Return the current value of the input field
}
function clearOutput(){
    document.getElementById("output").innerHTML = "";
}
const showToastify = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(99, 4, 4),rgb(231, 77, 6))",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}
