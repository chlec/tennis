/*
** Cette fonction retourne la liste de tout les tennis sous un tableau dans la console.
** Ça permet de savoir comment est appelé chaque tennis dans leur base de donnée.
*/

const fetch = require('isomorphic-fetch')

function getArray(url) {
	return new Promise(accept => {
		fetch(url, {
			method: "POST"
		})
			.then(response => response.json())
			.then(accept)
	})
} 

(async function() {
	let all_tennis = []
	let arr;

	for (const letter of "abcdefghijklmnopqstuvwyx") {
		arr = await getArray(`https://tennis.paris.fr/tennis/rest/adrauto/${letter}?onlyTennis=false`)
		if (Array.isArray(arr))
			all_tennis = all_tennis.concat(arr)
	}

	all_tennis = all_tennis.filter(({ id }, i, arr) => {
	const findIndex = arr.findIndex(tennis => tennis.id === id)
		if (findIndex > -1 && findIndex !== i)
			return false
		return true
	}).map(({ id }) => id)

	console.log(all_tennis)
})()



