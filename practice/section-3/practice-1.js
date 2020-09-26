'use strict';

function createUpdatedCollection(collectionA, objectB) {
// 在此写代码
var result = [];
var d = true;

collectionA.forEach(
  function compare(element){
    for(var i = 0; i < objectB.value.length; i++){
      if(element.key === objectB.value[i]){
        result.push({key:element.key,count:element.count-1});
        d = false;
      }
    }
    if(d){
      result.push({key:element.key,count:element.count});
    }
    d = true;
  }
);
return result;
}
