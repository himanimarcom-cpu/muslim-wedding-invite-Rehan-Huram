<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Rehan Nizam & Huram Naaz</title>

<link rel="stylesheet" href="style.css">

</head>


<body>


<!-- =========================
     OPENING SCREEN
========================= -->

<div id="cover" class="cover">

    <div class="cover-card">

        <div class="bismillah">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>

        <p class="invited">
            WITH THE BLESSINGS OF ALLAH
        </p>

        <p class="nikah">
            NIKAH CEREMONY
        </p>


        <div class="couple-names">

            <span>Rehan Nizam</span>

            <small>&</small>

            <span>Huram Naaz</span>

        </div>


        <div class="gold-line"></div>


        <p class="wedding-date">
            20 DECEMBER 2026
        </p>

        <p class="wedding-time">
            7:00 PM · THE GRAND PALACE · LUCKNOW
        </p>


        <button
            class="open-button"
            onclick="openInvitation()">

            ✦ OPEN INVITATION ✦

        </button>

    </div>

</div>



<!-- =========================
     MAIN INVITATION
========================= -->

<main id="invitation">


    <!-- INTRO -->

    <section class="hero">

        <div class="section-container">

            <div class="bismillah">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </div>

            <p class="section-label">
                A BLESSED BEGINNING
            </p>


            <h1 class="main-names">

                Rehan Nizam

                <span>&</span>

                Huram Naaz

            </h1>


            <div class="gold-line"></div>


            <p class="intro-text">

                With the blessings of Allah and the love
                of our families, we invite you to join us
                as we begin a beautiful new chapter
                of our lives together.

            </p>

        </div>

    </section>



    <!-- QURAN -->

    <section class="quran">

        <div class="section-container">

            <p class="section-label">
                FROM THE HOLY QURAN
            </p>


            <div class="arabic">

                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم
                مِّنْ أَنفُسِكُمْ أَزْوَاجًا
                لِّتَسْكُنُوا إِلَيْهَا

            </div>


            <div class="gold-line"></div>


            <p class="translation">

                “And among His signs is that He created
                for you spouses from among yourselves
                so that you may find tranquility in them.”

                <br><br>

                — Qur'an 30:21

            </p>

        </div>

    </section>



    <!-- WEDDING EVENTS -->

    <section class="events">

        <div class="section-container">

            <p class="section-label">
                SAVE THE DATE
            </p>

            <h2>
                Our Special Day
            </h2>


            <div class="event-card">

                <div class="event-icon">
                    ☾
                </div>

                <h3>
                    NIKAH
                </h3>

                <p>
                    20 December 2026
                </p>

                <span>
                    7:00 PM
                </span>

            </div>


            <div class="event-card">

                <div class="event-icon">
                    ✦
                </div>

                <h3>
                    VENUE
                </h3>

                <p>
                    The Grand Palace
                </p>

                <span>
                    Lucknow, Uttar Pradesh
                </span>

            </div>

        </div>

    </section>



    <!-- COUNTDOWN -->

    <section class="countdown">

        <div class="section-container">

            <p class="section-label">
                COUNTING DOWN TO OUR NIKAH
            </p>

            <h2>
                The Big Day
            </h2>


            <div class="timer">

                <div class="time-box">
                    <strong id="days">00</strong>
                    <small>DAYS</small>
                </div>

                <div class="time-box">
                    <strong id="hours">00</strong>
                    <small>HOURS</small>
                </div>

                <div class="time-box">
                    <strong id="minutes">00</strong>
                    <small>MINUTES</small>
                </div>

                <div class="time-box">
                    <strong id="seconds">00</strong>
                    <small>SECONDS</small>
                </div>

            </div>

        </div>

    </section>



    <!-- VENUE -->

    <section class="venue">

        <div class="section-container">

            <p class="section-label">
                JOIN US
            </p>

            <h2>
                The Grand Palace
            </h2>

            <div class="gold-line"></div>

            <p class="venue-text">
                Lucknow, Uttar Pradesh
            </p>


            <a
                href="https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Lucknow"
                target="_blank"
                class="gold-button">

                📍 GET DIRECTIONS

            </a>

        </div>

    </section>



    <!-- =========================
         SCRATCH CARD
    ========================= -->

    <section class="scratch-section">

        <div class="section-container">

            <p class="section-label">
                A LITTLE SURPRISE
            </p>

            <h2>
                Scratch & Reveal
            </h2>

            <p class="scratch-text">
                Scratch the card below
                to reveal a special message.
            </p>


            <div class="scratch-card">

                <div class="scratch-message">

                    <span>🤍</span>

                    <strong>
                        Your presence and duas
                        are our greatest gift.
                    </strong>

                    <small>
                        JazakAllah Khair
                    </small>

                </div>


                <canvas
                    id="scratchCanvas">
                </canvas>

            </div>


            <p class="scratch-hint">
                ✦ Use your finger to scratch ✦
            </p>

        </div>

    </section>



    <!-- =========================
         RSVP
    ========================= -->

    <section class="rsvp">

        <div class="section-container">

            <p class="section-label">
                YOUR PRESENCE MATTERS
            </p>

            <h2>
                Will You Join Us?
            </h2>

            <p class="rsvp-text">

                We would be honoured to celebrate
                this blessed occasion with you.

            </p>


            <a
                href="https://wa.me/?text=Assalamu%20Alaikum%2C%20I%20would%20love%20to%20attend%20the%20Nikah%20of%20Rehan%20Nizam%20%26%20Huram%20Naaz."
                target="_blank"
                class="rsvp-button">

                ❤️ YES, I'LL BE THERE

            </a>


            <a
                href="https://wa.me/?text=Assalamu%20Alaikum%2C%20sending%20my%20duas%20and%20best%20wishes%20to%20Rehan%20Nizam%20%26%20Huram%20Naaz."
                target="_blank"
                class="dua-button">

                🤲 SEND MY DUAS

            </a>

        </div>

    </section>



    <!-- FOOTER -->

    <footer>

        <div class="bismillah">
            بِسْمِ اللَّهِ
        </div>

        <h3>
            Rehan Nizam
            <span>&</span>
            Huram Naaz
        </h3>

        <p>
            20 · 12 · 2026
        </p>

        <p>
            May Allah bless our union
            with love, mercy and barakah.
        </p>

    </footer>


</main>


<script src="script.js"></script>

</body>

</html>
