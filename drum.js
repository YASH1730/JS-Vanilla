
//for remove the transition

remove = (e) => {

    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('press');
}

//for playing the disierd sound

playaudio = (e) => {
    const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if (!sound) return;
    key.classList.add('press');
    sound.currentTime = 0;
    sound.play();
};

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', remove));

window.addEventListener('keydown', playaudio);