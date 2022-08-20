// setep-1 button add korte hbe
document.getElementById('deposid-btn').addEventListener('click', function(){
      //  step= 2 input gulu add korte hbe
      const deposidfiled = document.getElementById('deposid-id');
      const Newdeposidamountstring = deposidfiled.value;
     const Newdeposidamount =parseFloat(Newdeposidamountstring);
   
    


      //  step=3 input valu as tag id diye dorte hbe
      const deposidelement = document.getElementById('deposid-bln');
      const previousDeposiTottalstring = deposidelement.innerText;
      const previousDeposiTottal = parseFloat(previousDeposiTottalstring);

      // step-4 total deposid balance
      const deposidTottalBalance = previousDeposiTottal + Newdeposidamount ;
      

      // step-5 2nd step ar valu set korte hbe
      deposidelement.innerText= deposidTottalBalance;

      

      // *****clear deposid filed****
      deposidfiled.value= '';

      
})