let registerUsername = document.getElementById('registerUsername') 
let registerPassword = document.getElementById('registerPassword')
let loginName = document.getElementById('loginName')
let loginPassword = document.getElementById('loginPassword')

document.getElementById('btn-signup').addEventListener('click',()=>{
    let users = JSON.parse(localStorage.getItem('users')) ?? []
    let registerUser = {
        id:(users.length - 1),
        username:registerUsername.value,
        password:registerPassword.value
    }
    users.push(registerUser)
    localStorage.setItem('users',JSON.stringify(users))

    console.log(users);
})


document.getElementById('btn-login').addEventListener('click',(e)=>{
    let users = JSON.parse(localStorage.getItem('users')) ?? []
    
    for(var i in users){
        if(loginName.value === users[i].username){
            if(loginPassword.value === users[i].password){
                e.preventDefault();
                window.location.href = "index.html";
                break;
            }else{
                alert("Mat khau khong chinh xac!")
            }
        }else{
            alert("User khong ton tai!")
        }
    }
    
})