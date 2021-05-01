let colors = ["#000", "#f44336", "#4CAF50", "#008CBA", "#fa52de", "#f0e878"];
let colorButtonsHtml = "";

for (let i = 0; i < colors.length; i++) {
    let col = colors[i]
    colorButtonsHtml += `<button class="button" type="button" value="${col}" onclick="logColor(this)" style="${buttonStyle(col)}"></button>`;
}

document.getElementById("colors").innerHTML = colorButtonsHtml;

function logColor(button) {
    strokeColor = button.value;
    console.log(button.value);
}

function buttonStyle(value) {
    return `background-color: ${value};`;
}
