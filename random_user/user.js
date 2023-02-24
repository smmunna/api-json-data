const randomUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
        .then(res=>res.json())
        .then(data=>displayUser(data));    
}

const displayUser = user =>{
    console.log(user);
    const userName =user.results[0].name.title+ ' ' + user.results[0].name.first + ' ' +user.results[0].name.last;
    const name = document.getElementById('name');
    name.innerHTML ='Name: '+ userName;

    const imgUrl = user.results[0].picture.medium;
    
    const image = document.getElementById('image');
    image.innerHTML = `
        <img src=${imgUrl} heigt="200" width="200"/>
    `
}

randomUser();