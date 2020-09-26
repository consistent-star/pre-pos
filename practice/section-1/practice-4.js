'use strict';

function collectSameElements(collectionA, objectB) {
//  在这里写代码
    let elements=[];
    let collectionB=objectB.value;
    for(var i=0;i<collectionA.length;i++)
    {
      for(var j=0;j<collectionB.length;j++)
      {
        if (collectionA[i].key == collectionB[j]) 
        {
          elements.push(collectionB[j]);
          break;
        }
      }
    }
    return elements;

	
}
