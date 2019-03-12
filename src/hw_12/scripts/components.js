export function formBox(target = document.querySelector('body')){

    const root = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const textarea = document.createElement('textarea');
    const button = document.createElement('button');
    const ul = document.createElement('ul');


    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(button);
    
    root.appendChild(form);
    root.appendChild(ul);


    root.classList.add('comment_block');
    form.classList.add('comment_form');
    input.classList.add('user_name');
    textarea.classList.add('user_text');
    button.classList.add('button');

    button.innerText = "Add comment";

    ul.classList.add('new_comment-list');




    form.addEventListener('submit', (eventObject) => {
        eventObject.preventDefault();
        console.log(eventObject);
        renderCommentItem();
    });

    target.appendChild(root);


    function getCommentDate(){
        const d = new Date();
        const datestring = ('0' + d.getDate()).slice(-2) + '.' + ('0'+(d.getMonth()+1)).slice(-2) + '.' +
        d.getFullYear() + ' in ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
        return datestring;
    }

    function renderCommentItem(){
        const value = input.value;
        const inp = textarea;
        // debugger;
        const textValue = inp.value;

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        const span = document.createElement('span');

        h3.classList.add('item_name');
        div.classList.add('item_text');
        span.classList.add('item_date');
        li.classList.add('new_comment-item');


        li.appendChild(h3);
        li.appendChild(div);
        li.appendChild(span);

        h3.textContent = value;
        div.innerText = textValue;
        span.textContent = getCommentDate();
        

        ul.appendChild(li);
        input.value = '';
        inp.value= '';
    }
}
