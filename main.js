const arr=[1,2,3,4,5,6,7,8,9,10,14,42,4,76,85,85,5,5,5,9,6,5,4,3,2,1,7,8,77,100,64]
const but1=document.querySelector(`#but1`)
const but2=document.querySelector(`#but2`)
const but3=document.querySelector(`#but3`)
const but4=document.querySelector(`#but4`)
const display=document.querySelector(`#display`)

but1.addEventListener(`click`,(evt)=>{
    display.innerHTML=''
    evt.preventDefault()
    arr.forEach((wartosc,indeks)=>{
        display.innerHTML+=`<p>Indeks:${indeks}, Wartość ${wartosc}</p>`
    })
})
but2.addEventListener(`click`,evt=>{
    display.innerHTML=''
    evt.preventDefault()
    array=arr.map((wartosc)=>{
        wartoscprzed=wartosc
        wartosc*=2
        display.innerHTML+=`Wartość ${wartoscprzed} * 2 = ${wartosc}</p>`
    })
})
but3.addEventListener(`click`,evt=>{
    display.innerHTML=''
    evt.preventDefault()
    array=arr.filter(function(wartosc){
        return wartosc%2===0
    })
    array.forEach((wartosc,indeks)=>{
        display.innerHTML+=`<p>Wartosci parzyste: indeks ${indeks}: wartość: ${wartosc}</p>`
    })
})
but4.addEventListener(`click`,evt=>{
    display.innerHTML=''
    evt.preventDefault()
    suma=arr.reduce( function(suma,wartosc){
        return suma+wartosc
    })
    display.innerHTML=`<p>Suma wszystkich elementow tablicy: ${suma}</p>`
})