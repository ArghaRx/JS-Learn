const clock = document.getElementById('clock');
const date = document.getElementById('date');
const button = document.getElementById('button');

button.addEventListener('click', function() {
    clock.style.display = 'block';
    setInterval(function () {
        let time = new Date();
        clock.innerHTML = time.toLocaleTimeString();
    }, 0);
    
    date.style.display = 'block';
    let d = new Date();
    date.innerHTML = d.toDateString();
});
