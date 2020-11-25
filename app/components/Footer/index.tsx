export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <h3>Tesouro dos Fiéis</h3>
          <img src="../public/favicon.svg" width="50px" alt="Logo"></img>
        </div>
        <div>
          <ul>
            <li>
              <a
                title="Melhore a App"
                href="https://www.github.com/ofrades/tesourofieis"
              >
                <span data-icon="fa:pencil" data-inline="false"></span> Colabore
                através do{' '}
                <span data-icon="fa-brands:github" data-inline="false"></span>
              </a>
            </li>

            <li>
              <a title="Fale connosco" href="mailto:info@tesourofieis.com">
                <span data-icon="fa:envelope" data-inline="false"></span>{' '}
                Escreva-nos para info@tesourofieis.com
              </a>
            </li>

            <li>
              <a
                title="Facebook"
                target="gitter"
                href="https://facebook.com/tesourofieis"
              >
                <span data-icon="fa:users" data-inline="false"></span> Siga-nos
                no
                <span
                  data-icon="fa-brands:facebook-f"
                  data-inline="false"
                ></span>
              </a>
            </li>

            <li>
              <a
                title="Quer pagar o café?"
                target="buymeacoffee"
                href="https://www.buymeacoffee.com/SP41OgGsM"
              >
                <span data-icon="fa:coffee" data-inline="false"></span>{' '}
                Contribua pagando o café ou{' '}
                <span
                  data-icon="fa-solid:praying-hands"
                  data-inline="false"
                ></span>{' '}
                uma Ave Maria
              </a>
            </li>
          </ul>
        </div>

        <div>
          <blockquote>
            <p>Em Portugal se conservará sempre o dogma da Fé</p>
            <footer>Nossa Senhora de Fátima</footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
