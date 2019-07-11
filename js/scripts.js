var listOfIngridients = [{ id : 1, ingridientName : "Brazilian", procentage : 0, isAdded : false}, 
                         { id : 2, ingridientName : "Pecan", procentage : 0, isAdded : false}, 
                         { id : 3, ingridientName : "Macadamia", procentage : 0, isAdded : false}, 
                         { id : 4, ingridientName : "Hazel", procentage : 0, isAdded : false}];

function add1(listOfIngridients){
    if (this.listOfIngridients[0].isAdded) {
        console.log(this.listOfIngridients[0].isAdded);
    } else {
       this.listOfIngridients[0].isAdded = true;
       console.log(this.listOfIngridients[0].isAdded);
    } 
};
function remove1(listOfIngridients) {
    console.log('- button pressed');
    if (this.listOfIngridients[0].isAdded) {
        this.listOfIngridients[0].isAdded = false;
    } else {
    }
}
function add2(listOfIngridients){
    if (this.listOfIngridients[1].isAdded) {
        console.log(this.listOfIngridients[1].isAdded);
    } else {
       this.listOfIngridients[1].isAdded = true;
       console.log(this.listOfIngridients[1].isAdded);
    } 
};
function remove2(listOfIngridients) {
    console.log('- button pressed');
    if (this.listOfIngridients[1].isAdded) {
        this.listOfIngridients[1].isAdded = false;
    } else {
    }
}
function add3(listOfIngridients){
    if (this.listOfIngridients[2].isAdded) {
        console.log(this.listOfIngridients[2].isAdded);
    } else {
       this.listOfIngridients[2].isAdded = true;
       console.log(this.listOfIngridients[2].isAdded);
    } 
};
function remove3(listOfIngridients) {
    console.log('- button pressed');
    if (this.listOfIngridients[2].isAdded) {
        this.listOfIngridients[2].isAdded = false;
    } else {
    }
}
function add4(listOfIngridients){
    if (this.listOfIngridients[3].isAdded) {
        console.log(this.listOfIngridients[3].isAdded);
    } else {
       this.listOfIngridients[3].isAdded = true;
       console.log(this.listOfIngridients[3].isAdded);
    } 
};
function remove4(listOfIngridients) {
    console.log('- button pressed');
    if (this.listOfIngridients[3].isAdded) {
        this.listOfIngridients[3].isAdded = false;
    } else {
    }
}
console.log(listOfIngridients);
function generateOrder(listOfIngridients) {
    var arrays = [];
    this.listOfIngridients.forEach(element => {
        if(element.isAdded) {
           var finalIngridient = new Object();
           finalIngridient.name = element.ingridientName;
           arrays.push(finalIngridient.name);
           console.log(arrays);
        }else{
        }
    });
    arrays.forEach(key=> {
        $('#display_area').append(`<p>${key}</p>`)
    })
}
