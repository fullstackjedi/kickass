<script>
  let firstname = "Emmax";
  let lastname = "Aneri";
</script>

<h1>{`${firstname} ${lastname}`}</h1>
<input type="text" bind:value={firstname} />
<input type="text" bind:value={lastname} />
