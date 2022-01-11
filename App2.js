let listRank = [
	{
		name: 'Arsenal',
		point: 99,
		GD: 45
	},
	{
		name: 'Chelsea',
		point: 75,
		GD: 39
	},
	{
		name: 'Manchester United',
		point: 75,
		GD: 39
	},
	{
		name: 'Liverpool',
		point: 88,
		GD: 39
	}
]

function sortListRank(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i].point < arr[j].point) {
				;[arr[i], arr[j]] = [arr[j], arr[i]]
				continue
			}

			if (arr[i].point == arr[j].point && arr[i].GD < arr[j].GD) {
				;[arr[i], arr[j]] = [arr[j], arr[i]]
				continue
			}

			if (arr[i].point == arr[j].point && arr[i].GD == arr[j].GD) {
				;[arr[i], arr[j]] = [arr[i], arr[j]].sort((a, b) =>
					a.name.localeCompare(b.name)
				)
			}
		}
	}

	return arr
}

console.log(sortListRank(listRank))