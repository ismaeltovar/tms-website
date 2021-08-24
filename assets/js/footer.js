class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-text">
                    <h3 class="copyright">Copyright &copy 2021 <a href="https://ismaeltovar.com/aboutme/" target="_blank">Ismael Tovar</a></h3>
                    <h3>Hosted using <a href="https://github.com/ismaeltovar/tms-website" target="_blank">Github Pages</a>.</h3>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);