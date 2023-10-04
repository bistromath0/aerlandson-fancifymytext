

const fancify = document.getElementById("FancyShmancy");
const boring = document.getElementById("BoringBetty");
fancify.addEventListener("change", fancifyOption)
boring.addEventListener("change", boringOption)


function sendAlert(){alert("Something Changed")}

function enbiggenate(){
    document.getElementById("text1").style.fontSize = "24px";
}

function fancifyOption(){
    document.getElementById("text1").style.fontWeight = "bold";
    document.getElementById("text1").style.color = "blue";
    document.getElementById("text1").style.textDecoration = "underline";
}


function boringOption(){
    document.getElementById("text1").style.fontWeight = "normal";
    document.getElementById("text1").style.color = "black";
    document.getElementById("text1").style.textDecoration = "none";
  
}

function moo(){
    var textbox = document.getElementById("text1")
    textbox.value = textbox.value.toUpperCase()

    var parts = textbox.value.split(".")
    for(i=0; i < parts.length - 1; i++){
        parts[i] = parts[i] + "-Moo."
    }
    textbox.value = parts.join("");

  
}

