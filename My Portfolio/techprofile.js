const sections = document.querySelectorAll('section');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let index = 0;
const smoothScrollButton = document.getElementById('smooth-button');
const sectionScrollButton = document.getElementById('section-button');
const main = document.querySelector('.main');



// const animateSection = (index, state) => {
//     if(state === 'show'){
//         sections.forEach(section, i)
//     }
// }


nextButton.addEventListener('click', () => {
   index++;
   if(index > 7){
       return;
   }
   sections.forEach((sections, i) => {
    if(i === index){
       sections.scrollIntoView({behavior: 'smooth'});
    }
   })
})

prevButton.addEventListener('click', () => {
    index--;
    if(index > 1){
        return;
    }
    sections.forEach((sections, i) => {
        if(i === index){
        sections.scrollIntoView({behavior: 'smooth'});
    }
    })
 })

 smoothScrollButton.addEventListener('click', () => {
    //  if(main.style.overflow = 'hidden'){
    //     main.style.overflow = 'scroll';
    //  }
    //  if(main.classList === 'show'){
    //      sectionScrollButton.style.display = 'none';
    //  }

    main.classList.toggle('show');
 }) 

//  console.log(main);
//  console.log(smoothScrollButton);
