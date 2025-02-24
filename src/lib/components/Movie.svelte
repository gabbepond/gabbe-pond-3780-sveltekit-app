<script lang="ts">
    let {title, year, poster} = $props();
    </script>
    
    <div
    class="card card-hover m-4 block max-w-xs divide-y overflow-hidden border-[1px] p-2 border-surface-200-800 divide-surface-200-800 preset-filled-surface-100-900"
    >
    <h2 class="text-lg">{title}</h2>
    <h3 class="text-sm">{year}</h3>
    
    <img src={poster} alt={title} />
    </div>