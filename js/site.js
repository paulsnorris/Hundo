//get the values from the page
//starts or controller function
function getValues(){
    //get values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    //We need to validate input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
            //call generateNumbers
            let numbers = generateNumbers(startValue, endValue);
            //call displayNumbers
            displayNumbers(numbers);
            
    } else{
        alert("You must enter integers")
    }


}

//generate numbers from the startValue to endValue
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];

    //get all numbers from start to end

for (let index = startValue; index <= endValue; index++){
        //this will execute in a loop until endex = endValue
        numbers.push(index);
    }
    return numbers;
}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        if (number % 2==0) {
            //This does not render correctly with Prism, see source code
            templateRows += `<tr><td><b>${number}</b></td></tr>` 
        }
        else{
            templateRows += `<tr><td>${number}</td></tr>`  
        }
          
    }
    document.getElementById("results").innerHTML = templateRows;
}