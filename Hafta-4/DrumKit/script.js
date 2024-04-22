document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', () => {
    const soundName = pad.getAttribute('data-sound');
    const sound = new Audio(`assets/${soundName}.wav`);
    sound.play();
  });
});

document.addEventListener('keydown', event => {
  const pad = document.querySelector(`.drum-pad[id="${event.key}"]`);
  if (pad) {
    const soundName = pad.getAttribute('data-sound');
    const sound = new Audio(`assets/${soundName}.wav`);
    sound.play();
    pad.classList.add('active'); 
    setTimeout(() => pad.classList.remove('active'), 100); 
  }
});
