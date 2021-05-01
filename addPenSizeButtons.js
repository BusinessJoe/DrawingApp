let sizes = [1, 5, 10, 20];
let penSizesHtml = "";

for (let i = 0; i < sizes.length; i++) {
    let size = sizes[i]
    penSizesHtml += `<button class="button" type="button" value="${size}" onclick="logValue(this)">${size}</button>`;
}

document.getElementById("penSize").innerHTML = penSizesHtml;

function logValue(button) {
    lineWidth = button.value;
    console.log(button.value);
}
