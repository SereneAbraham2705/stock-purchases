const initialprice=document.querySelector("#initial-price");
const stocksquantity=document.querySelector("#stocks-quantity");
const currentprice=document.querySelector("#current-price");
const resultbtn=document.querySelector("#result-btn");
const outputbox=document.querySelector("#output-box");

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        const loss=(initial-current)*quantity;
        const losspercentage=(loss/initial)*100;
        //const resans1=toFixed(losspercentage);
        outputbox.style.color="red";
        outputbox.innerText="Hey the loss is "+loss+" and the loss percentage is "+losspercentage+" %";
    }
    else if(initial<current){
        const profit=(current-initial)*quantity;
        const profitpercentage=(profit/initial)*100;
        //const resans2=toFixed(profitpercentage);
        outputbox.style.color="green";
        outputbox.innerText="Hey the profit is "+profit+" and the profit percentage is "+profitpercentage+" %";
    }
    else{
        outputbox.style.color="blue";
        outputbox.innerText="Neither Profit nor Loss!";
    }

}

function outputHandler(){
    const ip=initialprice.value;
    const quan=stocksquantity.value;
    const cur=currentprice.value;
    if(ip=="" || quan=="" || cur==""){
        outputbox.style.color="red";
        outputbox.innerText="Please fill the empty fields."
    }
    else if(ip<=0 || quan<=0 || cur<=0){
        outputbox.style.color="red";
        outputbox.innerText="Enter values greater than 0."
    }
    else{
        calculateProfitAndLoss(ip,quan,cur);
    }
    
    //OUTPUT HANDLED Comment
}
resultbtn.addEventListener('click',outputHandler);