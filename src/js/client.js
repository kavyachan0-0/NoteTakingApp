

'use strict';
/** import modul*/
import { NavItem } from "./components/NavItem.js";
// import { activeNotebook } from "./utils";
import { activeNotebook } from "./utils.js"; // Adjust path as needed


const/**{ HTML Element } */ $sidebarList = document.querySelector('[data-sidebar-list]');

const /** {HTML client } */ $notePanelTitle = document.querySelector('[data-note-panel-title]');

const $notePanel = document.querySelector('[data-note-panel]');
export const client ={
    notebook :{
        create (nootebookData)
        {
            const /** {hTML elements} */  $navItem = $navItem(nootebookData.id, nootebookData.name);
            $sidebarList.appendChild($navItem);
            activeNotebook.call($navItem);
            $notePanelTitle.textContent = nootebookData.name;
        },
        read(notebookList)
        {
            notebookList.forEach(nootebookData,index => {
                const /** { html element} */ $navItem = NavItem(nootebookData.id,
                    nootebookData.name);
                  
                    if(index==0)
                    {
                        activeNotebook.call($navItem);
                    }
                    $sidebarList.appendChild($navItem);
            });
        },

    update (notebookId, nootebookData){
        const $oldNotebook = document.
        querySelector('[data-notebook=" ${notebookId}"]');
        const $newNotebook = NavItem(nootebookData.
            id, nootebookData.name);

            $notePanelTitle.textContent = nootebookData.name;
            $sidebarList.replaceChild($newNotebook,$oldNotebook);
            activeNotebook.call($newNotebook);
    },
    delete(notebookId){
     const $deletenotebook = document.querySelector(`[data-notebook = "${notebookId}"]`);
     const $activeNavItem = 
     $deletenotebook.nextElementSibling ?? $deletenotebook.
     previousElementSibling;

     if($activeNavItem){
        $activeNavItem.click();
     }else{
        $notePanelTitle.innerHTML = '';
        // $notePanel.innerHTML = '';
     }
     
     $deletenotebook.remove();
    }
    },

    note: {

        create(noteData) {

            //Append card in note panel
            const $card = Card(noteData);
        }
    }
}