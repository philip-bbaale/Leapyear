var year;
function finder(){
 year = parseInt(document.getElementById("year_input").value);
 if (year.length =4) {
    if(year%100==0 && year%400==0){
        document.getElementById('list').innerHTML=("Leap Year");
    }
    else if(year%4==0 ){
        document.getElementById('list').innerHTML=("Leap Year");
    }
    else {
        document.getElementById('list').innerHTML=("Not Leap Year");
    }
}  
else{
    alert("Wrong year");
}
}

