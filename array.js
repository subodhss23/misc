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

// getting index
function getIndex(index){
    console.log(newarr[index]);
}

// remove element from array
function deleteElem(element){
    if(newarr === null){
        console.log('no elements');
    } else{
       newarr = newarr.filter(x => x !== element);
        }
}


function length(){
    console.log(`The length of this array is ${newarr.length}`);
}


function search(data){
    for(let i = 0; i < newarr.length; i++){
        if(data === newarr[i]){
            const indexofData = newarr.indexOf(data);
            console.log(`The index of ${data} is ${indexofData}`);
            break;
        } 
    }
    console.log(`The ${data} is not found in our array, try again!`);
}


createArray(1);
createArray(2);
read();
addElem(22);
addElem(99);
read();
deleteElem(2);
read();
getIndex(1);
length();
search(100);