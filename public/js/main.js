var usersArray = [];
getUsers();


/*
    the func getUsers() is taking all users that were provided and rendering them to the html page.
    I've created another class User that has a function render() and update(). Can be seen in js/User.js
*/
function getUsers() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8081/users', true);
    xhr.responseType = 'json';

    xhr.onload = function () {

        if (this.status == 200) {
            var res = xhr.response;
            usersArray = res;

            res.forEach(function (user) {
                
                //created a new model - user, can be seen in js/User.js
                var userModel = new User(user)
                usersArray.push(userModel)
                //render every user and add it to the html
                $("ul").append(userModel.render())
            })
        }


    };

    xhr.send();
}