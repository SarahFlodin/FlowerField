// an object that maps each key code to a flower image path
const flowerImages = {
    65: 'path/to/flower-a.png', // 'a' key
    66: 'path/to/flower-b.png', // 'b' key
    67: 'path/to/flower-c.png', // 'c' key
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