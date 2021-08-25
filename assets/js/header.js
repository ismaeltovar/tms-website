//Bootstrap icons are licenses under the MIT license. Link to license: https://github.com/twbs/icons/blob/main/LICENSE.md

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
                        <!-- Navbar navigation links -->
                        <li class="nav-item"><a href="#" target="_blank"><i class="bi bi-display"></i></a></li>
                        <li class="nav-item"><a href="#" target="_blank"><i class="bi bi-github"></i></a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header)