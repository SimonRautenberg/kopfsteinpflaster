document.addEventListener('DOMContentLoaded', function () {
    var bezirke = {
        'bezirk-mitte': {
            name: 'Mitte',
            text: '[Platzhalter] Zwischen Regierungsbauten und Touristenströmen tarnt sich das Okkulte am besten. Wer hier nach Kultisten sucht, muss lernen, den ganz normalen Wahnsinn der Hauptstadt vom Wahnsinn des schlafenden Gottes zu unterscheiden.'
        },
        'bezirk-friedrichshain-kreuzberg': {
            name: 'Friedrichshain-Kreuzberg',
            text: '[Platzhalter] In den Technoclubs verschwimmen Bass und Beschwörung. Manche, die zum Feiern in den Keller gehen, kommen erst Tage später wieder heraus, und nicht alle erinnern sich noch an ihren eigenen Namen.'
        },
        'bezirk-pankow': {
            name: 'Pankow',
            text: '[Platzhalter] Zwischen Altbauten und stillen Parks haben sich alte Zirkel eingenistet, die niemand stört. Die Nachbarschaft schweigt lieber, als zu fragen, was hinter den zugezogenen Vorhängen vor sich geht.'
        },
        'bezirk-charlottenburg-wilmersdorf': {
            name: 'Charlottenburg-Wilmersdorf',
            text: '[Platzhalter] Hinter den gediegenen Fassaden wird mit verfluchtem Gold gehandelt, als wäre es ganz gewöhnliches Vermögen. Wohlstand hat hier einen Preis, den nicht jeder sehen will.'
        },
        'bezirk-spandau': {
            name: 'Spandau',
            text: '[Platzhalter] Die alte Zitadelle und die stillen Wasserwege sollen Zugänge zu den Traumlanden verbergen. Wer zu tief in die Havel blickt, verliert manchmal den Faden der eigenen Gedanken.'
        },
        'bezirk-steglitz-zehlendorf': {
            name: 'Steglitz-Zehlendorf',
            text: '[Platzhalter] Im dichten Grün des Grunewalds sollen Wesen leben, die älter sind als die Stadt selbst. Villenbesitzer erzählen sich Geschichten von Lichtern zwischen den Bäumen, die niemand erklären kann.'
        },
        'bezirk-tempelhof-schoeneberg': {
            name: 'Tempelhof-Schöneberg',
            text: '[Platzhalter] Über dem stillgelegten Flugfeld liegt eine Schwere, die nichts mit dem Wetter zu tun hat. Manche Okkultisten behaupten, dort etwas gerufen zu haben, das sie nicht mehr loswerden.'
        },
        'bezirk-neukoelln': {
            name: 'Neukölln',
            text: '[Platzhalter] In den Hinterhöfen kursieren alte Kulte, die genauso vielfältig sind wie die Nachbarschaft selbst. Wer weiß, an wen er sich wenden muss, findet hier fast alles, um einen Preis, der selten in Geld bezahlt wird.'
        },
        'bezirk-treptow-koepenick': {
            name: 'Treptow-Köpenick',
            text: '[Platzhalter] Zwischen Wäldern und Seen im Berliner Südosten ist die Stadt am weitesten von sich selbst entfernt. Manche Lichtungen wirken, als hätten sie sich seit dem letzten Kataklysmus nicht verändert.'
        },
        'bezirk-marzahn-hellersdorf': {
            name: 'Marzahn-Hellersdorf',
            text: '[Platzhalter] Zwischen den Plattenbauten experimentiert die Fornax mit Technologien, die niemand vollständig versteht. Nachts sollen manche Fenster in Farben leuchten, die es eigentlich nicht geben dürfte.'
        },
        'bezirk-lichtenberg': {
            name: 'Lichtenberg',
            text: '[Platzhalter] In den alten Industriehallen finden Rituale statt, die so laut sind wie die Züge, die darüber hinwegdonnern. Niemand hört die Schreie, weil ohnehin niemand genau hinhört.'
        },
        'bezirk-reinickendorf': {
            name: 'Reinickendorf',
            text: '[Platzhalter] Am Stadtrand, nahe den Wäldern und dem alten Flughafengelände, verschwimmen die Grenzen zwischen Berlin und dem, was davor war. Manche Anwohner berichten von Träumen, die nicht ihre eigenen sind.'
        }
    };

    var map = document.querySelector('.berlin-map');
    var infoBox = document.getElementById('bezirk-info');
    var infoName = document.getElementById('bezirk-info-name');
    var infoText = document.getElementById('bezirk-info-text');
    if (!map || !infoBox || !infoName || !infoText) return;

    var selected = null;

    function selectBezirk(el) {
        var data = bezirke[el.id];
        if (!data) return;

        if (selected === el) {
            el.classList.remove('selected');
            el.setAttribute('aria-pressed', 'false');
            selected = null;
            infoBox.hidden = true;
            return;
        }

        if (selected) {
            selected.classList.remove('selected');
            selected.setAttribute('aria-pressed', 'false');
        }

        el.classList.add('selected');
        el.setAttribute('aria-pressed', 'true');
        selected = el;

        infoName.textContent = data.name;
        infoText.textContent = data.text;
        infoBox.hidden = false;
    }

    map.querySelectorAll('.bezirk').forEach(function (el) {
        el.addEventListener('click', function () {
            selectBezirk(el);
        });
        el.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                selectBezirk(el);
            }
        });
    });
});
