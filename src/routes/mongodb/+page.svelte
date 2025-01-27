<script lang="ts">
    import type { PageData } from './$types'
   
    let { data }: { data: PageData} = $props()
   </script>
   
   <h1>MongoDB connection page</h1>
   
   <p>Connection status: {data.status}</p>
   <p>Connection message: {data.message}</p>