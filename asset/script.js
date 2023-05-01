/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
*/

const eleTeam = document.querySelector(".member_team")

const array = [
    {
        memberName: 'Wayne Barnett',
        memberRole: 'Founder & CEO',
        memberPic: `<img class= "w-100" src="asset/img/wayne-barnett-founder-ceo.jpg"`,
    },
    {
        memberName: 'Angela Caroll',
        memberRole: 'Chief Editor',
        memberPic: `<img class= "w-100" src="asset/img/angela-caroll-chief-editor.jpg"`,
    },
    {
        memberName: 'Walter Gordon',
        memberRole: 'Office Manager',
        memberPic: `<img class= "w-100" src="asset/img/walter-gordon-office-manager.jpg"`,
    },
    {
        memberName: 'Angela Lopez',
        memberRole: 'Social Media Manager',
        memberPic: `<img class= "w-100" src="asset/img/angela-lopez-social-media-manager.jpg"`,
    },
    {
        memberName: 'Scott Estrada',
        memberRole: 'Developer',
        memberPic: `<img class= "w-100" src="asset/img/scott-estrada-developer.jpg"`,
    },
    {
        memberName: 'Barbara Ramos',
        memberRole: 'Graphic Designer',
        memberPic: `<img class= "w-100" src="asset/img/barbara-ramos-graphic-designer.jpg"`,
    },
];

for (let key of array) {
	// key = è una delle chiavi di arrTeam
	console.log(key);
    eleTeam.innerHTML += 
    `<div class= "member_team c-12 col-lg-4 py-4"> 
        <div class= "text-center pb-4" style="background-color: white;">${key.memberPic}</div> 
        <div class= "name">${key.memberName}</div> 
        <div>${key.memberRole}</div> 
    </div>`;
}