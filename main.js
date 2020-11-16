class Controller {
    constructor() {
        this.api = new APIManager()
        this.render = new Renderer()

    }

    async loadUser() {
     this.api.loaddata()
      
    }
    displayUser(){
        const data =this.api.getData()
        this.render.renderUser(data)
    }
}


// event HAndler 
const controller = new Controller();
$('#loadUser').on('click', function () {
    controller.loadUser();

})
$('#displayUser').on('click', function () {
    controller.displayUser();

})