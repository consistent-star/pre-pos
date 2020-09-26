'use strict';

function createUpdatedCollection(collectionA, objectB) {
 // 在此写代码
 var result = [];
 var collection_c = [];
 var count = 1;

 for(var i = 0; i < collectionA.length; i++){
   if(collectionA[i] === collectionA[i+1]){
     count++;
   }else{
     collection_c.push({key:collectionA[i], count:count});
     count = 1;
   }
 }

 collection_c.forEach(//element 数组中的每个元素
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
