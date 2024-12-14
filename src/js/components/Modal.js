

'use strict';
const $overlay = document.createElement('div');
$overlay.classList.add('overly', 'modal-overlay');


const NoteModal = function (title = 'Untitled' , text = 'Add your note...', time = '') {

    const $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
         <button class="icob-btn large" aria-label="Close modal" data-close-btn>
            <span class="material-symbols-rounded" aria-hidden="true">close</span>

            <div class="state-layer"></div>
        </button>

        <input type="text" placeholder="Untitled" value="${title}" class="modal-title text-title-medium" data-notebook-field>

        <textarea placeholder="Take a note..." class="modal-text text-body-large custom-scrollbar data-note-field">${text}</textarea>

        <div class="modal-footer">
            <span class="time text-label-large">${time}</span>

            <button class="btn text" data-submit-btn>
                <span class="text-label-large">Save</span>

                <div class="state-layer"></div>
            </button>
        </div>
    `;

    const $submitBtn = $modal.querySelector('[data-submit-btn]');
    $submitBtn.disabled = true;

    const [$titleField, $textField] = $modal.querySelectorAll('[data-note-field]');

    const enableSubmit = function () {
        $submitBtn.disabled = !$titleField.value && !$textField.value;
    }

    $textField.addEventListener('keyup', 'enableSubmit');
    $titleField.addEventListener('keyup', 'enableSubmit');

    const open = function() {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);
        $titleField.focus();

    }

    const close = function() {
        document.body.removeChild($modal);
        document.body.removeChild($overlay);
    }

    const $closeBtn = $modal.querySelector('[data-close-btn]');
    $closeBtn.addEventListener('click', close);


    const onSubmit = function (callback) {

        $submitBtn.addEventListener('click', function () {
            const noteData = {
                title: $titleField.value,
                text: $textField.value
            }

            callback(noteData);
        });
    }

    return { open,  close, onSubmit }
}

const  DeleteConfirmodal = function (title){
    const  $modal = document.createElement('div');
    $modal.innerHTML =html /**'
    
    // code for modal class from html
    
    ';*/
    /** opens the delete confirmation modal by appending it to the 
     * document body
     */
    const open = function(){
        document.body.appendChild($modal);
        document.body.appendChild($overlay);
    }

    /**  close the delete confirmation modal by removing
     * it from the document body
    */
//    const  close = function(){
//     document.body.removeChild($modal);
//     document.body.removeChild($overlay);
//    } 
const close = function () {
    if ($modal.parentNode) document.body.removeChild($modal);
    if ($overlay.parentNode) document.body.removeChild($overlay);
};

   const   $actionBtns = $modal.
   querySelectorAll('[data-action-btn]');

const onSubmit = function(callback)
{
 $actionBtns.forEach($btn => $btn.addEventListener('click',
    function (){
        const isConfirm = this.dataset.actionbtn =='true'? true : false;
        callback(isConfirm);
}));
}

    return {open , close,onsubmit }
}
export{DeleteConfirmodal, NoteModal }