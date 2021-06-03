var salon={
    name: `The Fashion Pet`,
    phone: `555-555-5555`,
    address:{
        street:`University`,
        number:`187-k9`
    },
    hours:{
        open:`9:00 am`,
        close:`5:00 pm`
    },
    pets:[]
}

console.log(salon.pets);

var {name,phone,address:{street,number},hours:{open,close}}=salon;

function displayInfo(){
    document.getElementById(`information`).innerHTML=`
    <p>${name}, ${street} ${number} </p>
    <p>It is open from ${open} to ${close} </p>
    `;
}

//displayInfo();
//
//for(var i=0;i<salon.pets.length;i++){
//    console.log(salon.pets[i]);
//}
//document.getElementById(`pets`).innerHTML=` <p> <b> Name: </b> ${salon.pets[0].name} </p>`;
// create constructor

class Pet{
    constructor(name,age,breed,gender,service,owner,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=0;
    }
}
var scooby= new Pet("Scooby",50,"Dane","Male","hair","Shaggy","555-555-5555")
var speedy= new Pet("Speedy",80,"Mixed","Male","full","Bugs","555-555-5556")
salon.pets.push(scooby);
salon.pets.push(speedy);
displayCards(scooby);
displayCards(speedy);
// create the register funtion
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtBreed=document.getElementById('petBreed');
var txtGender=document.getElementById('petGender');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('contactPhone');

function register(){
    var thePet = new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value);
    if(txtName.value=="" || txtService.value==""){
        alert("Add the required information");
    }else{    
        console.log(thePet)
        salon.pets.push(thePet);
        console.log(salon.pets);
        document.getElementById(`total-pets`).innerHTML=`
        <p>Total Pets Registered: ${salon.pets.length}</p>
        `;
        clearInputs();
        displayCards(thePet);
        //display the obj on the HTML
    }
}
//counter of registered pets thus far.

functiion

function displayCards(aPet){
    if(aPet.service=="full"){
        aPet.price=40;
    }else if(aPet.service=="shower"){
        aPet.price=30;
    }else if(aPet.service=="nails"){
        aPet.price=10;
    }else if(aPet.service=="hair"){
        aPet.price=20;
    }
//document.getElementById('pets').innerHTML="";
// var tmp="";
//for(var i=0;i<salon.pets.length;i++){
// document.getElementById(`pets`).innerHTML+=

        tmp=`<div class="pet">
            <h3> Name: ${aPet.name} </h3>
            <p> Age: ${aPet.age},<p>
            <p> Breed: ${aPet.breed},<p>
            <p> Gender: ${aPet.gender},<p>
            <p> Service: ${aPet.service},<p>
            <p> Price: ${aPet.price},<p>            
            <p> Owner: ${aPet.owner},<p>
            <p> Phone: ${aPet.contactPhone},<p> 
        </div>       
        `;
        //console.log(tmp);
    //}
    document.getElementById('pets').innerHTML+=tmp;
    profitCalculation();
}
function salonPetCounter(){
    document.getElementById(salon.pets).innerHTML+=tmp;
}



function clearInputs(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}
profitCalculation();
function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById(`profits`).innerHTML=`Profits=$${sum}`;
}
//document.getElementById(`registered-pets-counter`).innerHTML=`Total pets Registed: ${petCount}`;


    //get the info from the inputs
    //create a generic object and pass the info as the parameters
    //push the generic object into the array
    // display the object on the HTML

////Challenge: Use the forEach to calculate the profits.