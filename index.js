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
    186: 'flowers/flower-ö.png', // 'ö' key
    49: 'flowers/flower-1.png', // '1' key
    50: 'flowers/flower-2.png', // '2' key
    51: 'flowers/flower-3.png', // '3' key
    52: 'flowers/flower-4.png', // '4' key
    53: 'flowers/flower-5.png', // '5' key
    54: 'flowers/flower-6.png', // '6' key
    55: 'flowers/flower-7.png', // '7' key
    56: 'flowers/flower-8.png', // '8' key
    57: 'flowers/flower-9.png', // '9' key
    48: 'flowers/flower-0.png', // '0' key
    // add more keys and flower images as needed
  };
  
  // get a reference to the flower container element
  const container = document.getElementById('flower-container');
  
  // an array to store the previously pressed keys
  const previouslyPressedKeys = [];
  
  // add an event listener to the document object to detect key presses
  document.addEventListener('keydown', (event) => {
    // get the key code of the pressed key
    const keyCode = event.keyCode;
  
    // check if there is a flower image associated with the key code
    if (flowerImages.hasOwnProperty(keyCode)) {
      // get the flower image path for the key code
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
  
      // add the pressed key to the array of previously pressed keys
      previouslyPressedKeys.push(event.key);
  
      // update the text of the previously pressed keys element
      const previouslyPressedKeysElement = document.getElementById('previously-pressed-keys');
      previouslyPressedKeysElement.innerText = previouslyPressedKeys.join(', ');
    }
  
    // update the text of the currently pressed key element
    const currentlyPressedKeyElement = document.getElementById('currently-pressed-key');
    currentlyPressedKeyElement.innerText = event.key;
  });