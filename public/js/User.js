/*

The class has two main functions: render and update
I used an HTML template so that every time we are rendring a user card to the html page, we 
are actually adding a new copy of $userTemplate.
Generally - 
    * the function render() renders every user to the page
    * the function update() is making a PUT requiest to the server and sending the new value that the
        user typed. 
 */


var userTemplate = [
    //the HTML code that we'll add to the page every time we will render a user. 
    "<li class='user_li'>",
        "<div class='user_div'>",
            "<div class='info_div'>",
                "<div class='icon_wrapper'>",
                    "<img class='icon' src= '${icon}'></div>",
                "<div class='user_description'>",
                    "<p id='fullName' class='fullname'>${name} </p>",
                    "<p class='job_description'> ${job} |@ ${company_name} </p>",
                "</div>",
                "<p class='hidden_details'> Phone: ${phone} ${email} </p>",
    "<input class='update_textBox' type='text' placeholder='type new name'> ",
            "</div>",
            "<img src='${profile_image}' class='user_img'>",
        "</div>",
    "</li>"
].join('');


// User Constructor
//args - would be the user_json 
//template - the template we built above lodash library 
function User(args) {
    this.args = args;
    this.template = _.template(userTemplate)
}


User.prototype.render = function () {
    var html = $.parseHTML(this.template(this.args))
    $(html).find('input').change(this.update.bind(this))
    this.html = html;
    return html;
}

/*the function allows us to update the name field of
every user by opening a PUT request to the server
*/
User.prototype.update = function (ev) {

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:8081/users/' + this.args._id, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var myhtml = this.html;

    xhr.onload = function () {

        if (this.status == 200) {
            var res = xhr.response;
            $(myhtml).find('.fullname').html(ev.target.value);
        } else {
            alert()
        }
    }

    xhr.send(JSON.stringify({
        value: ev.target.value
    }));

}