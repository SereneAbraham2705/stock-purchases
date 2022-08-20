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
        outputbox.innerText="Hey the loss is "+loss+" and the loss percentage is "+losspercentage+" %";
    }
    else if(initial<current){
        const profit=(current-initial)*quantity;
        const profitpercentage=(profit/initial)*100;
        //const resans2=toFixed(profitpercentage);
        outputbox.innerText="Hey the loss is "+profit+" and the loss percentage is "+profitpercentage+" %";
    }
    else{
        outputbox.innerText="Neither Profit nor Loss!";
    }

}

function outputHandler(){
    const ip=initialprice.value;
    const quan=stocksquantity.value;
    const cur=currentprice.value;
    calculateProfitAndLoss(ip,quan,cur);
    //OUTPUT HANDLED
}
resultbtn.addEventListener('click',outputHandler);