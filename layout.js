const todoLayout = (() => {
    const showList = async (page, todoList) => {
        const tbody = document.querySelector("#lists tbody");
        let text = ``;

        let pageSize = 20;
        let start = (page - 1) * pageSize;
        let end = page * pageSize;

        todoList = todoList.slice(start, end);
        todoList.forEach((todo) => {
            const titleClass = todo.completed ? "true" : "false";

            text += `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.userId}</td>
                    <td class="${titleClass}"">${todo.title}</td>
                    <td>${titleClass}</td>
                </tr>
            `;
        });

        tbody.innerHTML = text;
    };

    return { showList: showList };
})();
