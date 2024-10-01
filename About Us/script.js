function toggleDropdown(id) {
    var content = document.getElementById("dropdown-content-" + id);
    
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
