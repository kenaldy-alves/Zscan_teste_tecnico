const PromiseFunction = () => {
    function1()
    function2()
}

const function1 = () => new Promise(() => {
    setTimeout(() => console.log('Function1 Complete'), 5000)
})
const function2 = () => new Promise(() => {
    setTimeout(() => console.log('Function2 Complete'), 1000)
})