import { writable } from "svelte/store";

const user = writable({});

if (typeof localStorage !== "undefined" && localStorage.getItem("user")) {
  user.set(JSON.parse(localStorage.getItem("user")));
}

export default user;
