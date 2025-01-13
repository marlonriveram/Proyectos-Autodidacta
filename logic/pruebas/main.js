// class Persona {
//   constructor({name,age,size,insta,face}){
//     this.name = name,
//     this.age = age,
//     this.size = size
//     this.socialMedia ={
//       insta,
//       face
//     }
//   }
// }

// class Persona2 extends Persona {
//   constructor({name,age,size,insta,face,lastName}){
//     super({name,age,size,insta,face})
//     this.lastName = lastName
//   }
// }

// const marlon = new Persona2({name:'marlon',age:27,size:1.80,insta:'sdfghj',lastName:'mosquera'})

// console.log(marlon.name)
// console.log(marlon.lastName)
// console.log(marlon.age)
// console.log(marlon.size)
// console.log(marlon.socialMedia)

const UsersDatabase = [
  { 
     username:"Luis",
     password:"Mimosa"
  },
  {
      username:"Paco",
      password:"Paco1234"
  }
  ];
  
  const UsersTimeLine = [
  
  {
      username:"Luis",
      timeline:"Estoy en vista"
  },
  {
      username:"Paco",
      timeline:"Estoy viajando en este momento"
  }
  
  
  ];




  function autth (username,password) {
    let result = 'error contraseña o usuario incorrecto';

    UsersDatabase.forEach(user =>{
      let isValidUserName = user.username === username;
      let isValidPassword = user.password === password;

      if(isValidUserName && isValidPassword){
       result = 'Bienvenido '+ user.username+ ' '+UsersTimeLine
        
      }
    })

    return result;
  }

  console.log(autth("Paco","Paco1234"))