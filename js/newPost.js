

class NewPostController {


    constructor() {

        this.menuDrop();

    }

    menuDrop() {
        const btn_nav_perfil = document.querySelector(".btn_nav")
        const menu_drop = document.querySelector(".menu_drop")

        btn_nav_perfil.addEventListener("click", (e) => {
            menu_drop.classList.toggle("hide")
        })
    }


}

new NewPostController()