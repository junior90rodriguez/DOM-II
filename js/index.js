// Your code goes here
const button = document.querySelectorAll('.btn');
button.forEach(function(element){
    element.addEventListener('dblclick', function(e){
        console.log('Sign Me Up!')
        e.target.style.background = 'red';
    })
})


const input = document.querySelectorAll('p');
input.forEach(function(element){
    element.addEventListener('mouseover', function(e){
        console.log('Moused over')
        e.target.style.color = 'blue';
    })
    input.forEach(function(element){
        element.addEventListener('mouseleave', function(e){
            console.log('Moused leave')
            e.target.style.color = '';
        })
    })
        
    })



