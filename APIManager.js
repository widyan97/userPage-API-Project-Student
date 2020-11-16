//This is the class that will manage all your APIs

//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    loadUser() {
        const result = $.ajax({
            method: 'get',
            url: `https://randomuser.me/api/`,
            async: false
        });
        const response = JSON.parse(result.responseText)
        this.data["firstName"] = response.results[0].name.first;
        this.data["lastName"] = response.results[0].name.last;
        this.data["city"] = response.results[0].location.city;
        this.data["state"] = response.results[0].location.state;
        this.data["profilePictureUrl"] = response.results[0].picture.large;

    }

    loadFriends() {
        
           const result  =  $.ajax({
                method: 'get',
                url: `https://randomuser.me/api/?page=3&results=7`,
                async: false
            });
            const response = JSON.parse(result.responseText)
            this.data["friends"] = []
            for(let index of response.results ){
                this.data["friends"].push({firstName:index.name.first, lastName:index.name.last})
            }


        
    }
    loadPokemon() {
        const id = Math.floor(Math.random() * 100) + 1;
        const result = $.ajax({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            async: false
        });
        const response = JSON.parse(result.responseText)
        this.data["name"] = response.name;
        this.data["pokemonImage"] = response.sprites.other.dream_world.front_default;
    }
    loadBacon() {
        const result = $.ajax({
            method: 'get',
            url: 
            `https://baconipsum.com/api/?type=meat-and-filler`,
            async: false
        });
        const response = JSON.parse(result.responseText)
        this.data["aboutMe"] = response[0];


    }
    loadQuote() {
        const result = $.ajax({
            method: 'get',
            url: `https://api.kanye.rest/`,
            
            async: false
        });
        const response = JSON.parse(result.responseText)
        this.data["quote"] = response.quote;

    }
    loaddata(){
        this.loadUser()
        this.loadFriends()
        this.loadPokemon()
        this.loadBacon()
        this.loadQuote()
        // return this.data;

    }
getData(){
            return this.data;

}
}