<style>

    .grid{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:30px;
    }

    .card{
        background:#333;
        overflow:hidden;
        height:240px;
        display:flex;      
        border-radius:20px;  
    }

    .image{
        width:30%;
        background-image:url('https://rickandmortyapi.com/api/character/avatar/119.jpeg');
        background-size:cover;
        background-position:center;
    }

    .info{
        padding-left:20px;
        padding-right:20px;
        padding-top:10px;
        padding-bottom:15px;
    }

    .dead{
        background:firebrick;
        width:10px;
        height:10px;
        border-radius:100%;
        margin-right:10px;
    }

    .alive{
        background:lightgreen;
        width:10px;
        height:10px;
        border-radius:100%;
        margin-right:10px;
    }    
    .unknown{
        background:lightgrey;
        width:10px;
        height:10px;
        border-radius:100%;
        margin-right:10px;
    }

    .name{
        font-family:sans-serif;
        color:white;
    }

    .status{
        font-family:sans-serif;
        color:white;
        display:flex;
        align-items:center;
    }

    .locationLabel{
        color:#777;
        font-family:sans-serif;
        font-size:16px;
        margin:0 0 5px;        
    }

    .location{
        color:white;
        font-family:sans-serif;
        font-size:16px;
        margin-bottom:20px;
        margin-left:0;
        margin-right:0;
        margin-top:0;
        margin-bottom:5px;
    }

    .location a{
        color:white;
        font-family:sans-serif;
        font-size:16px;
        margin-bottom:20px;
        margin-left:0;
        margin-right:0;
        margin-top:0;
        margin-bottom:5px;
    }


</style>
<script>
    import { getCharInfo } from "./rickapi";
    let character = [];
    (async () => {character = await getCharInfo()} )
    console.log("Characters: ", character)
</script>
<!-- Svelte each loops? -->
<div class="grid">
    {#each {length: 6 } as i } <!-- https://stackoverflow.com/questions/58213585/svelte-3-how-to-loop-each-block-x-amount-of-times -->
    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">{character[i]['name']}</h1>
            <h3 class="status"><div class="dead"></div> {character['status']} - {character['species']}</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="location?id=${character['locaton']}">Citadel of Ricks</a></h3>
        </div>
    </div>    
    {/each}
    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="alive"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="unknown"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

</div>