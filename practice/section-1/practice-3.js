'use strict';

function collectSameElements(collectionA, objectB) {
//  在这里写代码
    let elements=[];
    let collectionB=objectB.value;
    for(let i=0;i<collectionA.length;i++)
    {
        for(let j=0;j<collectionB.length;j++)
        {
            if(collectionA[i]==collectionB[j])
            {
                elements.push(collectionA[i])
                break;
            }
        }
    }
    return elements;
}
