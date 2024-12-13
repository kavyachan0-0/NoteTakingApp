

'use strict';


import { activeNotebook , makeElemEditable} from "../utils.js";
/** 
 * Import 
 */
import{DeleteConfirmModal} from "./Modal.js"
import {db} from "../db.js"
import { Tooltip } from "./Tooltip.js";
import { client } from "../client.js";
const /** {HTML client } */ $notePanelTitle = document.querySelector('[data-note-panel-title]');



export  const NavItem = function (id,name) {
    const /** {html elements } */  $navItem = document.createElement
    ('div');
    $navItem.classList.add('nav-item');
    $navItem.setAttribute('data-notebook', id)
    $navItem.innerHTML= html 
    
    /** index.html code  for deleting the record  */
    
    const /** Array <html Element>  */ $tooltipElems = $navItem.
    querySelectorAll('[data-tooltip]');
    $tooltipElems.forEach($elem =>Tooltip($elem) );

    $navItem.addEventListener('click',function(){
        $notePanelTitle.textContent= name;
        activeNotebook.call(this);
    });
/** notebook edit function */
const $addNotebookBtn = $navItem.querySelector
('[data-edit-btn]');
const $navItemField = $navItem.querySelector
('[data-natebook-field]');
const $navItemEditBtn = $navItem.querySelector('[data-edit-btn]');

 
$navItemEditBtn.addEventListener('click', makeElemEditable.bind
    (null, $navItemField));

    $navItemField.addEventListener('keydown', function(event){


        if(event.key=='Enter')
        {
            this.removeAttribute('contenteditable');
            //update edited data in database

            const  updateNotebookData = db.update.notebook
            (id, this.textContent);
            //render update notebook
            client.notebook.update(id, updateNotebookData);
            
        }
    } );

    /** notebook delete functinality */
    const $navItemDeleteBtn =$navItem.
    querySelector('[data-delete-btn]');
    $navItemDeleteBtn.addEventListener('click',function(){
        const modal = DeleteConfirmModal(name);

        modal.open();

        modal.onsubmit(function(isconfirm){
            if(isconfirm){
                db.Delete.notebook(id);
                client.notebook.Delete(id);
            }
            modal.close();
        });


    });
    return $navItem;
    
  


    
    
}