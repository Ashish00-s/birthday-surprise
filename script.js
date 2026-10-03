function openSurprise() {

    document.getElementById("message").style.display = "block";

    createConfetti();
}


function createConfetti() {

    for (let i = 0; i < 80; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confetti);
    }
}


function openGift() {

    document.getElementById("secretMessage").style.display = "block";

    document.getElementById("letter").style.display = "block";

    typeMessage();
}


function typeMessage() {

    let text = "Dear Sakshi, aaj ka din tumhare liye bahut special hai... aur honestly, mere liye bhi, kyunki mujhe ek aisi friend mili jo kabhi hasa deti hai, kabhi irritate karti hai 😂, but somehow hamesha special rehti hai. I hope tumhari life mein bahut saari happiness, success aur beautiful memories aayein. Hamesha aise hi smile karti rehna. Aur haan, birthday hai toh aaj ke din thoda kam drama karna 😂❤️ Happy Birthday, Sakshi! 🎂✨";

    let i = 0;

    let typing = setInterval(function() {

        document.getElementById("typingText").innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }

    }, 50);
}