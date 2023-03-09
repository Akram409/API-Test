function test()
{
    console.log("test")
}

const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => show(data))

}

const show = info =>{
    const container = document.getElementById('all-container')
    info.forEach(temp => {
        console.log(temp.flags.png)
        const divs = document.createElement('div')
        divs.classList.add('temp')
        divs.innerHTML = `
            <h3>Name: ${temp.name.common}</h3>
            <h3>Capital: ${temp.capital}</h3>
            <button onclick="Display_detail('${temp.cca2}')">Details</button>
        `
        container.appendChild(divs)
    })
}

const Display_detail= code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => shows(data[0]))
}

const shows = text => {
    const suii = document.getElementById("show_details")
    suii.innerHTML = `
        <h3>Name: ${text.name.common}</h3>
        <img src ="${text.flags.png}">
    `
}

loadData()



