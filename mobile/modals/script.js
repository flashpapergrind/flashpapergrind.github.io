document.getElementById("create-account-btn").addEventListener("click", function () {
    const drawer = document.getElementById("drawer");
    
    if (drawer.style.maxHeight) {
        drawer.style.maxHeight = null; // Collapse drawer
    } else {
        drawer.style.maxHeight = drawer.scrollHeight + "px"; // Expand drawer based on content height
    }
});
