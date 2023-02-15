<script>
    import { onMount } from 'svelte';
  
    export let center = [0, 0];
    export let zoom = 1;
    export let apiKey = '';
  
    let map;
  
    onMount(() => {
      // Load the map
      map = L.map('map', {
        center,
        zoom
      });
  
      // Add the map tiles
      const tileUrl = `https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${apiKey}`;
      const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(map);
    });
  </script>
  
  <style>
    #map {
      height: 500px;
    }
  </style>
  
  <div id="map"></div>
  