const navigationBtn = document.getElementById('header-button');
const sectionB = document.querySelector('#section-b-p-1-img');
const sectionC = document.querySelector('.section-c');
const footer = document.querySelector('.footer');
const hambugger = document.getElementById('hambugger');
const hambuggerOne = document.getElementById('hambugger-1');
const hambuggerTwo = document.getElementById('hambugger-2');
const hambuggerThree = document.getElementById('hambugger-3');
const navUl = document.getElementById('nav-ul');
const main = document.querySelector('.main');
const docBody = document.getElementsByTagName('body');


console.log(docBody);

// navigationBtn.addEventListener('click', ()=>{
//     footer.style.display = 'block';
//     sectionC.style.display = 'block';
//     sectionB.style.display = 'block';
// })


let goTop = document.querySelector('.top-div'),
        body = document.body,
        docElem = document.documentElement,
        offset = 200,
        scrollPos,
        docHeight,
        agents = ['safari', 'firefox', 'chrome'],
        isChrome = navigator.userAgent.toLowerCase().indexOf(agents[0, 1, 2]) > -1;



//Calculate document height

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
    if(docHeight != 'undefined') {
        offset = docHeight  / 4; 
    }

//Add scroll event listener

window.addEventListener('scroll', function(){
    scrollPos = body.scrollTop || docElem.scrollTop;
    
    (scrollPos > offset) ? goTop.style.opacity = '1' : goTop.style.opacity = '0' ;
});

// Add click event to go top

    goTop.addEventListener('click', function(){
        event.preventDefault();
        
        if(isChrome){
            docElem.scrollTop = 0;
        }else{
            body.scrollTop = 0;
        }
    })


// function users(){
//     for(i = 0; i < agents.length; i++)
//         console.log(agents[i]);
    
// };

// users();

// const options = {
//     root: null,
//     threshold: 0,
//     rootMargin: "-150px"
//  };

// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         }

//     })
// }, options)

// observer.observe(sectionB);






//    Toggle Hambugger

hambugger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
    hambuggerOne.classList.toggle('cross');
    hambuggerThree.classList.toggle('crosser');
    (hambuggerTwo.style.display === 'none') ? hambuggerTwo.style.display = 'block': hambuggerTwo.style.display = 'none';
    docBody.classList.toggle('ham');
})

window.onLoad(() => {
    
})
