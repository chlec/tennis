const validTennis = [
    'Alain Mimoun',
    'Amandiers',
    'Atlantique',
    'Aurelle de Paladines',
    'Bertrand Dauvin',
    'Candie',
    'Carnot',
    'Château des Rentiers',
    'Elisabeth',
    'Moureu - Baudricourt',
    'Paul Barruel',
    'Porte de Bagnolet',
    'Sablonnière',
    'Cordelières',
    'Courcelles',
    'Croix Nivert',
    'Docteurs Déjerine',
    'Georges Carpentier',
    'Dunois',
    'La Faluère',
    'Jules Ladoumègue',
    'Léo Lagrange',
    'Philippe Auguste',
    'Rigoulot - La Plaine',
    'Suzanne Lenglen',
    'Henry de Montherlant',
    'Thiéré',
    'Jandelle',
    'Jesse Owens',
    'Edouard Pailleron',
    'Louis Lumière',
    'Max Rousié',
    'Poissonniers',
    'Poliveau',
    'Poterne des Peupliers',
    'Valeyre',
    'Niox',
    'Puteaux'
] // Pour actualiser, executer "node get_tennis_name"

const tennis = {
    loginUrl: 'https://moncompte.paris.fr/moncompte/jsp/site/Portal.jsp?page=myluteceusergu&view=createAccount#auth',
    username: 'xxxxxx@gmail.com',
    password: 'xxxxxxxxxxxx',
    tennisSearchUrl: 'https://tennis.paris.fr/tennis/jsp/site/Portal.jsp?page=recherche&view=recherche_creneau',
    chosenTennis: 'Jandelle',
    hourRange: '18-19', // Au fomat HEURE-HEURE. Le bot selectionnera le premier dispo
    terrain: "COUVERT", // COUVERT ou DÉCOUVERT
    mate: {
        name: "Dupont",
        firstname: "Jean"
    }
}

module.exports = tennis