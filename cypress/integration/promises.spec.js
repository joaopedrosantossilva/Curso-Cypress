const { Promise } = require("cypress/types/bluebird")

it('promises', () => { })
/*
const getSomething = callback => {
    setTimeout(()=> {
        callback(12)
    },1000)
}
*/

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12)
        }, 1000)
    })
    
}

const system = () => {
    console.log('init')
    const prom = getSomething
    prom.then(some => { 
        console.log(`Something is ${some}`)
        console.log('end')
    })
}

system()