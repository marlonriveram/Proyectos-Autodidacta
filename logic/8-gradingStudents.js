const grades = [73,67,38,33];

function gradingStudents (grades) {

   return grades.map(grade =>{
        const multFive = increment(grade);
        const diference = multFive - grade
        if( diference >= 3 || grade < 38){
            return grade
        }else{
            return multFive
        }
       
    })

    
function increment (grade) {
    for(let i = 0; i < 5; i++){
        grade+=1;

        if(grade %5 === 0) {
            return grade;
        };
    };
};
}




console.log(gradingStudents(grades));