

'use strict';
const $overlay = document.createElement('div');
$overlay.classList.add('overly', 'modal-overlay');

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
export{DeleteConfirmodal}