<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import user from "../stores/user";

  onMount(() => {
    user.subscribe(data => {
      if (!data.token) goto("/auth/login");
    });
  });
</script>
