'use strict';

function collectSameElements(collectionA, collectionB) {
	let elements =[];
	var k=0;
	for (var i = 0; i < collectionA.length; i++) {
	for (var j = 0; j < collectionB.length; j++) {
	if (collectionA[i] == collectionB[j])
	{
		elements[k]=collectionA[i];
		k++;
	}
}
}
return elements;
  


}
