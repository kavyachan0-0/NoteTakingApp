

'use strict';

/** import modul */
import {generateID,findnotebook, findNotebookIndex} from "./utils.js"



//DB object
let /**{object} */ notekeeperDB ={};


const initDB = function(){
const db = localStorage.getItem('notekeeperDB');
if (db){
    notekeeperDB = JSON.parse(db);
}else{
    notekeeperDB.notebooks =[];
    localStorage.setItem('notekeeperDB',JSON.stringify
        (notekeeperDB)
    );
}
}
initDB();

/** collection for curd operation performing  */
export const db ={
    post :{
        notebook(name){
            ReadDB();

            const /**{object} */ nootebookData={
                id : generateID(),
                name,
                notes : []
            }
            //console.log( nootebookData);
            notekeeperDB.notebooks.push(nootebookData);
            writeDB();

            return nootebookData;
        },

        note(notebookId, object) {
            readDB();

            const notebook = findnotebook(notekeeperDB, notebookId);

            const noteData = {
                id: generateID(),
                notebookId, ...Object, postedOn: new Date().getTime()
            }


            console.log(noteData);
            notebook.notes.unshift(noteData);

            writeDB();

            return noteData;
        }
    },

    get:{
         notebook()
         {
            ReadDB();
            return notekeeperDB.notebooks;

         }
    },


    update :{
        notebook(notebookId ,name){
            readDB();
            const  notebook =findnotebook(notekeeperDB, notebookId);
            notebook.name = name;


            writeDB();
            return notebook;
        },
    delete :{
            notebook(notebookId){
                readDB();
                const notebookIntex = findNotebookIndex(notekeeperDB , notebookId);
                notekeeperDB.notebooks.splice(notebookIntex,1);

                writeDB(); 
            }
           
        }
    }

    




}