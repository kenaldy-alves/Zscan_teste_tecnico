const PromiseFunction = async () => {
    await function1()
    await function2()
}

const function1 = () => setTimeout(() => console.log('Function1 Complete'), 5000)
const function2 = () => setTimeout(() => console.log('Function2 Complete'), 1000)