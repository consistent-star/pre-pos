'use strict';

function createUpdatedCollection(collectionA, objectB) {
  // 在此写代码
  var result = [];
  var d = true;

  collectionA.forEach(
    function compare(element){
      for(var i = 0; i < objectB.value.length; i++){
        if(element.key === objectB.value[i]){
          if(element.count >= 3){
            result.push({key:element.key,count:element.count-parseInt(element.count/3)});
          }

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
