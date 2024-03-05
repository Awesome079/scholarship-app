
// function calculatePoints() {
//     let age = parseInt(document.getElementById("age").value);
//     let country = document.getElementById("country").value;
//     let mathGrade = parseInt(document.getElementById("mathGrade").value);
//     let englishGrade = parseInt(document.getElementById("englishGrade").value);

//     let pointsAge = 0;
//     if (age >= 18 && age <= 24) {
//         pointsAge = 100;
//     } else if (age >= 25 && age <= 30) {
//         pointsAge = 80;
//     } else if (age >= 31 && age <= 35) {
//         pointsAge = 50;
//     } else if (age >= 36 && age <= 40) {
//         pointsAge = 30;
//     } else if (age >= 41) {
//         pointsAge = 10;
//     }

//     let pointsCountry = 0;
//     switch (country) {
//         case "Africa":
//             pointsCountry = 50;
//             break;
//         case "Asia":
//             pointsCountry = 40;
//             break;
//         case "South America":
//             pointsCountry = 30;
//             break;
//         case "North America":
//             pointsCountry = 20;
//             break;
//         default:
//             pointsCountry = 10;
//             break;
//     }

//     let pointsGrade = 0;
//     let averageGrade = (mathGrade + englishGrade) / 2;
//     if (averageGrade >= 90 && averageGrade <= 100) {
//         pointsGrade = 150;
//     } else if (averageGrade >= 85 && averageGrade <= 89) {
//         pointsGrade = 140;
//     } else if (averageGrade >= 75 && averageGrade <= 84) {
//         pointsGrade = 120;
//     } else if (averageGrade >= 65 && averageGrade <= 74) {
//         pointsGrade = 100;
//     } else if (averageGrade >= 60 && averageGrade <= 64) {
//         pointsGrade = 80;
//     } else if (averageGrade >= 50 && averageGrade <= 59) {
//         pointsGrade = 50;
//     } else if (averageGrade >= 40 && averageGrade <= 49) {
//         pointsGrade = 20;
//     }

//     let totalPoints = pointsAge + pointsCountry + pointsGrade;

//     let messageElement = document.getElementById("message");
//     if (totalPoints >= 180) {
//         messageElement.textContent = "Congratulations! You are awarded the scholarship.";
//         messageElement.style.color = "green";
//     } else {
//         messageElement.textContent = "Sorry, you did not meet the criteria for the scholarship.";
//         messageElement.style.color = "red";
//     }
// }





const testing = () => {

    selects.forEach((select) => {
        subjects.forEach((subject) => {
            let option = document.createElement('option');
            option.setAttribute('value', subject);
            option.textContent = subject;
            select.appendChild(option);
        });

        select.addEventListener('change', () => {
            const selectedSubject = select.value;
            console.log(selectedSubject);

            // Store selected subject for this select element
            selectedSubjects[select.id] = selectedSubject;

            // Do whatever you want with the selected subject value
            const notSelectedSubject = subjects.filter(sub => sub !== selectedSubject);
        });
    });
}


function firstNAmeDetail(){
    let inputField = document.getElementById("putFirstName");
    let input = inputField.value;
    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your firstname"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("chimo");
        error.innerText = " "
        error.style.color = " "
    }
}


function lastNAmeDetail(){
    let inputField = document.getElementById("putLastName");
    let input = inputField.value;
    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your lastname"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("chimo");
        error.innerText = " "
        error.style.color = " "
    }
}



function ageDetail(){
    let inputField = document.getElementById("putAge");
    let input = inputField.value;
    // if(input ===""){
    //     inputField.style.borderColor = "red"
    //     let error = document.getElementById("eve")
    //     error.style.color = "red"
    //     error.textContent = "fill the form"
    //     // eve = error.append(error)

    // }else if (putAge = "one"){
    //     points += 100;
    // }else if(putAge = "two"){
    //     points += 80;
    // }else if (putAge = "three"){
    //     points += 50;
    // }else if(putAge = "four"){
    //     points += 30;
    // }else if(putAge = "five"){
    //     points += 10;
    // }
    //     console.log()

    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your age"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("chimo");
        error.innerText = " "
        error.style.color = " "
    }
}

// (putAge = "two")
// points += 80;
// (putAge = "three")
// points += 50;
// (putAge = "four")
// points += 30;
// (putAge = "five")
// points += 10;

function genderDetail(){
    let inputField = document.getElementById("putGender");
    let input = inputField.value;
    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your gender"
        error.style.color = "red"
    }
    if(input){
        let error = document.getElementById("chimo");
        inputField.style.borderColor = "green"
        error.innerText = " "
        error.style.color = " "
    }
}





function PhoneNumber(){
    let inputField = document.getElementById("putLastName");
    let input = inputField.value;
    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your phone"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("chimo");
        error.innerText = " "
        error.style.color = " "
    }
}

function schoolName(){
    let inputField = document.getElementById("putSchool");
    let input = inputField.value;
    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your schoolName"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("chimo");
        error.innerText = " "
        error.style.color = " "
    }
}
   

function countriesDetail(){
   
    let inputField = document.getElementById("ctn");
    let input = inputField.value;
    let contryPoint = 0
    if(input ===""){
        inputField.style.borderColor = "red"
        let error = document.getElementById("cons")
        error.style.color = "red"
        error.textContent = "fill the form"
        // cons = error.append(error)

    }else if (input === "one"){
        contryPoint += 50;
    }else if(input = "two"){
        contryPoint += 40;
    }else if (input = "three"){
        contryPoint += 30;
    }else if(input = "four"){
        contryPoint += 20;
    }else if(input = "five"){
        contryPoint += 10;
    }
    
    points = contryPoint
    console.log(contryPoint, points)

    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("chimo");
        error.innerText = "enter your country"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("chimo");
        error.innerText = " "
        error.style.color = " "
    }
}     
    
function emailDetail(){
    let inputField = document.getElementById("putEmailAddress");
    let input = inputField.value;

    if(input === "" | input === null){
        inputField.style.borderColor = "red"
        let error = document.getElementById("boss");
        error.innerText = "enter your email"
        error.style.color = "red"
    }
    
    if(input){
        inputField.style.borderColor = "green"
        let error = document.getElementById("boss");
        error.innerText = " "
        error.style.color = " "
    }
}


setInterval(()=>{
    firstNAmeDetail()
    lastNAmeDetail()
    ageDetail()
    genderDetail()
    PhoneNumber()
    schoolName()
    countriesDetail()
    emailDetail()
}, 150000)

function scholarship(){
    firstNAmeDetail()
    lastNAmeDetail()
    ageDetail()
    genderDetail()
    PhoneNumber()
    schoolName()
    countriesDetail()
    emailDetail()
    testing()
    console.log(points)
}























