function goodFunc(){
    try {
        alert("Hey girl!")
    } catch {
        alert("Caught!")
    }
}

function accessibilityMode() {
    document.getElementById("blog-title", "small-hero-title").style.color = "black";
    document.getElementById("small-hero-title").style.color = "black";
    document.body.style.fontSize = "25px";
}