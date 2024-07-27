console.log('Hellou :3')

/*

1. MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.

2. MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

3. MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

DATI PER ESERCIZIO:

Name            Role                    Image
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

*/

// creo un array con gli oggetti
const ourTeam = [

    // creo gli oggetti
    person1 = {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    person2 = {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    person3 = {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    person4 = {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    person5 = {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    person6 = {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },

];

// aggiungo il container
const teamContainer = document.getElementById('myContainer')

// creo il ciclo che mi legga il contenuto dell'array, in particolare gli oggetti ed il loro contenuto
for (let i = 0; i < ourTeam.length; i++) {
    // stampo in pagina gli oggetti
    console.log(ourTeam[i])

    // stampo in pagina i singoli contenuti degli oggetti
    console.log(ourTeam[i].name)
    console.log(ourTeam[i].role)
    console.log(ourTeam[i].image)

    // stampo in paginna la card
    teamContainer.innerHTML += `
        <div class="col mb-5 text-start">
            <div class="card" style="width: 18rem;">

                <img class="rounded-top" src="./img/${ourTeam[i].image}">

                    <div class="card-body">
                        <h5 class="card-title fw-bold">${ourTeam[i].name}</h5>
                        <p class="card-text">I'm a nice and friendly person, like all the other members of the team.</p>
                    </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item fw-bold">${ourTeam[i].role}</li>
                </ul>

            </div>
        </div>
       `
};