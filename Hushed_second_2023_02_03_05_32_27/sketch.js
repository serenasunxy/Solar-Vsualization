
// Where is the circle
let x1,x2,x3,x4,x5,x6,x7,x8,y;
let earthTexture;
let saturnTexture;
let uranusTexture;
let jupiterTexture;
let mercuryTexture;
let venusTexture;
let marsTexture;
let neptuneTexture;

function setup() {
  createCanvas(1400, 800, WEBGL);
  // Starts in the middle
  x1 = -700;
  x2 = -700;
  x3 = -700;
  x4 = -700;
  x5 = -700;
  x6 = -500;
  x7 = 100;
  x8 = 200;
  y = 0;

}

function preload() {
  earthTexture = loadImage("earth.jpg");
  saturnTexture = loadImage("saturn.jpg");
  jupiterTexture = loadImage("jupiter.jpg");
  uranusTexture = loadImage("uranus.jpg");
  mercuryTexture = loadImage("mercury.jpg");
  venusTexture = loadImage("venus.jpg");
  marsTexture = loadImage("mars.jpg");
  neptuneTexture = loadImage("neptune.jpg");
}

function draw() {
  background(0);
  
  // Draw Neptune
  texture(neptuneTexture);
  ellipse(x8, y, 388, 388);
  x8 = x8 + 0.18;
  // Reset to the bottom
  if (x8 > 1200) {
    x8 = -700;
  }
  
     // Draw Uranus
  texture(uranusTexture);
  ellipse(x7, y, 400, 400);
  x7 = x7 + 0.23;
  // Reset to the bottom
  if (x7 > 1200) {
    x7 = -700;
  }
  
  // Draw Saturn
  texture(saturnTexture);
  ellipse(x6, y, 945, 945);
  x6 = x6 + 0.33;
  // Reset to the bottom
  if (x6 > 1200) {
    x6 = -700;
  } 
  
  // Draw Jupiter
  texture(jupiterTexture);
  ellipse(x5, y, 1120, 1120);
  x5 = x5 + 0.44;
  // Reset to the bottom
  if (x5 > 1200) {
    x5 = -700;
  }

    // Draw Mars
  texture(marsTexture);
  ellipse(x4, y, 53, 53);
  x4 = x4 + 0.81;
  // Reset to the bottom
  if (x4 > 1200) {
    x4 = -700;
  }
  
   // Draw Earth
   texture(earthTexture);
  ellipse(x3, y, 100, 100);
  x3 = x3 + 1;
  // Reset to the bottom
  if (x3 > 1200) {
    x3 = -700;
  }
  
  // Draw Venus
  texture(venusTexture);
  ellipse(x2, y, 100, 100);
  x2 = x2 + 1.17;
  // Reset to the bottom
  if (x2 > 1200) {
    x2 = -700;
  }
  
  // Draw Mercury
  texture(mercuryTexture);
  ellipse(x1, y, 38, 38);
  x1 = x1 + 1.61;
  // Reset to the bottom
  if (x1 > 1200) {
    x1 = -700;
  }


      

}