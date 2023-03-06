// an object that maps each key code to a flower image path
const flowerImages = {
    65: 'path/to/flower-a.png', // 'a' key
    66: 'path/to/flower-b.png', // 'b' key
    67: 'path/to/flower-c.png', // 'c' key
    68: 'path/to/flower-d.png', // 'd' key
    69: 'path/to/flower-e.png', // 'e' key
    70: 'path/to/flower-f.png', // 'f' key
    71: 'path/to/flower-g.png', // 'g' key
    72: 'path/to/flower-h.png', // 'h' key
    73: 'path/to/flower-i.png', // 'i' key
    74: 'path/to/flower-j.png', // 'j' key
    75: 'path/to/flower-k.png', // 'k' key
    76: 'path/to/flower-l.png', // 'l' key
    77: 'path/to/flower-m.png', // 'm' key
    78: 'path/to/flower-n.png', // 'n' key
    79: 'path/to/flower-o.png', // 'o' key
    80: 'path/to/flower-p.png', // 'p' key
    81: 'path/to/flower-q.png', // 'q' key
    82: 'path/to/flower-r.png', // 'r' key
    83: 'path/to/flower-s.png', // 's' key
    84: 'path/to/flower-t.png', // 't' key
    85: 'path/to/flower-u.png', // 'u' key
    86: 'path/to/flower-v.png', // 'v' key
    87: 'path/to/flower-w.png', // 'w' key
    88: 'path/to/flower-x.png', // 'x' key
    89: 'path/to/flower-y.png', // 'y' key
    90: 'path/to/flower-z.png', // 'z' key
    219: 'path/to/flower-å.png', // 'å' key
    222: 'path/to/flower-ä.png', // 'ä' key
    186: 'path/to/flower-ö.png', // 'ö' key
    49: 'path/to/flower-1.png', // '1' key
    50: 'path/to/flower-2.png', // '2' key
    51: 'path/to/flower-3.png', // '3' key
    52: 'path/to/flower-4.png', // '4' key
    53: 'path/to/flower-5.png', // '5' key
    54: 'path/to/flower-6.png', // '6' key
    55: 'path/to/flower-7.png', // '7' key
    56: 'path/to/flower-8.png', // '8' key
    57: 'path/to/flower-9.png', // '9' key
    48: 'path/to/flower-0.png', // '0' key
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