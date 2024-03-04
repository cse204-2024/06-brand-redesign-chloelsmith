let day = 29;
day++;
let month = 2;
console.log(day, month);
day = day - 7;
alert(day,month);
let due_date_object = {
    day: 29,
    month: 2,
    class: "cse204",
}

function debug_var(variable ,alert){
    if (alert){
        alert(variable);
    }
    else{
        console.log(variable);

    }
    
}
debug_var(due_date_object)