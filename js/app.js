function getPin(){
    const getPinValue=genaratePin();
    const convertString=getPinValue +''; //convert string to get length
    if(convertString.length === 4){
        return getPinValue;
    }
    else{
        return getPin();
    }
}

function genaratePin(){
    const random=Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-btn').addEventListener('click',function(){
    const pinValue=getPin();
   const displayScreen=document.getElementById('display-screen');
   displayScreen.value=pinValue;

})
document.getElementById('button-body').addEventListener('click',function(event){
    const buttons=event.target.innerText;
    const displayNum=document.getElementById('display-num');
    const prevNum=displayNum.value;
    if(isNaN(buttons)){
        if(buttons==='C'){
            displayNum.value='';
        }else if(buttons ==='<'){
            const digit=prevNum.split('');
            digit.pop();
            const newUp=digit.join('')
            displayNum.value=newUp;
        }
    }else{
        const updateNum=prevNum+buttons;
        displayNum.value=updateNum;
    }

})
document.getElementById('btn-submit').addEventListener('click',function(){
    const displayFirst=document.getElementById('display-screen');
    const displayOneValue=displayFirst.value;

    const displaySecond=document.getElementById('display-num');
    const displaySecondValue=displaySecond.value;
    
    const success=document.getElementById('success');
    const failure=document.getElementById('failure');

    if(displayOneValue===displaySecondValue){
        success.style.display='block';
        failure.style.display='none';
    }else{
        failure.style.display='block';
        success.style.display='none';
    }

})