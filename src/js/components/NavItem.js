/**
 * @copyright codewithsadee 2023
 */

'use strict';


import { activeNotebook , makeElemEditable} from "../utils";
/** 
 * Import 
 */
import{DeleteConfirmModal} from "./Modal"
import {db} from "../db"
import { Tooltip } from "./Tooltip";
import { client } from "../client";
const /** {HTML client } */ $notePanelTitle = document.querySelector('[data-note-panel-title]');



export  const NavItem = function (id,name) {
    const /** {html elements } */  $navItem = document.createElement
    ('div');
    $navItem.classList.add('nav-item');
    $navItem.setAttribute('data-notebook', id)
    $navItem.innerHTML= html 
    
    /** index.html code  for deleting the record  */
    
    const /** Array <html Element>  */ $tooltipElems = $navItem.
    querySelector('[data-tooltip]');
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
 
$navItemEditBtn.addEventListener('click', makeElemEditable.bind
    (null, $navItemField));

    $navItemField.addEventListener('key', function(event){


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