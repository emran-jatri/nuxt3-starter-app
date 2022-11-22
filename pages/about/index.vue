<template>
  <div class="bg-gray-100 h-screen flex justify-center items-center">
    <div class="h-96 w-96 bg-white p-5 rounded-2xl shadow-xl">
      <Welcome pageName="About" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "About Page",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});
const route = useRoute();

console.log(route);
console.log("fullPath", route.fullPath);
console.log("hash", route.hash);
console.log("matched", route.matched);
console.log("meta", route.meta);
console.log("name", route.name);
console.log("params", route.params);
console.log("path", route.path);
console.log("query", route.query);
console.log("redirectedFrom", route.redirectedFrom);

// redirect
// passing 'to' as a string
// setTimeout(async () => {
//   await navigateTo("/");
// }, 3000);

// // ... or as a route object
// await navigateTo({ path: '/search' })
// // ... or as a route object with query parameters
// await navigateTo({
//   path: '/search',
//   query: {
//     page: 1,
//     sort: 'asc'
//   }
// })
</script>
