const enterBurgerFormEl = document.querySelector('#enterBurgerForm');
const burgerFormInput = document.querySelector('#burgerInput');
const devoureBtnEls = document.querySelectorAll('.change-devoured');

enterBurgerFormEl.addEventListener('submit', (e)=> {
    e.preventDefault();
    const burgerData = {
        name: burgerFormInput.value
    };
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(burgerData)
    }).then(()=> {
        burgerFormInput.value = '';
        console.log('Burger added');
        location.reload()
    });
});

devoureBtnEls.forEach(button => {
    button.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        const devouredState = {
            devoured: true,
        };
        fetch(`/api/burgers/${id}`,{
            method: 'PUT',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(devouredState),
        }).then(response => {
            if(response.ok) {
                console.log('state have been changed');
                setTimeout(()=> {
                    location.reload();
                },2000)
            } else {
                alert('Something went wrong');
            }
        });
    });
});
