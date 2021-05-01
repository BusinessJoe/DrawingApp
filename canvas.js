let isDrawing = false;
let x = 0;
let y = 0;

let strokeColor = "#000";
let lineWidth = 10;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener("mouseup", e => {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    isDrawing = false;
});

canvas.addEventListener("mousemove", e => {
    if (isDrawing) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});


function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.lineCap = "round";
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}
