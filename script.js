let btn = document.querySelector("#ibutton")
let speaking = false

btn.addEventListener("click", () => {
    if (!speaking) {
        let texto = document.querySelector("#itext").value
        let idioma = document.getElementsByName("idioma")
        let voz = new SpeechSynthesisUtterance(texto)

        if (texto.length > 0) {
            if (idioma[0].checked) {
                voz.lang = "pt-BR"
            } else if (idioma[1].checked) {
                voz.lang = "pt-PT"
            }
            voz.volume = 1
            voz.pitch = 1
            voz.rate = 1

            document.querySelector("#itext").value = ""
            speaking = true

            voz.onend = function(event) {
                speaking = false;
            };

            speechSynthesis.speak(voz)
        } else {
            let infobox = document.querySelector("#infobox")
            let audio = new Audio("audio/sound.mp3");

            document.querySelector(".infobox-error-p").innerText = "Coloque um texto para falar!" 
            infobox.style.opacity = 1
            audio.play()
            setTimeout(() => {
                infobox.style.opacity = 0
            }, 3000)
        }
    } else {
        let infobox = document.querySelector("#infobox")

        document.querySelector(".infobox-error-p").innerText = "Aguarde o narrador terminar de falar!"
        infobox.style.opacity = 1
        setTimeout(() => {
            infobox.style.opacity = 0
        }, 3000)
    }
})