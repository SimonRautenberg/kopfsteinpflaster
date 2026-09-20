document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var BURST_DURATION = 600;
    var MIN_DELAY = 4000;
    var MAX_DELAY = 10000;

    function randomDelay() {
        return MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
    }

    function scheduleGlitch(el) {
        setTimeout(function () {
            el.classList.add('glitching');
            setTimeout(function () {
                el.classList.remove('glitching');
                scheduleGlitch(el);
            }, BURST_DURATION);
        }, randomDelay());
    }

    document.querySelectorAll('.glitch-heading').forEach(function (el) {
        scheduleGlitch(el);
    });
});
