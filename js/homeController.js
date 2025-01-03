
class HomeController {

    constructor() {

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

    console.log(result);

})()





    < h1 > <strong>Projeto Node.js Automatizado</strong></h1 >
<p>Este projeto automatiza a criação de uma estrutura de servidor Node.js com Express, configurando pastas, arquivos, e dependências essenciais de forma automática.</p>
<hr>
<h2><strong>Pré-requisitos</strong></h2>
<p>Certifique-se de ter as seguintes ferramentas instaladas:</p>
<ul>
<li><a href="https://nodejs.org/">Node.js</a> (versão 14 ou superior)</li>
<li><a href="https://www.npmjs.com/">npm</a> (instalado junto com o Node.js)</li>
</ul>
<hr>
<h2><strong>Como usar</strong></h2>
<h3><strong>1. Clone ou copie o projeto</strong></h3>
<pre><code class="language-bash">git clone &lt;url_do_repositorio&gt;
cd &lt;nome_do_projeto&gt;
</code></pre>
<h3><strong>2. Execute o script inicial</strong></h3>
<p>No terminal, execute:</p>
<pre><code class="language-bash">node app.js
</code></pre>
<p>Esse comando criará automaticamente a estrutura do projeto, arquivos iniciais e instalará as dependências.</p>
<hr>
<h2><strong>Estrutura do Projeto</strong></h2>
<p>Após rodar o script, a seguinte estrutura será gerada:</p>
<pre><code>.
├── .gitignore
├── ormConfig.js
├── package.json
├── src
│   ├── config
│   ├── database
│   │   └── migrations
│   ├── error
│   │   └── AppError.js
│   ├── middlewares
│   ├── modules
│   │   └── exempleAccounts
│   │       ├── dtos
│   │       ├── entities
│   │       ├── repositories
│   │       └── useCases
│   ├── routes
│   │   └── index.js
│   ├── server.js
│   ├── utils
└── .env
</code></pre>
<hr>
<h2><strong>Configurações</strong></h2>
<h3><strong>1. Configurar variáveis de ambiente</strong></h3>
<p>Edite o arquivo <code>.env</code> com as informações do banco de dados:</p>
<pre><code class="language-env">TYPEORM_CONNECTION=postgres
TYPEORM_PORT=5432
TYPEORM_DATABASE=nome_do_banco
TYPEORM_HOST=localhost
TYPEORM_USERNAME=usuario
TYPEORM_PASSWORD=senha
TYPEORM_MIGRATIONS=./src/database/migrations
TYPEORM_ENTITIES=./src/modules/exempleAccounts/entities/*.ts
</code></pre>
<h3><strong>2. Configurar o TypeORM</strong></h3>
<p>O arquivo <code>ormConfig.js</code> é gerado automaticamente com a seguinte configurações padrão:</p>
<pre><code class="language-javascript">import &quot;reflect-metadata&quot;
import { DataSource } from &quot;typeorm&quot;

export const AppDataSource = new DataSource({
    type: &quot;postgres&quot;,
    host: &quot;localhost&quot;,
    port: 5432,
    username: &quot;usuario&quot;,
    password: &quot;senha&quot;,
    database: &quot;nome_do_banco&quot;,
    entities: [&quot;./src/modules/exempleAccounts/entities/*.ts&quot;],
    migrations: [&quot;./src/database/migrations/*.ts&quot;],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() =&gt; console.log(&quot;Data source inicializado&quot;))
</code></pre>
<hr>
<h2><strong>Comandos Disponí­veis</strong></h2>
<h3><strong>Iniciar o servidor</strong></h3>
<p>Para iniciar o servidor com recarregamento automático: </p>
<pre><code class="language-bash">npm run dev
</code></pre>
<hr>
<h2><strong>Endpoints</strong></h2>
<h3><strong>GET /</strong></h3>
<p>Rota principal que retorna uma mensagem de boas-vindas:</p>
<ul>
<li><strong>URL:</strong> <code>http://localhost:2908/</code></li>
<li><strong>Resposta:</strong><pre><code class="language-json">{
    &quot;message&quot;: &quot;Hello World&quot;,
    &quot;statusCode&quot;: 200
}
</code></pre>
</li>
</ul>
<hr>
<h3><strong>Porta em uso</strong></h3>
<p>Se a porta <code>2908</code> estiver em uso, altere-a no arquivo <code>src/server.js</code>:</p>
<pre><code class="language-javascript">app.listen(3000, &quot;localhost&quot;, () =&gt; console.table({ URL: &quot;http://localhost:3000/&quot; }));
</code></pre>
<h3><strong>Author</strong></h3>
<p> <a href="https://bernardinoleite.netlify.app">Bernardino Leite</a> </p>
<img src="https://bernardinoleite.netlify.app/perfil.JPG" width="100" ></img>