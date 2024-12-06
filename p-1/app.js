let users=[]
let usersContainer=document.getElementById('usersContainer')




//Rendering the users: In the renderusers() function, you are trying
//  to access users.email and users.name. However, users is an array, 
//  not a single user object. You should iterate over the array 
//  and display each user's name and email.
// function renderusers(){
//     let div=document.createElement('div')
//     let name=document.createElement('p');
//     let email=document.createElement('p')
   
//     email.innerText=users.email
//     div.classList.add('user')
//     name.innerText=users.name
//     email.innerText=users.email
//     usersContainer.appendChild(div)
//     div.appendChild(name)
//     div.appendChild(email)

// }


function renderusers(){
        users.forEach((user)=>{
            let div = document.createElement('div');
            div.classList.add('user');

            let name = document.createElement('p');
            name.innerText = user.name;

            let email = document.createElement('p')
            email.innerText = user.email;

            usersContainer.appendChild(div);
            div.appendChild(name);
            div.appendChild(email);
        })
}
function adduser(){
    let name=document.getElementById('name');
    let email=document.getElementById('email')
    let user={
        name: name.value,
        email: email.value,
    }
    users.push(user)
    console.log(users)
    renderusers()
}