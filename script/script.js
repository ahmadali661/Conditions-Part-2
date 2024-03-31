let cities = ["Fasialabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Kashmir", "peshawar"] ;

function simpleAlert() {
    let name = "Ahmad Malik";
    alert(name)
}

function printMyName() {

    let myName = document.getElementById("inputText").value;
    if (!myName) {
        alert("Please type your name")
        return;
    }
    document.getElementById("output").innerHTML = myName;
}

function printAllCities() {
    document.getElementById("output").innerHTML = " ";

    for (let index = 0; index < cities.length; index++) {
        let city = cities[index]
        console.log('city', city)
        document.getElementById("output").innerHTML += index + 1 + ") " + city + "<br />"
    }
    
  
}

function addCity(){
    let city = document.getElementById("inputText").value;

    if (!city){
        alert('Please type your city name.')
        return;
    }
    cities.push(city);
    document.getElementById("output").innerHTML = '<span style ="color: green; font-size: 20px;">"' + city + '"</span> has been successfully added into list.';
}
function generateTable(){
    
    if (!city){
        alert('Please type your city name.')
        return;
    }
}