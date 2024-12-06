function  calculator(){
    let height=document.getElementById('height')
    let weight=document.getElementById('weight')
    let bmi=document.getElementById('bmi')
    let res=weight.value/(height.value**2)
    let result=document.getElementById('result')
    result.innerText=res.toFixed(1)
    let calculation=document.getElementById('calculation');
    if (res<18.5){
        calculation.innerText='You are underweight.'
    }
    else if(res>=18.5 && res<=24.9){
        calculation.innerText='You are healthy.'
    }
    else if(res>25 && res<=29.9){
        calculation.innerText='You are overweight.'
    }
    else if(res>=30 && res<=35){
        calculation.innerText='You are obese.'
    }
    else if(res>35){
        calculation.innerText='You are severely obese.'
    }
    
}