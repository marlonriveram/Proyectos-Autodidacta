const container = document.querySelector('.container');



window.addEventListener('scroll',() =>{
    const { clientHeight,scrollHeight,scrollTop } = document.documentElement;

    clientHeight + scrollTop > scrollHeight - 4 && setTimeout(createBox,3000);
    document.querySelector('.inactive').classList.add
})

function createBox () {
    // const box = document.createElement('div');
    // box.className = 'box';
    // container.append(box)
    // document.querySelector('.inactive').className = ''
}


