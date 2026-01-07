const button = document.getElementById("get-todos");

button.addEventListener("click", (e) => {
    todoService.getList(2, todoLayout.showList);
    button.style.display = "none";
    console.log(todoService.getList(2, todoLayout.showList));
});
