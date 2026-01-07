const button = document.getElementById("get-posts");
const input = document.querySelector("input[type=text]");

button.addEventListener("click", (e) => {
    todoSrevice.getList(input.value, todoLayout.showTodo);
});
