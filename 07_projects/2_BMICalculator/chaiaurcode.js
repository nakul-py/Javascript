const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value); 
    const height = parseInt(document.querySelector("#height").value);
    const results = document.querySelector("#results");
    
    if(height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height.";
        return;
    }else if(weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight.";
        return;
    }
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    // results

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    results.innerHTML = `Your BMI is ${bmi} and you are classified as ${category}.`;
    results.style.display = "block"; 
    results.style.color = "black";
    results.style.backgroundColor = "lightgreen";
    results.style.padding = "10px";
    results.style.borderRadius = "5px";
    results.style.marginTop = "10px";
    results.style.fontSize = "20px";
    results.style.textAlign = "center";
    results.style.fontFamily = "Arial, sans-serif";
    results.style.transition = "all 0.3s ease-in-out";
}
);