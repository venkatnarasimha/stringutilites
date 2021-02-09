const inputVal = document.querySelector('.text-area-input');
const outputVal = document.querySelector('.text-area-output');
const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');
const capitalize = document.querySelector('.capitalize');
const reversed = document.querySelector('.reverse');
const copybut = document.querySelector('.copy');
upper.addEventListener('click', () => {
    outputVal.value = inputVal.value.toUpperCase();
});

lower.addEventListener('click', () => {
    outputVal.value = inputVal.value.toLowerCase();
});

capitalize.addEventListener('click', () => {
    outputVal.value = inputVal.value.charAt(0).toUpperCase() + inputVal.value.slice(1);
});

reversed.addEventListener('click', () => {
    outputVal.value = inputVal.value.split('').reverse().join('');
});

copybut.addEventListener('click', () => {
    const copy = document.querySelector('.text-area-output');
    console.log('clicked:', copy);
    copy.focus();
    copy.select();
    document.execCommand('copy');
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log(`Copying text command was ${msg}`);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
});
