const log = document.querySelector('#log') as HTMLElement
const username = document.querySelector('#username') as HTMLInputElement

log.innerHTML = ''
username.addEventListener('keyup', (e: Event) => {
log.innerHTML = (e.target as HTMLInputElement).value
})

console.log(log.innerHTML)
console.log(username.value)


