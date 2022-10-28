const app = {};

// Form and UL elements stored into variables
app.ulEl = document.querySelector(".blog-comments-display");
app.formEl = document.querySelector(".blog-form");
app.nameInput = document.querySelector("#blog-form-name");
app.messageInput = document.querySelector("#blog-form-textarea");
app.emailInput = document.querySelector("#blog-form-email");
// Format for Date object used to produce the H5s
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
        app.nameInput.value = "";
        app.messageInput.value = "";
        app.emailInput.value = "";
        
        // Passes user inputs into a function that creates the comment div
        app.createCommentDiv(currentDate, userName, userMessage);
    });
}

// Create list item with all the divs etc inside with innerHTML
app.createNewLi = () => {
    const newCommentLi = document.createElement("li");
    newCommentLi.innerHTML =
        `<li>
            <div class="blog-comments-img">
                <img src="./sanctuary-helpers-final-images/comment-image2.jpg" alt="User profile photo">
            </div>
        </li>`
    console.log(newCommentLi);
}

// HTML I need 
    // will need variables for date, name of user, and message 

/* <li>
    <div class="blog-comments-img">
        <img src="./sanctuary-helpers-final-images/comment-image2.jpg" alt="User profile photo">
    </div>
    <div class="blog-comments-text">
        <h5>Wednesday October 10th, 2019 by ${name}</h5> 
        <p>user message here</p>
    </div>
</li> */

app.createCommentDiv = (date, name, message) => {
    // Creates a new div and grants it the appropriate class
    const newDiv = document.createElement("div");
    newDiv.className = "blog-comments-text";
    
    // Creates div children elements
    const newDateHeading = document.createElement("h5");
    const newParagraph = document.createElement("p");

    if (message.trim()) {

        // Populates elements and appends to div as children
        newDateHeading.textContent = `${date} by ${name}`;
        newParagraph.textContent = message;
        newDiv.appendChild(newDateHeading);
        newDiv.appendChild(newParagraph);

        // Passes the populated div to a function that constructs the rest of the LI
        app.createNewLi(newDiv);
    }
}

// Append list item to ul 

app.init = () => {
    app.handleSubmit();
};

app.init();