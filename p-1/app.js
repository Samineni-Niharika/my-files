let users=[]
let usersContainer=document.getElementById('usersContainer')
let alert=document.getElementById('alert')



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
//map() creates a new array from calling a function for every array element.
//The filter() method creates a new array filled with
//  elements that pass a test provided by a function.
function renderusers(){
    usersContainer.innerHTML=" "
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
function doesuserexist(val){
    let user = users.filter((user)=>{
        return user.email==val;
    })
    if (user.length>0){
        return true
    }
    else{
        return false
    }
    
}
function hidealert(){
    setTimeout(()=>{
        alert.classList.remove('success','danger')
    },500);
}

function adduser(){
    let name=document.getElementById('name');
    let email=document.getElementById('email')
    let user={
        name: name.value,
        email: email.value,
    }
    let userexist= doesuserexist(email.value);
    if(!userexist){
        users.push(user)
        alert.classList.add('success')
        alert.innerText='Email already successsfully';
        hidealert()
    }
    else{
        alert.classList.add('danger')
        alert.innerText='Email already exist';
        hidealert()
    }
    console.log(users)
    renderusers()
}