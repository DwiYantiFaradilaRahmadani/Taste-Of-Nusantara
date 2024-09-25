document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function() {
            let section = this.innerText.toLowerCase();
            if (section === "beranda") {
                window.location.href = "dashboard.html";
            } else if (section === "kuliner nusantara") {
                window.location.href = "dbselengkapnya.html";
            }
        });
    });
});
