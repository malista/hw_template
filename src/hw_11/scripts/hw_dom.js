function lightWidget(rootElement) {

    const button1 = rootElement.querySelector('.light_green');
    const button2 = rootElement.querySelector('.light_yellow');
    const button3 = rootElement.querySelector('.light_red');

    button1.onclick = () => {
        enlight(button1);
        dislight(button2);
        dislight(button3);

    };
    button2.onclick = () => {
        enlight(button2);
        dislight(button1);
        dislight(button3);
    }
    button3.onclick = () => {
        enlight(button3);
        dislight(button2);
        dislight(button1);
    }

    function enlight(el) {
        el.classList.add('active');
    }

    function dislight(elem) {
        elem.classList.remove('active');
    }
}

export { lightWidget };