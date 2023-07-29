const footer = document.createElement('template');
footer.innerHTML = `

<footer>
    <div id="footer-container">

        <div id="col-1">
            <h6 class="title">FOUNDERS</h6>
            <p id="founders-names">
            <br>
                Alexis Golart
                <br>
                Connor Carpenter
                <br>
                Nicolas Crespo-Berker
            <p>
        </div>

        <div id="col-2">
            <img src="assets/img/tabb_logo.png" alt="Tabb Logo" class="tabb-logo"></img>

            <p>
                A YORK COUNTY SERVICE | TABB HIGH SCHOOL
            </p>
        </div>

        <div id="col-3">
            <h6 class="title">USEFUL LINKS</h6>

            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=q5jgHYc8xkSvt_cMYsI8HISkHpThXbxOsIjg4b5HoHJUNDlITElVSU1UUEVDUlpVQjVJUko0RDlCNi4u" target="_blank" class="useful-link">Student Connect Form</a>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=q5jgHYc8xkSvt_cMYsI8HISkHpThXbxOsIjg4b5HoHJUOUdCTFVUR1NHVk5RQU40V1BFSUFaNVlSRC4u" target="_blank" class="useful-link">Volunteer Signup Form</a>
        </div>

    </div>
</footer>

`

document.body.appendChild(footer.content);