displayCards();

function display(){
    for(var i=0;i<salon.pets.length;i++){
        document.getElementById(`pets`).innerHTML=""`
        <div calss="pet">
            <h3> ${salon.pets[i].name},</h3>
            <p> ${salon.pets[i].age},<p>
            <p> ${salon.pets[i].breed},<p>
            <p> ${salon.pets[i].gender},<p>
            <p> ${salon.pets[i].service},<p>
            <p> ${salon.pets[i].owner},<p>
            <p> ${salon.pets[i].contactPhone},<p>
        </div>
        `;
    }