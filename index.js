const Nightmare = require('nightmare')
const tennis = require('./config.js')

const nm = new Nightmare({
	waitTimeout: 1000000
})

nm
	.goto(tennis.loginUrl)
	.type('#username-login', tennis.username)
	.type('#password-login', tennis.password)
	.click('.btn-connexion')
	.wait(500)
	.goto(tennis.tennisSearchUrl)
	.wait(1500)
	.evaluate(tennis => {
		$(':checkbox.checkClass').prop('checked', true);
		$('#hourRange').val(tennis.hourRange);
		$('.date-item').first().click();

		selectedTennisMap = tennis.chosenTennis;

		addTennisInCache(selectedTennisMap);
		$('#rechercher').click();
		return false;
	}, tennis)
	.wait(1500)
	.evaluate(() => document.querySelectorAll('.date-item')[6].click())
	.wait('.panel-group > .panel:last-child')
	.click('.panel-group > .panel:last-child')
	.wait(500)
	.evaluate(tennis => {
		$('.panel.panel-default').last().find('.row.tennis-court').each((_, el) => {
			if (el.innerText.indexOf(tennis.terrain) > -1) {
				el.querySelector('button').click()
				return false
			}
		})
	}, tennis)
	.wait(2000)
	.wait('.name > input')
	.type('.name > input', tennis.mate.name)
	.type('.firstname > input', tennis.mate.firstname)
	.wait(500)
	.click('button[name="submitControle"]')
	.wait(2000)
	/*

	** On ne fait pas la partie ci-dessous car elle redirige vers la page de paiement,
	** en me connectant à un navigateur normal après, le paiement est bloqué car il est considéré
	** comme étant en cours de traitement. Je vais essayer à l'avenir d'automatiser ce processus
	** directement sur le bot.

	.click('[nbtickets="1"]')
	.wait(250)
	.click('button[name="submit"]')
	.wait(1500)*/
	.end()
	.then(() => {
		console.log("Votre tennis est réservé. Vous devez confirmer la réservation manuellement en vous connectant sur le site.")
	})
	.catch((err) => {
		console.log("L'erreur:", err, "est survenue.")
	})
