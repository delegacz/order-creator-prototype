var listOfIngridients = [{ id : 1, ingridientName : "Brazilian", procentage : 0, isAdded : false}, 
                         { id : 2, ingridientName : "Pecan", procentage : 0, isAdded : false}, 
                         { id : 3, ingridientName : "Macadamia", procentage : 0, isAdded : false}, 
                         { id : 4, ingridientName : "Hazel", procentage : 0, isAdded : false}];

function add1(){
    if (this.listOfIngridients[0].isAdded) {
    } else {
       this.listOfIngridients[0].isAdded = true;
       $('#ing1 label').addClass('added');
    } 
};
function remove1() {
    if (this.listOfIngridients[0].isAdded) {
        this.listOfIngridients[0].isAdded = false;
        $('#ing1 label').removeClass('added');
    } else {
    }
    
}
function add2(){
    if (this.listOfIngridients[1].isAdded) {
    } else {
       this.listOfIngridients[1].isAdded = true;
       $('#ing2 label').addClass('added');
    } 
};
function remove2() {
    if (this.listOfIngridients[1].isAdded) {
        this.listOfIngridients[1].isAdded = false;
        $('#ing2 label').removeClass('added');
    } else {
    }
}
function add3(){
    if (this.listOfIngridients[2].isAdded) {
    } else {
       this.listOfIngridients[2].isAdded = true;
       $('#ing3 label').addClass('added');
    } 
};
function remove3() {
    if (this.listOfIngridients[2].isAdded) {
        this.listOfIngridients[2].isAdded = false;
        $('#ing3 label').removeClass('added');
    } else {
    }
}
function add4(){
    if (this.listOfIngridients[3].isAdded) {
    } else {
       this.listOfIngridients[3].isAdded = true;
       $('#ing4 label').addClass('added');
    } 
};
function remove4() {
    if (this.listOfIngridients[3].isAdded) {
        this.listOfIngridients[3].isAdded = false;
        $('#ing4 label').removeClass('added');
    } else {
    }    
}
function generateOrder() {
    $('#display_area').html(``)
    var arrays = [];
    this.listOfIngridients.forEach(element => {
        if(element.isAdded) {
           var finalIngridient = new Object();
           finalIngridient.name = element.ingridientName;
           arrays.push(finalIngridient.name);
        }else{
        }
    });
    arrays.forEach(key=> {
        $('#display_area').append(`<p>${key}</p>`)
    })
}
