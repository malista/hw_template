function buttonWidget(rootElement) {
    const button = rootElement.querySelector('.btn_widget');
    const lightbulb = rootElement.querySelector('.lightbulb_widget');

    console.log("btn")
    console.log(button)
    console.log("bulb")
    console.log(lightbulb)

    let isActive = true;

    button.onclick = light;

    function light() {
       if(isActive){
        lightOff();
        changeText(button);
       } else{
        lightOn(); 
        changeText(button); 
        lightbulb.style.backgroundColor = randomColor();

       }
    }
    

    
    function lightOn(){
        button.classList.add('btn_widget-active');
        lightbulb.classList.add('lightbulb_widget-active');
        isActive = true;
    }

    function lightOff(){
        button.classList.remove('btn_widget-active');
        lightbulb.classList.remove('lightbulb_widget-active');
        isActive = false;
    }
    
    
    function changeText(btn){
        if (btn.innerText == "OFF")
        {
            btn.innerText = "ON";
        } else {
            btn.innerText = "OFF";
        }
    }

    function randomColor(){
        let someColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(someColor);
        return someColor;
    }


    light();
}

export { buttonWidget };