const promise = new Promise((resolve,reject) => {
    const numer = Math.floor(Math.random() * 10);

    setTimeout(() =>{
        console.log(numer);
        if(numer > 5)
         resolve(numer)
        else
        reject(new Error('menor a 5'))
    }, 1000);
});

promise
.then(numer => console.log(numer))
.catch(error => console.error(error));