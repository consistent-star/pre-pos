'use strict';

function collectSameElements(collectionA, collectionB) {
//  在这里写代码
        let elements=[];
        let k=0;
        collectionB=collectionB[0];
        for(let i = 0; i<collectionA.length ; i++)
        {
        for(let j = 0; j<collectionB.length ; j++)
        {
            if (collectionA[i] == collectionB[j])
            {
                elements[k]=collectionA[i];
                k++;
            }
        }
        }
        return elements;
	
}
