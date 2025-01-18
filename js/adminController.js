

class AdminController {


    constructor(btnEditar = ".editar", menu = ".modal_editar_user") {

        this.menuEditar(btnEditar, menu);
        this.menuDrop()
        this.avatar()
    }

    menuDrop() {
        const btn_nav_perfil = document.querySelector(".btn_nav_perfil")
        const menu_drop = document.querySelector(".menu_drop")

        btn_nav_perfil.addEventListener("click", (e) => {
            menu_drop.classList.toggle("hide")
        })
    }


    menuEditar(btn, modal) {
        const btnEditar = document.querySelector(btn)
        const modalEditar = document.querySelector(modal)

        btnEditar.addEventListener("click", (e) => {
            modalEditar.classList.remove("hide")
        })

        const btnAtualizar = modalEditar.querySelector(".btn_atualizar")

        btnAtualizar.addEventListener("click", (e) => {
            e.preventDefault()
            const dataForm = new FormData(modalEditar.querySelector("form"))

            const data = Object.fromEntries(dataForm)


            modalEditar.classList.add("hide")
        })

        const btnCancelar = modalEditar.querySelector(".cancelar_red")
        btnCancelar.addEventListener("click", (e) => {
            e.preventDefault()
            modalEditar.classList.add("hide")

        })
    }

    avatar() {
        const fake_input_file = document.querySelector(".fake_input_file")
        const input_avatar = document.querySelector(".input_avatar")

        fake_input_file.addEventListener("click", () => {
            input_avatar.click()
        })

        input_avatar.addEventListener("change", (e) => {
            const fileReader = new FileReader()
            const imagemBlob = e.target.files[0]
            const filter_fake_input_file = document.querySelector(".filter_fake_input_file")

            fileReader.addEventListener("load", (even) => {
                const imagemBase64 = even.target.result

                filter_fake_input_file.style.background = 'transparent'

                fake_input_file.querySelector("img").src = imagemBase64
            })

            fileReader.readAsDataURL(imagemBlob)
        })
    }

}

new AdminController()