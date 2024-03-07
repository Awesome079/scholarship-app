let totalPoint = 0;
let apply = document.getElementById("apply")
let error = document.getElementById("error");


function firstNAmeDetail(){
    
    let firstName  = document.getElementById('putFirstName').value;
        if (firstName === "") {
            document.getElementById('err').innerHTML = "Please select a first name.";
            err.style.color = "red"
            return false;
        } else {
            document.getElementById('err').innerHTML = "";
            return true;
        }
    
}


    function lastNAmeDetail(){

        let lastName = document.getElementById('putLastName').value;
        if (lastName === "") {
            document.getElementById('odd').innerHTML = "Please enter last name.";
            odd.style.color = "red"
            return false;
        } else {
            document.getElementById('odd').innerHTML = "";
            return true;
        }
    }




function ageDetail(){
    let pointsAge = 0;

let putAge = document.getElementById('age').value;
if (putAge === "") {
    document.getElementById('eve').innerHTML = "Please fill in an age .";
    eve.style.color = "red"
    return false;
} else if
  (age >= 18 && age <= 24){
    pointsAge = 100;
} else if (age >= 25 && age <= 30) {
    pointsAge = 80;
} else if (age >= 31 && age <= 35) {
    pointsAge = 50;
} else if (age >= 36 && age <= 40) {
    pointsAge = 30;
} else if (age >= 41) {
    pointsAge = 10;
}else{

    document.getElementById('eve').innerHTML = "";
    return true;
} 
   
    
    
}
    
 
function validateGender() {
    let gender = document.getElementById('gender').value;
    if (gender === "") {
        document.getElementById('genderError').innerHTML = "Please select a gender.";
        genderError.style.color = "red"
        return false;
    } else {
        document.getElementById('genderError').innerHTML = "";
        return true;
    }
}


function PhoneNumber(){
     
    let putPhoneName = document.getElementById('putPhoneNumber').value;
    if (putPhoneName === "") {
        document.getElementById('food').innerHTML = "Please enter phone number.";
        food.style.color = "red"
        return false;
    } else {
        document.getElementById('food').innerHTML = "";
        return true;
    }

}

function schoolName(){
    let school = document.getElementById('putSchool').value;
    if (school === "") {
        document.getElementById('awe').innerHTML = "Please enter your school.";
        awe.style.color = "red"
        return false;
    } else {
        document.getElementById('awe').innerHTML = "";
        return true;
    }
}
   

function countriesDetail(){
    let countriesPoints = 0;
    let putCountries = document.getElementById('putPhoneNumber').value;
    if (putCountries === "") {
        document.getElementById('cons').innerHTML = "Please select a country.";
        cons.style.color = "red"
        return false;

    
    }else if (inputCountries = "one"){
        points += 50;
    }else if(inputCountries = "two"){
        points += 40;
    }else if (inputCountries = "three"){
        points += 30;
    }else if(inputCountries = "four"){
        points += 20;
    }else if(inputCountries = "five"){
        points += 10;
    

    
        
    } else {
        document.getElementById('cons').innerHTML = "";
        return true;
       
} 

}  
function emailDetail(){
    let putEmail = document.getElementById('putEmailAddress').value;
    if (putEmail === "") {
        document.getElementById('boss').innerHTML = "Please enter your email.";
        boss.style.color = "red"
        return false;
    } else {
        document.getElementById('boss').innerHTML = "";
        return true;
    }
}


let subjects = ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Literature', 'Geography', 'Commerce', 'Economics', 'Government', 'Biology', 'Poetry', 'Music','Commerce','Financial Accounting','Technical Drawing', 'Geography','Agricultural Science', 'French', 'Food & Nutrition','Literature','Computer Studies','Library Studies','Reading Culture'];
let selectObj = {}
function selectOption() {
    let selectsContainer = document.querySelector('#select_container')
    let selects = selectsContainer.querySelectorAll('select');

    selects.forEach((select) => {
        for (let i = 0; i < subjects.length; i++) {
            let option = document.createElement('option')
            option.setAttribute('value', subjects[i])
            option.innerHTML = subjects[i]
            select.appendChild(option)
        }
    })

    // Second Phase
    selectsContainer.addEventListener('click', function () {
        let options = selectsContainer.querySelectorAll('option')
        selects.forEach(select => {
            select.addEventListener('change', (e) => {
                selectObj[e.target.id] = e.target.value
            })
        })

        options.forEach(option => {
            if (Object.values(selectObj).find(val => option.value == val) != undefined) {
                option.disabled = true
            } else {
                option.disabled = false
            }
        })
    })

    let Aa = selects.values;

    let sum = ("Aa+Bb+Cc+Dd+Ee+Ff+Gg+Hh")
   
    let averageGrade = (sum) / 8;
    if (averageGrade >= 90 && averageGrade <= 100) {
        pointsGrade = 150;
    } else if (averageGrade >= 85 && averageGrade <= 89) {
        pointsGrade = 140;
    } else if (averageGrade >= 75 && averageGrade <= 84) {
        pointsGrade = 120;
    } else if (averageGrade >= 65 && averageGrade <= 74) {
        pointsGrade = 100;
    } else if (averageGrade >= 60 && averageGrade <= 64) {
        pointsGrade = 80;
    } else if (averageGrade >= 50 && averageGrade <= 59) {
        pointsGrade = 50;
    } else if (averageGrade >= 40 && averageGrade <= 49) {
        pointsGrade = 20;
    }
    
    console.log()



}




selectOption()


function scholarship(){
    firstNAmeDetail()
    lastNAmeDetail()
    ageDetail()
    validateGender() 
    // genderDetail()
    PhoneNumber()
    schoolName()
    countriesDetail()
    emailDetail()
    selectOption()
    


    let totalPoints = pointsAge + pointsCountry + pointsGrade;
    console.log(total);

        if (totalPoints >= 180) {
            alert ("Congratulations! You are awarded the scholarship.");
        
        } else {
            alert("Sorry, you did not meet the criteria for the scholarship.");
        }

    console.log(points)
}