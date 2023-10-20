

let numbers= document.querySelectorAll('.calification');
let button=document.getElementById('submitButton');





numbers.forEach( (number, index1)  => {
    number.addEventListener('click',() => {


        numbers.forEach((number, index2) => {
            index1 === index2 ? number.classList.add('whenclicked') : number.classList.remove('whenclicked');

        }
       
        ) 
    });

}
);


for (var i = 0; i<numbers.length; i++){
     numbers[i].addEventListener('click', function (selectedNumber) {

    
        let selectionText = document.getElementById('selection1').innerHTML='You selected ' + this.innerHTML + ' out of 5';
      

        function clicked(){
            document.getElementById('gridContent').innerHTML = document.getElementById('thankContent').innerHTML;
           
        }
        button.onclick=clicked;
     });
}
