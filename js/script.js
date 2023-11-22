let icon = document.querySelector('.icon');

icon.onclick = (e) => {
    e.target.classList.toggle('active')
    console.log(e.target)
}