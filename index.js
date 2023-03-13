// an object that maps each key code to a flower image path
const flowerImages = {
    65: 'flowers/flower-a.png', // 'a' key
    66: 'flowers/flower-b.png', // 'b' key
    67: 'flowers/flower-c.png', // 'c' key
    68: 'flowers/flower-d.png', // 'd' key
    69: 'flowers/flower-e.png', // 'e' key
    70: 'flowers/flower-f.png', // 'f' key
    71: 'flowers/flower-g.png', // 'g' key
    72: 'flowers/flower-h.png', // 'h' key
    73: 'flowers/flower-i.png', // 'i' key
    74: 'flowers/flower-j.png', // 'j' key
    75: 'flowers/flower-k.png', // 'k' key
    76: 'flowers/flower-l.png', // 'l' key
    77: 'flowers/flower-m.png', // 'm' key
    78: 'flowers/flower-n.png', // 'n' key
    79: 'flowers/flower-o.png', // 'o' key
    80: 'flowers/flower-p.png', // 'p' key
    81: 'flowers/flower-q.png', // 'q' key
    82: 'flowers/flower-r.png', // 'r' key
    83: 'flowers/flower-s.png', // 's' key
    84: 'flowers/flower-t.png', // 't' key
    85: 'flowers/flower-u.png', // 'u' key
    86: 'flowers/flower-v.png', // 'v' key
    87: 'flowers/flower-w.png', // 'w' key
    88: 'flowers/flower-x.png', // 'x' key
    89: 'flowers/flower-y.png', // 'y' key
    90: 'flowers/flower-z.png', // 'z' key
    219: 'flowers/flower-å.png', // 'å' key
    222: 'flowers/flower-ä.png', // 'ä' key
    59: 'flowers/flower-last.png', // 'ö' key
    49: 'flowers/flower-1.png', // '1' key
    50: 'flowers/flower-2.png', // '2' key
    51: 'flowers/flower-3.png', // '3' key
    52: 'flowers/flower-4.png', // '4' key
    53: 'flowers/flower-5.png', // '5' key
    54: 'flowers/flower-6.png', // '6' key
    55: 'flowers/flower-7.png', // '7' key
    56: 'flowers/flower-8.png', // '8' key
    57: 'flowers/flower-9.png', // '9' key
    48: 'flowers/flower-0.png', // '0' key,
    // add more keys and flower images as needed
  };
  
  // get a reference to the flower container element
  const container = document.getElementById('flower-container');
  
  addEventListener("keypress", (event) => {
    console.log(event.keyCode)
    if (event.keyCode == 32) {
      const space = document.querySelector("h1").innerText = (" ");
      document.querySelector("h1").innerText = document.querySelector("h1").innerText & space;
    } else {
      document.querySelector("h1").innerText = document.querySelector("h1").innerText + event.key;
    }
  })


//Mower - Sound & Movement

var mowerSound = document.getElementById("mower-sound");
var mower = document.getElementById("mower");

  function reload() {
    mower.addEventListener("click", () => {
    mower.classList.add("animate");

    mowerSound.currentTime = 0.5;
    mowerSound.play();
      
      setTimeout(() => {
        location.reload();
      }, 3000);
    });
  }


document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
  
      // a flower key was pressed, add the flower image
      const flowerImage = flowerImages[keyCode];
  
      // create a new image element to display the flower
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.style.backgroundImage = `url(${flowerImage})`;
  
      // set the position of the flower randomly within the container element
      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      flower.style.left = `${x}px`;
      flower.style.top = `${y}px`;
  
      // append the flower to the container element
      container.appendChild(flower);
  
      // animate the flower by making it opaque after a short delay
      setTimeout(() => {
        flower.style.opacity = 1;
      }, 10);
});


const flying = document.getElementById('flying');
let isFlying = false;
let animationId;
let seagull = document.getElementById("seagull-sound");

function startFlying() {
  flying.style.transform = 'translateX(-100%)';
  animationId = requestAnimationFrame(startFlying);
};

function stopFlying() {
  flying.style.transform = 'translateX(0)';
  cancelAnimationFrame(animationId);
};

flying.addEventListener('click', () => {

  seagull.currentTime = 0;
  seagull.play();

  if (isFlying) {
    stopFlying();
    isFlying = false;
  } else {
    startFlying();
    isFlying = true;
  }
});

const bird = document.getElementById('bird');
let seagullfunny = document.getElementById("seagull-funny");

function startCircle() {
  const centerX = window.innerWidth / 1.2;
  const centerY = window.innerHeight / 1.2;
  const radius = 100;
  let angle = 0;
  const speed = 0.05;

  function animate() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    bird.style.transform = `translate(${x}px, ${y}px)`;
    angle += speed;
    requestAnimationFrame(animate);
  }

  animate();
};

function stopCircle() {
  bird.style.transform = '';
  cancelAnimationFrame(startCircle);
};

bird.addEventListener('click', () => {
  startCircle();
  seagullfunny.currentTime = 0;
  seagullfunny.play()
});

    
    