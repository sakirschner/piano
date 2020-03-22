const synth = new Tone.MonoSynth().toMaster();
const CONTAINER = document.getElementById('main');
const BLACK_KEYS_DIV = document.createElement('div');
const WHITE_KEYS_DIV = document.createElement('div');
const SPACER1 = document.createElement('div');
const SPACER2 = document.createElement('div');
const SPACER3 = document.createElement('div');
const SPACER4 = document.createElement('div');
const WHITE_KEYS = 15;
const BLACK_KEYS1 = 2;
const BLACK_KEYS2 = 3;
const WHITE_NOTES = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
const BLACK_NOTES = ['C#3', 'D#3', 'F#3', 'G#3', 'A#3', 'C#4', 'D#4', 'F#4', 'G#4', 'A#4'];
const WHITE_KEYBOARD = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'];
const BLACK_KEYBOARD = ['2', '3', '5', '6', '7', 'D', 'F', 'H', 'J', 'K'];


function displayPiano() {

    let blackNoteReference = 0;

    BLACK_KEYS_DIV.setAttribute('class', 'blackKeys');
    CONTAINER.appendChild(BLACK_KEYS_DIV);

    SPACER1.setAttribute('class', 'spacer1');
    BLACK_KEYS_DIV.appendChild(SPACER1);
   
    for(i = 0; i < BLACK_KEYS1; i++){
        let key = document.createElement('button');
        let keyPlay = document.createElement('p');
        key.setAttribute('class', 'black');
        key.setAttribute('data-note', BLACK_NOTES[blackNoteReference]);
        keyPlay.innerText = BLACK_KEYBOARD[blackNoteReference];
        blackNoteReference = i + 1;
        SPACER1.appendChild(key);
        key.appendChild(keyPlay)
    }

    SPACER2.setAttribute('class', 'spacer2');
    BLACK_KEYS_DIV.appendChild(SPACER2);

    for(i = 0; i < BLACK_KEYS2; i++){
        let key = document.createElement('button');
        let keyPlay = document.createElement('p');
        key.setAttribute('class', 'black');
        key.setAttribute('data-note', BLACK_NOTES[blackNoteReference]);
        keyPlay.innerText = BLACK_KEYBOARD[blackNoteReference];
        blackNoteReference = i + 3;
        SPACER2.appendChild(key);
        key.appendChild(keyPlay)
    }

    SPACER3.setAttribute('class', 'spacer3');
    BLACK_KEYS_DIV.appendChild(SPACER3);
 
    for(i = 0; i < BLACK_KEYS1; i++){
        let key = document.createElement('button');
        let keyPlay = document.createElement('p');
        key.setAttribute('class', 'black');
        key.setAttribute('data-note', BLACK_NOTES[blackNoteReference]);
        keyPlay.innerText = BLACK_KEYBOARD[blackNoteReference];
        blackNoteReference = i + 6;
        SPACER3.appendChild(key);
        key.appendChild(keyPlay)
    }

    SPACER4.setAttribute('class', 'spacer4');
    BLACK_KEYS_DIV.appendChild(SPACER4);  

    for(i = 0; i < BLACK_KEYS2; i++){
        let key = document.createElement('button');
        let keyPlay = document.createElement('p');
        key.setAttribute('class', 'black');
        key.setAttribute('data-note', BLACK_NOTES[blackNoteReference]);
        keyPlay.innerText = BLACK_KEYBOARD[blackNoteReference];
        blackNoteReference = i + 8;
        SPACER4.appendChild(key);
        key.appendChild(keyPlay)
    }

    WHITE_KEYS_DIV.setAttribute('class', 'whiteKeys');
    CONTAINER.appendChild(WHITE_KEYS_DIV)

    for (i = 0; i < WHITE_KEYS; i++) {
        let key = document.createElement('button');
        let keyPlay = document.createElement('p');
        key.setAttribute('class', 'white');
        key.setAttribute('data-note', WHITE_NOTES[i]);
        keyPlay.innerText = WHITE_KEYBOARD[i];
        WHITE_KEYS_DIV.appendChild(key);
        key.appendChild(keyPlay)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    displayPiano();

    const NOTES = document.getElementById('main');
    const BUTTON = document.querySelectorAll('button');

    let isGliding = false;
    
    NOTES.addEventListener('mousedown', (note) => {
        synth.triggerAttack(note.target.dataset.note);
        isGliding = true;
    });

    BUTTON.forEach((note) => {
        note.addEventListener('mousedown', () => {
            note.setAttribute('id', 'pressed');
        })
    });

    NOTES.addEventListener('mousemove', (note) => {
        if (isGliding == true) {
            synth.triggerAttackRelease(note.target.dataset.note);
        }
    });

    BUTTON.forEach((note) => {
        note.addEventListener('mousemove', () => {
            note.removeAttribute('id', 'pressed');
        })
    })

    NOTES.addEventListener('mouseup', (note) => {
        synth.triggerRelease();
        isGliding = false;
      });

    BUTTON.forEach((note) => {
        note.addEventListener('mouseup', () => {
            note.removeAttribute('id', 'pressed');
            })
        });

    document.addEventListener('keydown', (notes) => {
        switch(notes.key) {
            case 'q':
                return synth.triggerAttack('C3');
            case '2':
                return synth.triggerAttack('C#3');
            case 'w':
                return synth.triggerAttack('D3');
            case '3':
                return synth.triggerAttack('D#3');
            case 'e':
                return synth.triggerAttack('E3');
            case 'r':
                return synth.triggerAttack('F3');
            case '5':
                return synth.triggerAttack('F#3');
            case 't':
                return synth.triggerAttack('G3');
            case '6':
                return synth.triggerAttack('G#3');
            case 'y':
                return synth.triggerAttack('A3');
            case '7':
                return synth.triggerAttack('A#3');
            case 'u':
                return synth.triggerAttack('B3');
            case 'x':
                return synth.triggerAttack('C4');
            case 'd':
                return synth.triggerAttack('C#4');
            case 'c':
                return synth.triggerAttack('D4');
            case 'f':
                return synth.triggerAttack('D#4');
            case 'v':
                return synth.triggerAttack('E4');
            case 'b':
                return synth.triggerAttack('F4');
            case 'h':
                return synth.triggerAttack('F#4');
            case 'n':
                return synth.triggerAttack('G4');
            case 'j':
                return synth.triggerAttack('G#4');
            case 'm':
                return synth.triggerAttack('A4');
            case 'k':
                return synth.triggerAttack('A#4');
            case ',':
                return synth.triggerAttack('B4');
            case '.':
                return synth.triggerAttack('C5');
        }
    });

    document.addEventListener('keyup', notes => {
        switch(notes.key) {
            case 'q':
            case '2':
            case 'w':
            case '3':
            case 'e':
            case 'r':
            case '5':
            case 't':
            case '6':
            case 'y':
            case '7':
            case 'u':
            case 'x':
            case 'd':
            case 'c':
            case 'f':
            case 'v':
            case 'b':
            case 'h':
            case 'n':
            case 'j':
            case 'm':
            case 'k':
            case 'q,':
            case '.':
                synth.triggerRelease();
        }
    });
});
