let calculation=localStorage.getItem('calculation') || '';
const varr=document.querySelector('.paraa');
varr.innerHTML=calculation;
function func(para){
    if(para==='='){
        calculation=eval(calculation);
        localStorage.setItem('calculation', calculation);
    }
    else if(para==='clear'){
        calculation='';
        localStorage.setItem('calculation', calculation);
    }
    else if(para==='00'){
        calculation=calculation.slice(0,-1);
        localStorage.setItem('calculation', calculation);
    }
    else{
        calculation+=para;
    }
    const varr=document.querySelector('.paraa');
    varr.innerHTML=calculation;
    // console.log(calculation);
}
