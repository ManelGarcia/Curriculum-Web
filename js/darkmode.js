function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var section = document.getElementsByClassName("dark")
    for (let index = 0; index < section.length; index++) {
        section[index].classList.toggle("black");

    }
}