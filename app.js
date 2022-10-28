const app = {};

// Form and UL elements stored into variables
app.ulEl = document.querySelector(".blog-comments-display");
app.formEl = document.querySelector(".blog-form");
app.nameInput = document.querySelector("#blog-form-name");
app.messageInput = document.querySelector("#blog-form-textarea");
app.emailInput = document.querySelector("#blog-form-email");
// Format for Date object used to produce the timestamps in the H5s as close to base style as I can get them
app.dateFormat = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

// Add event listener to form on submit, stores user info into variables
app.handleSubmit = () => {
    app.formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        // Stores user inputs
        const userName = app.nameInput.value;
        const userMessage = app.messageInput.value;
        const currentDate = new Date().toLocaleDateString("en-us", app.dateFormat);
        
        // Empties the input fields
        app.emptyInputs();
        
        // Passes user inputs into a function that creates the comment div
        app.createCommentDiv(currentDate, userName, userMessage);
    });
}

// Function that creates the .blog-comments-text div and inserts user inputs
app.createCommentDiv = (date, name, message) => {
    // Creates a new div and grants it the appropriate class
    const commentTextDiv = document.createElement("div");
    commentTextDiv.className = "blog-comments-text";

    // Creates elements that go in the div
    const newDateHeading = document.createElement("h5");
    const newParagraph = document.createElement("p");

    // Stops comments with an empty textarea from being posted
    if (message.trim()) {
        // Populates elements and appends to div as children
        newDateHeading.textContent = `${date} by ${name}`;
        newParagraph.textContent = message;
        commentTextDiv.appendChild(newDateHeading);
        commentTextDiv.appendChild(newParagraph);

        // Passes the populated div to a function that constructs the rest of the LI
        app.postNewLi(commentTextDiv);
    }
}

// Function that creates the rest of the LI and appends it to the UL. 
app.postNewLi = (secondDiv) => {
    const newCommentLi = document.createElement("li");
    // Creates a div for the img, updates its class and innerHTML
    const newImgDiv = document.createElement("div");
    newImgDiv.className = "blog-comments-img";
    // Using placekitten as there is no way to retrieve a user photo at this time
    newImgDiv.innerHTML = `<img src="http://placekitten.com/200/200" alt="User profile photo">`

    // Appends the image div, then the text div to the LI as children
    newCommentLi.appendChild(newImgDiv);
    newCommentLi.appendChild(secondDiv);
    
    // Appends the entire LI to the .blog-comments-display UL
    app.ulEl.appendChild(newCommentLi);
}

// Empties the input fields
app.emptyInputs = () => {
    app.nameInput.value = "";
    app.messageInput.value = "";
    app.emailInput.value = "";
}

app.init = () => {
    // Calls the event listener function on page load
    app.handleSubmit();
    // Clears the inputs in case there had been some text in them prior and the page was refreshed
    app.emptyInputs();
}

app.init();