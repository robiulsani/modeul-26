
// step-1 withdraw button dorte hbe
document.getElementById('whitdraw-btn').addEventListener('click',function(){
      // step-2 inpurt dorte hbe 

    const withdrawField = document.getElementById('withdraw');
      const newWithDrawAmountString =withdrawField.value;
      const newWithDrawAmount  = parseFloat(newWithDrawAmountString);
      
      
    
      //  step=3 input valu as tag id diye dorte hbe
      const withdrawTotalElemen= document.getElementById('withdraw-balance');
      const previousWithdrawTotalString = withdrawTotalElemen.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
     
// step-4 inout ar value & button last value gulu + korte hbe
      const currenWithdrawTotal =previousWithdrawTotal+newWithDrawAmount;
      // step-5
      withdrawTotalElemen.innerText=currenWithdrawTotal;

      // step-total setion
      const balanceTotalElement  =document.getElementById('total-ban');
      const lastbalancestig =balanceTotalElement.innerText;
      const lastbalance =parseFloat(lastbalancestig);

      // final balance 
      const newbalance =lastbalance-newWithDrawAmount;
      balanceTotalElement.innerText=newbalance;

      // input clear korte hbe
      withdrawinput.value ='';

      
})