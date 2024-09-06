var Users = [
    {
        username:"galal",
        password:"11111"
    },
    {
        username:"nabila",
        password:"22222"
    },
    {
        username:"hani",
        password:"33333"
    },
    {
        username:"rahma",
        password:"44444"
    },
    {
        username:"alaa",
        password:"55555"
    }, 
]
var Admins = [
    {
        username:"galal",
        password:"111111"
    },
    {
        username:"nabila",
        password:"222222"
    },
    {
        username:"hani",
        password:"333333"
    },
    {
        username:"rahma",
        password:"444444"
    },
    {
        username:"alaa",
        password:"555555"
    }, 
]

function getInfo() {
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value
    for(i=0;i<Users.length;i++)
    {
        if(username == Users[i].username && password == Users[i].password){
            alert("Hello " +Users[i].username )
            window.location.href = 'home.html'
            return
        }
    }
   
    for(i=0;i<Admins.length;i++)
    {
        if(username == Admins[i].username && password == Admins[i].password){
            window.location.href = 'admin.html'
            return
        }
    }
     alert("you are not logged in")
}