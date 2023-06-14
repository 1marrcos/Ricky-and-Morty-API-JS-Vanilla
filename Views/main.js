const input = document.getElementById('input-search');

function search()
{
    getCharacter(input.value);
    input.value= "";
}

function getCharacter(value)
{
    const request = fetch(`https://rickandmortyapi.com/api/character/${value}`);

    const result = request.then(x => x.json())
    .then(item => {
        let id = item.id;
        let name = item.name;
        let image = item.image;

        document.getElementById("character-id").innerHTML = id;
        document.getElementById("character-name").innerHTML = name;
        document.getElementById("character-image").src = image;

        console.log(name);

    });

}