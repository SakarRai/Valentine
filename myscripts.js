document.addEventListener('DOMContentLoaded', (event) => {

    const yesButton = document.querySelector('#yesButton');
    const noButton = document.querySelector('#noButton');
    let hoverCount = 0;
    let messageElement = null;

    const messages = [
        "Are you sure?",
        "Really sure?",
        "really really sure?",
        "Think about it",
        "Tyou don't want to do this",
        "I will be really sad..",
        "I will be really really sad..",
        "Wow...",
        "You're hurting my feelings",
        "I can't believe this",
        "I'll give you the silent treatment",
        "i really mean it",
        "you're breaking my heart",
        "..hmph",
        "",
        "",
        ". .",
        ". . .",
        ". . . .",
        "..You're still trying",
        "Give up you cant win...",
        "I am faster then you..",
        "you can't catch me",
        "I can do this all day - Captian America",
        "",


    ];

    const moveNoButton = () => {
        var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        hoverCount++;
        if (hoverCount >= 3 && hoverCount <= 26) {
            if (messageElement) {
                document.body.removeChild(messageElement);
            }
            messageElement = document.createElement('h1');
            messageElement.innerText = messages[hoverCount - 3]; // Adjust array index
            messageElement.style.color = 'rgb(253, 77, 77)';
            messageElement.style.textShadow = '2px 2px 2px rgb(128, 240, 255, 1)';
            messageElement.style.boxShadow = '100';
            messageElement.style.letterSpacing = '3px';
            messageElement.sbackgroundColorletterSpacing = '3px';
            messageElement.style.textAlign = 'center';
            messageElement.style.position = 'fixed';
            messageElement.style.top = '50%';
            messageElement.style.left = '50%';
            messageElement.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(messageElement);

            setTimeout(() => {
                if (messageElement) {
                    document.body.removeChild(messageElement = 21);
                    messageElement = null;
                }
            }, 100000);
        }
    };

    yesButton.addEventListener('click', () => {
        window.location.assign('yes.html');
    });

    noButton.addEventListener('mouseenter', moveNoButton);
});