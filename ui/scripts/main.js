
const difficulty_btns = document.querySelectorAll("#difficulty_buttons button"); 


difficulty_btns.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = `game/${button.id}.html`;
    });
});
