var check=false;

window.onload=function main(){

    check=true;

    console.log("check status:"+check);
    
    try {
        
        document.getElementById("togglebutton").addEventListener("click", function(){
            
            document.getElementsByClassName('calculatorcontainer')[0].classList.toggle("darkthema");

            var buttoncountcount = document.querySelectorAll('input[type="button"]').length;
           
            console.log(buttoncountcount);

            for (let index = 0; index < buttoncountcount; index++) {
               
                document.getElementsByClassName('darkthema_calcbtn')[index].classList.toggle("darkthema");
                
                
            }
        });

    } 
    catch (error) {
        console.log(error);
    }
}







function buttonclick(clicknumber){

    try {
        
        var word= document.getElementById('t').value;

        document.getElementById('t').value+=clicknumber.value;
        
        
        console.log(parseInt(clicknumber.value));
        
        
       
    } 
    catch (error) {
        console.log(error);
    }

    
    
}

function buttonclicknthroot(clicknumber){
    
    try {
        
        var word= document.getElementById('t').value;

        
        

        var pow= Math.pow(document.getElementById('t').value,1/2);
        
        document.getElementById('t').value=pow;
        
        console.log(parseInt(  document.getElementById('t').value));
        
        
       
    } 
    catch (error) {
        console.log(error);
    }
}

function calc(){

    document.getElementById('t').value=eval(  document.getElementById('t').value);
}

function cleartext(){
    document.getElementById('t').value = null;
}



function buttonclickpercent(){
    
    try {
        

        

        var percent= document.getElementById('t').value/100;
        
        document.getElementById('t').value=percent;
        
        console.log(parseInt( percent));
        
        
       
    } 
    catch (error) {
        console.log(error);
    }
}

function removelastlick(){
    
    try {
        

        

      
        

        document.getElementById('t').value=  document.getElementById('t').value.substring(0, document.getElementById('t').value.length - 1);
        
        console.log(parseInt(   document.getElementById('t').value));
        
        
       
    } 
    catch (error) {
        console.log(error);
    }
}


function calc(){

    document.getElementById('t').value=eval(  document.getElementById('t').value);
}

function cleartext(){
    document.getElementById('t').value = null;
}





// var clickcount=0;minplusinput

// var whichButton = function (e) {
//     // Handle different event models
//     var e = e || window.event;
//     var btnCode;

//     clickcount++;

//     if ('object' === typeof e) {
//         btnCode = e.button;

//         switch (btnCode) {
//             case 0:

//                 if(clickcount%2==0){
//                     document.getElementById('minplusinput').value="+";
                    
//                     console.log('Left button clicked. Select: + ');
//                 }

//                 else{
//                     document.getElementById('minplusinput').value="-";
                    
//                     console.log('Left button clicked. Select: - ');
//                 }
     
//             break;

//             case 1:
                
//                 console.log('Middle button clicked.');
//             break;

//             case 2:

//                 console.log('Right button clicked.');
//             break;

//             default:
//                 console.log('Unexpected code: ' + btnCode);
//         }
//     }
// }


function unique(str) {
    var result = '';
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) < 0) {
        result += str[i];
      }
    }
    return result;
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}




  