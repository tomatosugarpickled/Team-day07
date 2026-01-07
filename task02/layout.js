const todoLayout = (() => {
    const showTodo = async (page, todos) => {
        const tbody = document.querySelector("table tbody");
        let text = ``;

        let pageSize = 20;
        let start = (page - 1) * pageSize;
        let end = page * pageSize;

        todos = todos.slice(start, end);

        todos.forEach((todo) => {
            const color = todo.completed ? "green" : "red";
            text += `
            <tr>
                <td>${todo.userId}</td>
                <td style="color: ${color}">${todo.title}</td>
            </tr>
            `;
        });

        tbody.innerHTML = text;
    };

    return { showTodo: showTodo };
})();
