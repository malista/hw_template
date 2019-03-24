import { LiControler } from '../components/liControler';
import { CommentFormBox } from '../components/commentFormBox';

export class Comment {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._ul = this.render();
        this.fetchData();
    }


    render() {
        const form = new CommentFormBox()
        form.setClass('comment_block', 'comment_form', 'user_name', 'user_text', 'button', 'new_comment-list');
        
        const ul = document.createElement('ul');
        ul.classList.add('ul_class');
        form.setEventListener((eventObject) => {
            console.log(eventObject);
        })
        
        return this._target.appendChild(form._root).appendChild(ul);
    }
    

    renderListOfJsons(arrayOfJsons, appended) {
        for (const comment of arrayOfJsons) {
            appended.appendChild(this.renderOne(comment));
        }
        return appended;
    }

    renderOne(jsonchik) {
        const li = new LiControler(jsonchik.author, jsonchik.date, jsonchik.text);
        //li.setHeaderClass();
        li.setSelectorClass('item_name', 'item_text', 'item_date', 'new_comment-item');
        return li.getLi();
    }


    fetchData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://evening-dawn-11092.herokuapp.com/comments');
        xhr.send();

        xhr.onreadystatechange = () => {
            console.log(xhr);
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.error('SOMETHING IS WRONG');
                    return;
                }
                // this._tasks = ;
                var e = this.renderListOfJsons(JSON.parse(xhr.response), this._ul);
                //  this._target.appendChild(e);
                //  debugger;
            }
        }
    }
}