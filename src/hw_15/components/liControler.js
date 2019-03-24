// import './hw_15.scss';

export class LiControler {
    constructor(author, date, text){
        this._li = document.createElement('li');
        this._h3 = document.createElement('h3');
        this._span = document.createElement('span');
        this._div = document.createElement('div');
        
        this._li.appendChild(this._h3);
        this._li.appendChild(this._div);
        this._li.appendChild(this._span);
        
        this._h3.textContent = author;
        this._span.textContent = date;
        this._div.textContent = text;
    }
    
    setHeaderClass(className){
        this._h3.classList.add(className)
    }



    setSelectorClass(headerclass, textclass, dateclass, listclass){
        this._h3.classList.add(headerclass);
        this._div.classList.add(textclass);
        this._span.classList.add(dateclass);
        this._li.classList.add(listclass);
    }
    
    getLi() {return this._li}
    
}