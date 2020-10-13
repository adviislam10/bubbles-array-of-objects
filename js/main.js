// BUBBLE OPTIONS

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600);

// Global Variables
// 2D Array to store Bubble Data
let colorNames = ['red', 'green', 'blue', 'orange', 'magenta', 'purple']

let bubbles = [];


// Main Program Loop
requestAnimationFrame(draw);

function draw() {

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bubble

    for (let i = 0; i < bubbles.length; i++) {
        // Move Bubbles
        bubbles[i].x += Math.randomDec(-5, 5);
        bubbles[i].y += Math.randomDec(-5, 5);

        // Draw Bubbles
        ctx.strokeStyle = bubbles[i].col;
        ctx.strokeCircle(bubbles[i].x, bubbles[i].y, bubbles[i].r);

    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Key Events
document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
    if (event.code == 'ArrowRight') {

    }
}

document.addEventListener('click', mousedownHandler);

function mousedownHandler(event) {
            // Add a new random bubble
            bubbles.push({
                x: mouseX,
                y: mouseY,
                r: Math.randomDec(5, 30),
                col: Math.randomElement(colorNames)
            });
}


