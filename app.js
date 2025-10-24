const inputName = document.getElementById('inputName')
const inputAnimal = document.getElementById('inputAnimal')
const inputAge = document.getElementById('inputAge')
const inputRaza = document.getElementById('inputRaza')
const inputEstado = document.getElementById('inputEstado')

const btnSave = document.getElementById('btnSave')
const btnRemove = document.getElementById('btnRemove')

btnSave.addEventListener('click', () =>{
    const Name = inputName.value;
    const Animal = inputAnimal.value;
    const Age = inputAge.value;
    const Raza = inputRaza.value;
    const Estado = inputEstado.value;

    const borradorMascota ={
        Name: Name,
        Animal,
        Age,
        Raza,
        Estado
    }

    console.log(borradorMascota);
    const jsonString = JSON.stringify(borradorMascota);
    console.log(jsonString)
    localStorage.setItem('borradorMascota', jsonString)

});

btnRemove.addEventListener('click', ()=>{
    localStorage.removeItem('borradorMascota');
    
});

// document.addEventListener('DOMContentLoaded',()=>{
//     const dataLocal = localStorage.getItem('borradorMascota');
//     if(dataLocal){
//         console.log('Hay datos  en localStore');
//         console.log(dataLocal);
//         const borradorMascotax = JSON.parse(dataLocal);
//         console.log('DAtos parceados');;
//         console.log(borradorMascotax);
//         console.log(borradorMascotax.Name);
//         inputName.value = borradorMascotax.Name
//         inputAnimal.value = borradorMascotax.Animal
//         inputAge.value = borradorMascotax.Age
//         inputRaza.value = borradorMascotax.Raza
//         inputEstado.value = borradorMascotax.Estado
//     }
// });

document.addEventListener('DOMContentLoaded',()=>{
    const dataLocal = localStorage.getItem('borradorMascota');
    if(dataLocal){
        const borradorMascotax = JSON.parse(dataLocal);
        inputName.value = borradorMascotax.Name
        inputAnimal.value = borradorMascotax.Animal
        inputAge.value = borradorMascotax.Age
        inputRaza.value = borradorMascotax.Raza
        inputEstado.value = borradorMascotax.Estado
    }
});

