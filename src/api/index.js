/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
    const todos = new XMLHttpRequest();
    todos.open('GET', 'https://jsonplaceholder.typicode.com/todos');

    todos.onreadystatechange = function() {
        if(todos.readyState === 4) {
 		    if(todos.status === 200) {
 			    cb(todos.responseText);
		    }
		}
	};

	todos.send();
};
