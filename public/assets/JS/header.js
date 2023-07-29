const header = document.createElement('template');
header.innerHTML = `

<header>
    <img src="assets/img/logo-white.png" alt="Logo - white" class="logo"></img>
    <nav>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="getcconnected.html">Get Connected</a></li>
            <li><a href="volunteering.html">Volunteering</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>
</header>
`

document.body.appendChild(header.content);
