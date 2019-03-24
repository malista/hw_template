export class CommentFormBox {
    constructor(root, form, input, textarea, button, ul) {
        this._root = document.createElement('div');
        this._form = document.createElement('form');
        this._input = document.createElement('input');
        this._textarea = document.createElement('textarea');
        this._button = document.createElement('button');
        //this._ul = document.createElement('ul');

        this._form.appendChild(this._input);
        this._form.appendChild(this._textarea);
        this._form.appendChild(this._button);
        this._root.appendChild(this._form);
        //this._root.appendChild(this._ul);

        this._button.innerText = "Add comment";

        this._form.addEventListener('submit', (eventObject) => {
            eventObject.preventDefault();
            console.log(eventObject);
            //renderCommentItem();
        });

    }

    setEventListener(func){
        this._form.addEventListener('submit', func)
    }

    setClass(rootclass, formclass, inputclass, textareaclass, 
        buttonclass, ulclass) {

        this._root.classList.add(rootclass);
        this._form.classList.add(formclass);
        this._input.classList.add(inputclass);
        this._textarea.classList.add(textareaclass);
        this._button.classList.add(buttonclass);
        //this._ul.classList.add(ulclass);
    }

   
    
    
}