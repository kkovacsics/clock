const clock = document.querySelector('.clock');

// setInterval( () => {
//   const now = new Date();
// eslint-disable-next-line max-len
//   clock.textContent = `${now.getHours()}:${String(now.getMinutes()).padStart(2,0)}:${String(now.getSeconds()).padStart(2,0)}`;
// }, 1000);

setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString();
}, 1000);
