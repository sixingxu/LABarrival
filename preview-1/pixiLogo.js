

$( document ).ready(function() {
    // Get the screen width and height
var width = window.innerWidth;
var height = window.innerHeight;
// Chooses either WebGL if supported or falls back to Canvas rendering
var renderer = new PIXI.autoDetectRenderer(width, height);
// Add the render view object into the page
document.body.appendChild(renderer.view);

// The stage is the root container that will hold everything in our scene
var stage = new PIXI.Container();

const wavyUniforms = {
    u_resolution: [window.innerWidth, window.innerHeight],
    u_time: 1.0,
    _WarpSpeed: 1.0,
    _FlowSpeedU: 1.0,
    _FlowSpeedV: 1.0,
    _Bump: 0.07,
    _WaveSize: 5.0,
    _AnimationSpeed: 5,
    _Specular: 1.0,      
  }

var wavyFilter = new PIXI.AbstractFilter(null, wavy, wavyUniforms)
console.log(wavyFilter)

// Load an image and create an object
var logo = PIXI.Sprite.fromImage("imgs/lab-logo-wavy.png");
// Set it at the center of the screen
logo.x = width / 2;
logo.y = height / 2;
// Make sure the center point of the image is at its center, instead of the default top left
logo.anchor.set(0.5);
// Add it to the screen



logo.filters= [wavyFilter]

stage.addChild(logo);

animate()

var count = 0

function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);


    wavyFilter.uniforms.u_time += 0.01

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}



})
