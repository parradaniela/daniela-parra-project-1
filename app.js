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
        
        // Calls function to create new LI
        app.createNewLi();
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
            <div class="blog-comments-text">
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

app.updateLiFields = () => {
    
}

// Append list item to ul 

app.init = () => {
    app.handleSubmit();
};

app.init();