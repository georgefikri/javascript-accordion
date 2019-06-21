(function(){

/*******************VARS***************************/
let objectCont , objectLength , mainDiv , i , j , k , subCont , subDiv1 , subDiv2,
subDivID1 , subDivID2 , subDivCont1 , subDivCont2;


// main object
objectCont = [
    {
        title: 'header 1',
        description: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
        title: 'header 2',
        description: 'It is a long established fact that a reader '
    },
    {
        title: 'header 3',
        description: 'Various versions have evolved over the years'
    },
    {
        title: 'header 4',
        description: 'more recently with desktop publishing software like Aldus PageMaker including'
    }
];


//object length
objectLength = objectCont.length;


// main div
mainDiv = document.getElementById('accCont');

j = 0;
k = 0;
let l = 0;
let a = 1;

for(i = 0 ; i < objectLength; i++){
    subCont = document.querySelector('div#acc' + i);
    
    subDiv1 = document.createElement('div');
    subDivID1 = subDiv1.setAttribute('id' , 'data' + j++);
    subDivCont1 = document.createTextNode(objectCont[i].title);
    subDiv1.appendChild(subDivCont1);
    subCont.appendChild(subDiv1);

    subDiv2 = document.createElement('div');
    subDiv2.setAttribute('class' ,'hide')
    //subDivID2 = subDiv1.setAttribute('id' , 'data' + j++);
    subDivCont2 = document.createTextNode(objectCont[i].description);
    subDiv2.appendChild(subDivCont2);
    subCont.appendChild(subDiv2);

}

for(let b = 0 ; b < objectLength ; b++){
    let header  = document.querySelector("div#acc" + b);
    header.addEventListener('click', abc);
    function abc(){
        let getDivs = function(header){
            let sliderEmArr = [];
            let sibling = header.parentNode.firstChild;
            if(!header.classList.contains('active')){
                header.setAttribute('class' , 'active');
            } else {
                header.removeAttribute('class');
            }
            while(sibling) {
                if(sibling.nodeType === 1 && sibling !== header) {
                    sliderEmArr.push(sibling);
                    if(sibling.classList.contains('active')){
                        sibling.removeAttribute('class');
                    }
                }
                sibling = sibling.nextSibling;
            }   
            return sliderEmArr;
        }
        let siblings = getDivs(header);
    }

}



})();
