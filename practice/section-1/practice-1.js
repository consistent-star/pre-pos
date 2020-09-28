'use strict';

function collectSameElements(collectionA, collectionB) {
	let elements =[];
	let k=0;
	for (let i = 0; i < collectionA.length; i++) {
	for (let j = 0; j < collectionB.length; j++) {
	if (collectionA[i] == collectionB[j])
	{
		elements[k]=collectionA[i];
		k++;
	}
}
}
return elements;
  


}
