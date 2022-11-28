const app = {};

// *** This program applies only to the form and comment section in the blog.html page *** //

// Form and UL elements stored into variables
app.ulEl = document.querySelector(".blog-comments-display");
app.formEl = document.querySelector(".blog-form");
app.nameInput = document.querySelector("#blog-form-name");
app.messageInput = document.querySelector("#blog-form-textarea");
app.emailInput = document.querySelector("#blog-form-email");
// Format for Date object created in the form event listener function
app.dateFormat = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

app.init = () => {
    // Calls the event listener function on page load
    app.handleSubmit();
    // Clears the inputs in case there had been some text in them prior and the page was refreshed
    app.emptyInputs();
}

// Empties the input fields
app.emptyInputs = () => {
    app.nameInput.value = "";
    app.messageInput.value = "";
    app.emailInput.value = "";
}

// Add event listener to form on submit, stores user info into variables
app.handleSubmit = () => {
    app.formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        // Stores user inputs and captures date the event was triggered
        const userName = app.nameInput.value;
        const userMessage = app.messageInput.value;
        const currentDate = new Date().toLocaleDateString("en-us", app.dateFormat);
        // Empties the input fields
        app.emptyInputs();
        // Passes user inputs into a function that creates the comment div
        app.populateCommentDiv(currentDate, userName, userMessage);
    });
}

// Function that creates the .blog-comments-text div and populates it with the user inputs
app.populateCommentDiv = (date, name, message) => {
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
app.postNewLi = (textDiv) => {
    const newCommentLi = document.createElement("li");
    // Creates a div for the img, updates its class and innerHTML using placekitten as there is no way to retrieve a user photo at this time
    const commentImgDiv = document.createElement("div");
    commentImgDiv.className = "blog-comments-img";
    commentImgDiv.innerHTML = `<img src="http://placekitten.com/94/92" alt="User profile photo">`
    // Appends the image div, then the passed text div to the LI as children
    newCommentLi.appendChild(commentImgDiv);
    newCommentLi.appendChild(textDiv);
    // Appends the entire LI to the .blog-comments-display UL
    app.ulEl.appendChild(newCommentLi);
}

app.init();

