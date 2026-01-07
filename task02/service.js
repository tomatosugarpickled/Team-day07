const todoSrevice = (() => {
    const getList = async (page, callback) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );

            const todos = await response.json();

            if (callback) {
                callback(page, todos);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { getList: getList };
})();
