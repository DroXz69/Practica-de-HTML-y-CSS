window.addEventListener('load', () => {

    fetch('http://inacap.cl')
    .then(()=>{
        console.log('resultado')
    })
    .then(()=>{})
    .then(()=>{})
    .catch(()=>{});

});

async function buscar() {
    await 123;
}