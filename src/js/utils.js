/**
 * @copyright codewithsadee 2023
 */

'use strict';

const addEventOnElements = function($elements, eventType, callback) {
  if ($elements instanceof NodeList || Array.isArray($elements)) {
    $elements.forEach($element => $element.addEventListener(eventType, callback));
  } else if ($elements instanceof Element) {
    $elements.addEventListener(eventType, callback);
  } else {
    console.error("addEventOnElements: Invalid input, expected Element or NodeList.");
  }
};

// const addEventOnElements = function($elements,eventType,callback){
    
//   $elements.forEach($element => $element.addEventListener(eventType, callback));
    
// };

const getGreetingMsg = function(currentHour) {
  if (typeof currentHour !== "number" || currentHour < 0 || currentHour > 23) {
    console.error("getGreetingMsg: Invalid hour, expected a number between 0 and 23.");
    return "Hello";
  }

  const greeting =
    currentHour < 5 ? "Night" :
    currentHour < 12 ? "Morning" :
    currentHour < 15 ? "Noon" :
    currentHour < 17 ? "Afternoon" :
    currentHour < 20 ? "Evening" : "Night";
  
  return `Good ${greeting}`;
};
// const getGreetingMsg = function(currentHour){
//   const greeting = currentHour < 5 ?
//    'Night' : currentHour < 12 ? 
//    'Morning' : currentHour < 15 ?
//    'Noon' : currentHour < 17 ? 
//    'Afternoon' : currentHour < 20 ? 
//    'Evening' : 'Night';
//   return `Good ${greeting}`;
// }

let $lastActiveNavItem;
const activeNotebook = function() {
  $lastActiveNavItem?.classList.remove('active');
  this.classList.add('active');
  $lastActiveNavItem = this;
};


const makeElemEditable = function($element) {
  $element.setAttribute('contenteditable', true);
  $element.focus();
};


export {
    addEventOnElements,
    getGreetingMsg,
    activeNotebook,
    makeElemEditable
}