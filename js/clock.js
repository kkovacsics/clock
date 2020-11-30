'use strict';

const clock = document.querySelector('.clock');
setInterval( () => {
    const now = new Date();
    clock.textContent= `${now.getHours()}:${String(now.getMinutes()).padStart(2,0)}:${String(now.getSeconds()).padStart(2,0)}`;
}, 1000);