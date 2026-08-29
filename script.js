/* =========================
   OPEN INVITATION
========================= */

function openInvitation() {

    const cover =
        document.getElementById("cover");

    const invitation =
        document.getElementById("invitation");


    cover.style.display = "none";

    invitation.style.display = "block";

    window.scrollTo(0, 0);
}



/* =========================
   COUNTDOWN
========================= */

const weddingDate =
    new Date(
        "December 20, 2026 19:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
            (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);



/* =========================
   SCRATCH CARD
========================= */

const canvas =
    document.getElementById(
        "scratchCanvas"
    );


const ctx =
    canvas.getContext("2d");


function setupScratchCard() {

    const card =
        canvas.parentElement;


    canvas.width =
        card.offsetWidth;

    canvas.height =
        card.offsetHeight;


    /* Golden scratch layer */

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height
        );


    gradient.addColorStop(
        0,
        "#c7a85e"
    );

    gradient.addColorStop(
        0.5,
        "#e0c477"
    );

    gradient.addColorStop(
        1,
        "#a88339"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /* Scratch text */

    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 18px Georgia";


    ctx.textAlign =
        "center";


    ctx.fillText(
        "SCRATCH HERE ✦",
        canvas.width / 2,
        canvas.height / 2
    );

}


setupScratchCard();



let scratching = false;


function scratch(e) {

    if (!scratching)
        return;


    const rect =
        canvas.getBoundingClientRect();


    let x;
    let y;


    if (e.touches) {

        x =
            e.touches[0].clientX
            - rect.left;

        y =
            e.touches[0].clientY
            - rect.top;

    } else {

        x =
            e.clientX
            - rect.left;

        y =
            e.clientY
            - rect.top;
    }


    ctx.globalCompositeOperation =
        "destination-out";


    ctx.beginPath();

    ctx.arc(
        x,
        y,
        25,
        0,
        Math.PI * 2
    );

    ctx.fill();

}


canvas.addEventListener(
    "mousedown",
    () => scratching = true
);


canvas.addEventListener(
    "mouseup",
    () => scratching = false
);


canvas.addEventListener(
    "mousemove",
    scratch
);



canvas.addEventListener(
    "touchstart",
    (e) => {

        e.preventDefault();

        scratching = true;

        scratch(e);

    },
    { passive: false }
);


canvas.addEventListener(
    "touchmove",
    (e) => {

        e.preventDefault();

        scratch(e);

    },
    { passive: false }
);


canvas.addEventListener(
    "touchend",
    () => scratching = false
);
