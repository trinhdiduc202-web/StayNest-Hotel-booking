let buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn) {
    btn.onclick = function () {
        alert("Added room");
    };
});