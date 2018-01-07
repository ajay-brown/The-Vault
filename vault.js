'use strict';
module.exports = function() {
    let myObj = {};
 function setValue (key,value) {
  myObj[key] = value; 
 }
 
function getValue(key) {
  if (myObj[key]) {
        return myObj[key];
  } else {
      return null;
        }
    }
 

return {
    setValue: setValue,
    getValue: getValue,
        }
};