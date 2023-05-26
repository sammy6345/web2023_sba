let chars = await fetch(`https://rickandmortyapi.com/api/character`);
let charadata = await chars.json();
const charcount = charadata['info']['count'];

async function getRandomIDs() {
    let charid = [];
    while (charid.length < 6 ) {
        let valid = true;
        let id = ( Math.floor(Math.random() * charcount ) + 1 )
        for (let i=0; i < charid.length; i++) {
            if ( charid[i] == id ) { valid = false }
        }
        if (valid) {
            charid.push(id)
        }
    }
    console.log("id's: ", charid)
    return charid;
}

export async function getCharInfo() {
    let charids = getRandomIDs();
    let characters = []
    // character will take ether 1,2,3 or [1,2,3] as valid id's
    let response = await fetch(`https://rickandmortyapi.com/api/character/${charids}`)
    let charinfo = await response.json();
    for (let i=0;i<charinfo.length;i++) {
        characters = { 
            "name": charinfo['name'],
            "image": charinfo['image'],
            "status": charinfo['status'],
            "species": charinfo['species'],
            "location": charinfo['location']//, "first": charinfo['episode'][0]
        }
    }
    return characters;
}