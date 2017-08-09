/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
    const users = new XMLHttpRequest();
    users.open('GET', 'https://jsonplaceholder.typicode.com/users');

    users.onreadystatechange = function() {
        if(users.readyState === 4) {
 		    if(users.status === 200) {
 			    cb(users.responseText);
		    }
		}
	};

	users.send();
};
