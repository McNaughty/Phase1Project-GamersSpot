$(document).ready(function()
{
    $( 'li>a[id$="Container"]' ).click(function(event) 
    {
        event.preventDefault();
        var href = $(this).attr('href');
        alert("Loading " + href)
        $('#container').load(href);
        return false;
    });
});

// fetch game data

fetch("./gameList.json")
.then(function(response){
    return response.json()
})
.then(function(gameData){
    let placeholder = document.querySelector("#data-output");
    let output = "";
    for(let game of gameData){
        output += `
        <tr>
        <td>${game.id}</td>
        <td><img src='${game.poster}'></td>
        <td>${game.title}</td>
        <td>${game.publisher}</td>
        <td>${game.genre}</td>
        <td>${game.status}</td>
        <td>${game.steamurl}</td>
        
        </tr>
        
        `;
    }

    placeholder.innerHTML = output;
})