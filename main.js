/*document.addEventListener("click", e => {
    const isDropDownButton = e.target.matches("[rpt-btn]")
    if (!isDropDownButton && e.target.closest('[rpt-show]') != null) return

    let currentDropdown
    if (isDropDownButton) {
        currentDropdown = e.target.closest('[rpt-show]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[rpt-show].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})*/


function rptOpen() {
    const show = document.querySelector('.rpt-show');
    show.classList.toggle('show');
    console.log()
}

function empOpen() {
    const show = document.querySelector('.emp-show');
    show.classList.toggle('show');
    console.log()
}