export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      const newUrl = new URL(request.url);
      newUrl.pathname = url.pathname.slice(0, -1);
      return Response.redirect(newUrl.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
