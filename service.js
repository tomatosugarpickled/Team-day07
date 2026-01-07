const todoService = (() => {
    const getList = async (page, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todoList = await response.json();

        if (callback) {
            callback(page, todoList);
        }
    };

    return { getList: getList };
})();
