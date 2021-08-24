class Header extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <!--Main logo with text (top left corner of website) -->
                <div class="main-logo">
                    <a href="index.html">
                        <img src="assets/icon/favicon.ico" alt="Track My Stock! logo">
                        <h1>Track My Stock!</h1>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li class="nav-item">Home</li>
                        <li class="nav-item">Source code</li>
                        <li class="nav-item">App</li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header)