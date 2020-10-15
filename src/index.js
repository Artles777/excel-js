import './styles/index.sss'

console.log('New app')
async function start() {
    return await Promise.resolve('async working')
}

start().then(console.log)
