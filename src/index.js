addEventListener("fetch", event => {
  event.respondWith(new Response("Hello from pixeldrain-proxy", { status: 200 }));
});
