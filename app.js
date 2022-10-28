const app = {};

app.formEl = document.querySelector(".blog-form");
app.ulEl = document.querySelector(".blog-comments-display");
app.nameInput = document.querySelector("#blog-form-name");
app.messageInput = document.querySelector("#blog-form-textarea");

// Add event listener to form on submit, stores user info into variables
app.handleSubmit = () => {
    app.formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const userName = app.nameInput.value;
        const userMessage = app.messageInput.value;
    });
}

app.createNewLi = () => {
    
}
// Create list item with all the divs etc inside with innerHTML

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

// Append list item to ul 

app.init = () => {
    console.log(app);
};

app.init();