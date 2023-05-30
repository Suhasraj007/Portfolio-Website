document.addEventListener('readystatechange',(event)=>{
    if (event.target.readyState === 'complete') {
        console.log('readyState: complete');
        initApp();
    }
})

const initApp = () => {
    const project = document.querySelector('#projects');
    const view = document.querySelector('.header__nav--extender')
    project.addEventListener('mouseover', (event) =>{
        view.style.display = 'block';
    } )
    view.addEventListener('mouseover', (event) =>{
        view.style.display = 'block'; 
    } )
    view.addEventListener('mouseout', (event) =>{
        view.style.display = 'none';
    } )
}