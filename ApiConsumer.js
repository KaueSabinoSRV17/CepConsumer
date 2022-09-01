const input = document.querySelector('.cep')
input.value = input.value === '' ? '13311350' : ''

document.querySelector('button').addEventListener('click', async () => {
    const cep = input.value
    const address = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    const div = document.createElement('div')
    div.style.display = 'flex'
    div.style.flexWrap = 'wrap'
    div.style.gap = '1rem'
    div.style.width = '100%'
    div.style.margin = '2rem auto 0 auto'
    document.body.appendChild(div)
    Object.keys(address).forEach(campo => {
        const newInput = document.createElement('input')
        const label = document.createElement('label')
        label.innerText = campo
        newInput.value = address[campo]
        div.appendChild(label)
        div.appendChild(newInput)
    })
    console.log(address)
})

