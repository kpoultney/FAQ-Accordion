var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", toggleContent);
    coll[i].addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            toggleContent.call(this);
        }
    });
}

function toggleContent() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
