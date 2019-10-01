let newarr = [];

// create an array or add element on an array
function createArray(num){
    newarr[newarr.length] = num;
}

// adding elements on the array
function addElem(elem){
    newarr[newarr.length] = elem;
}


// traversing through the array
function read(){
    console.log(newarr);
}




createArray(1);
createArray(2);
read();
addElem(22);
addElem(99);
read()
