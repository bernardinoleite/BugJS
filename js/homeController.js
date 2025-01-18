
class HomeController {

    constructor() {
        this.eachPost()
        this.menuDrop()
    }

    menuDrop() {
        const btn_nav_perfil = document.querySelector(".btn_nav_perfil")
        const menu_drop = document.querySelector(".menu_drop")

        btn_nav_perfil.addEventListener("click", (e) => {
            menu_drop.classList.toggle("hide")
        })
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


    async readFile(path) {
        const text = await fetch(path)
        const result = await text.text()
        return result
    }

    async convertFileMdToHtml(path) {

        const markedown = await this.readFile(path)
        const html = marked.parse(markedown)

        return html
    }

}



; (async () => {

    const controller = new HomeController()

    const result = await controller.convertFileMdToHtml("./../README.md")


})()
