function symmetricDifference(arr1, arr2) {
	return arr1
		.filter(x => !arr2.includes(x))
		.concat(arr2.filter(x => !arr1.includes(x)))
}

const arr1 = [1, 2, 'a']
const arr2 = [1, 3, 'b']

console.log(symmetricDifference(arr1, arr2))