const calculate = () => {
    let weight = Number(document.querySelector("#weight").value);
    let height = Number(document.querySelector("#height").value) / 100;
    
    solution.setAttribute("class", "");
    if (weight == 0 || height == 0){
        solution.textContent = "no data";
        return -1;
    }else{

        let BMI = (weight / (height * height)).toFixed(1);
        let solution = document.querySelector("#solution");
        let color;
        let result;
        let quote = "Your BMI is: "


        if (BMI < 18.5) {
            result = `${quote} ${BMI} = "Underweight"`;  
            color = "warning";    
        } else if (BMI > 30.0){
            result = `${quote} ${BMI} = "Obesity"`; 
            color = "danger";
        } else if (BMI > 25.0 && BMI < 29.9) {
            result = `${quote} ${BMI} = "Pre-obesity"`;
            color = "warning" 
        } else {
            result = `${quote} ${BMI} = "Normal or Healthy Weight"`
            color = "normal" 
        }
        solution.classList.add(color);
        solution.textContent = result;
        document.querySelector("#weight").value = 0;
        document.querySelector("#height").value = 0;
    }
}