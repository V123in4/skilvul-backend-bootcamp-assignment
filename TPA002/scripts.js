let calculateBMI = (weight, height) => (weight/Math.pow((height/100), 2)).toFixed(1);

let BMIStringify = (bmiNum) => {
    if (bmiNum < 18.5) {
        return "Underweight";
    } else if(bmiNum >= 18.5 && bmiNum < 25) {
        return "Normal Weight";
    } else if(bmiNum >= 25 && bmiNum < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", (event) => {
    event.preventDefault();

    weight = Number(document.getElementById("weight").value);
    height = Number(document.getElementById("height").value);

    if(weight == '' || height == '') {
        return
    } else if (weight <= 0 || height <= 0){
        return
    }

    let bmiValue = calculateBMI(weight, height);
    
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result-number").innerText = bmiValue;
    document.getElementById("result-string").innerText = BMIStringify(bmiValue)
});
