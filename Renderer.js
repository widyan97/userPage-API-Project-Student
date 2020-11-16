 class Renderer {
    constructor() {

    }
    renderUser(data) {
        // render data 
        const uc = $(`.user-container`)
        uc.empty();
        uc.append(`<img src="${data.profilePictureUrl}" >`) 
        uc.append(`<p>${data.firstName} ${data.lastName}</p>`)
        uc.append(`<p>${data.city} ${data.state}</p>`)
        const qc =  $(`.quote-container`)
        qc.empty();
        qc.append(`<p>${data.quote} </p>`)
         const pc=$(`.pokemon-container`);
         pc.empty();
         pc.append(`<p>${data.name} </p>`);
         pc.append(`<img src="${data.pokemonImage} " >`)
         const mc =  $(`.meat-container`)
         mc.empty();
         mc.append(`<p>${data.aboutMe} </p>`)
         const fc =  $(`.friends-container`)
         fc.empty();
         for(let i of data.friends){
            fc.append(`<p>${i.firstName} ${i.lastName}</p>`)

         }
    }
}