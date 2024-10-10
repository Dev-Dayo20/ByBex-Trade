const hideBalance = document.getElementById("available-balance")
const btn = document.getElementById("toggle-btn")

btn.addEventListener('toggle', (e) => {
    e.preventDefault()
    hideBalance.innerHTML.hide;
})