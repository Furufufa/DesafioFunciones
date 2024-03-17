document.addEventListener('DOMContentLoaded', function() {
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = 'black';
        });
    });

    let currentColor = '';
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'a') {
            currentColor = 'pink';
        } else if (event.key.toLowerCase() === 's') {
            currentColor = 'orange';
        } else if (event.key.toLowerCase() === 'd') {
            currentColor = 'cyan';
        } else if (event.key.toLowerCase() === 'q') {
            addNewBox('purple');
        } else if (event.key.toLowerCase() === 'w') {
            addNewBox('gray');
        } else if (event.key.toLowerCase() === 'e') {
            addNewBox('brown');
        }

        document.getElementById('key').style.backgroundColor = currentColor;
    });

    function addNewBox(color) {
        const newBox = document.createElement('div');
        newBox.className = 'color-box';
        newBox.style.backgroundColor = color;
        document.body.appendChild(newBox);
    }
});
