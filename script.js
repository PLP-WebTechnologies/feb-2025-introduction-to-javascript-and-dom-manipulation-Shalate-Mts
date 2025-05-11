function changeText() {
    document.getElementById("chocheader").textContent = "Cocoa Indulgence!";
  }

function newText() {
    document.getElementById("cookheader").textContent = "ChocoChunk Bliss!";
  }

function hideText() {
    const paragraph = document.getElementById("steps"); // Target the paragraph by its ID
    if (paragraph) {
        paragraph.style.display = "none"; // Hide the paragraph
    }
}

function toggleInfo(button) {
    const paragraph = button.parentElement.previousElementSibling; // Select the <p> element before the button
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block"; // Show the paragraph
        button.textContent = "Hide Steps"; // Change button text to "Hide Steps"
    } else {
        paragraph.style.display = "none"; // Hide the paragraph
        button.textContent = "Read More"; // Change button text to "Read More"
    }
}
