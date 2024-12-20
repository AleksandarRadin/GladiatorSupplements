document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("forma");
    const dinamickiSadrzaj = document.getElementById("dinamickiSadrzaj");

    forma.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const ime = document.getElementById("ime").value.trim();
        const email = document.getElementById("email").value.trim();
        const brTel = document.getElementById("brTel").value.trim();
        const proizvod = document.getElementById("proizvod").value;
        const poruka = document.getElementById("poruka").value.trim();

        if (!ime || !email || !brTel) {
            alert("Molimo popunite sva obavezna polja!");
            return;
        }

        dinamickiSadrzaj.innerHTML = `
            <h2>Hvala na kontaktu, ${ime}!</h2>
            <p>Email: ${email}</p>
            <p>Broj telefona: ${brTel}</p>
            <p>Izabrani proizvod: ${proizvod}</p>
            <p>Poruka: ${poruka ? poruka : "Nema dodatne poruke."}</p>
        `;

        forma.reset();
    });
});
