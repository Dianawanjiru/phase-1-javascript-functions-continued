// code your solution here
function saturdayFun (string = "roller-skate" ) {
    return `This Saturday, I want to ${string}!`
} 
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork (action = "go to the office"){
    return `This Monday, I will ${action}.`
}
mondayWork();
mondayWork("work from home");

function wrapAdjective (adjectives = '*'){
    return function (inner = "special"){
        


      return `You are ${adjectives} ${inner} ${adjectives}!` 


    };
}
wrapAdjective()();