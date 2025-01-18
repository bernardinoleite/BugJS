

class PerfilController {

    constructor() {
        this.menuDrop()
        this.btn_editar()
        this.menuEditar()
        this.avatar()
        this.modalEditPost()
        this.eachPost()
    }


    eachPost() {
        const posts = document.querySelectorAll(".row_post")

        posts.forEach(post => {
            post.addEventListener("click", (e) => {
                e.stopPropagation()
                const details = post.parentNode.querySelector(".bug_details")

                details.classList.toggle("hide")

            })
        })
    }


    modalEditPost(btn = ".editar", modal = ".modal_editar_post") {
        const btnEditar = document.querySelector(btn)
        const modalEditar = document.querySelector(modal)

        btnEditar.addEventListener("click", (e) => {
            e.stopPropagation()
            modalEditar.classList.remove("hide")
        })



        const btnCancelar = document.querySelector(".btn_cancelar")

        btnCancelar.addEventListener("click", (e) => {
            e.preventDefault()
            modalEditar.classList.add("hide")

        })
    }


    menuDrop() {
        const btn_nav_perfil = document.querySelector(".btn_nav")
        const menu_drop = document.querySelector(".menu_drop")

        btn_nav_perfil.addEventListener("click", (e) => {
            menu_drop.classList.toggle("hide")
        })
    }

    btn_editar() {
        const btn_editar = document.querySelector(".btn_editar")
        btn_editar.addEventListener("click", () => {

        })
    }


    menuEditar(btn = ".btn_editar", modal = ".modal_editar_user") {
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


new PerfilController()