document.addEventListener("DOMContentLoaded", function() {
    // Example: dynamic food item details
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function() {
            alert("Displaying more details about " + this.parentElement.querySelector("h3").innerText);
        });
    });
});
