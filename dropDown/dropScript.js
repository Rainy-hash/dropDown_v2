function dropFunction() {
    document.getElementById('dropdownID').classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}