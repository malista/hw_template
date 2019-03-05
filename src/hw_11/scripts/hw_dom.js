function lightWidget(rootElement) {

    const button1 = rootElement.querySelector('.light_green');
    const button2 = rootElement.querySelector('.light_yellow');
    const button3 = rootElement.querySelector('.light_red');

/*
    function lightOff(e1, e2, e3) {
        console.log(e1)
        e1.onclick = () => toggle();
    }

    function toggle(e1, e2, e3) {
        dislight(e1);
        dislight(e2);
        dislight(e3);
        enlight(e1);
    }
    */
   button1.onclick= () => enlight(button1);
   button2.onclick = () => enlight(button2);
   button3.onclick = () => enlight(button3);

  



    function enlight(el) {
        el.classList.add('active');
    }

    function dislight(elem) {
        elem.classList.remove('active');
    }


    console.log('b1')
    console.log(button1)

}
export { lightWidget };