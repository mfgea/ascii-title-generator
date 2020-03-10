const $ = (query) => document.querySelectorAll(query)[0];

$("#generate-btn").addEventListener('click', (ev) => {
    ev.preventDefault();

    const text = $("#text").value;
    const resultContainer = $("#result");
    const width = parseInt($("#line-len").value, 10);

    const separator = Array.from(Array(width)).map(v => '=').join('');
    const spacesWidth = Math.floor((width-text.length)/2);
    const spaces = Array.from(Array(spacesWidth)).map(v => ' ').join('');

    resultContainer.value = `<!--\n${separator}\n${spaces}${text}\n${separator}\n-->`;

    resultContainer.select();
    document.execCommand('copy');

    flashMessage("Copied to clipboard...");
});

const flashMessage = (msg) => {
    const message = $("#message");
    message.innerHTML = msg;
    message.classList.add('visible');
    setTimeout(() => message.classList.remove('visible'), 1500);
};