document.getElementById("name").focus();

document.getElementById("other-title").style.display = "none";

function showField (){
    const question = document.getElementById("title");
    const otherText = document.getElementById("other-title");
   
    if (question.value == "other") {
        otherText.style.display = "block"
    } else {
        otherText.style.display = "none"
    }
}