<script>

    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    const location_id = $page.url.searchParams.get('id');
    console.log(location_id);

    let name;
    let type;
    let dimension;
    let residents = 0;
    onMount( async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/location/${location_id}`)
        const data = await res.json();
        console.log(data)
        name = data['name'];
        type = data['type'];
        dimension = data['dimension'];
        residents = data['residents'].length
    })
    

    //Name
    //Type | Dimension
    //No. of residents.

</script>

<div>
    <h1>{ name }</h1>
    <h3>{ type } | { dimension }</h3>
    <h5>{ residents } residents</h5>
</div>