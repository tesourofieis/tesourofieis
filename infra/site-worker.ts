// Edge worker in front of the static assets. With runWorkerFirst every
// request passes through here before the asset layer.
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const APEX = "tesourofieis.com";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // www → apex, permanent.
    if (url.hostname === `www.${APEX}`) {
      url.hostname = APEX;
      return Response.redirect(url.toString(), 301);
    }

    // Trailing slash → no trailing slash, permanent (parity with the old
    // functions/_middleware.js Pages handler).
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    // Expo's static export emits its not-found page as `+not-found.html`
    // rather than `404.html`, so serve it explicitly with a 404 status.
    const notFound = await env.ASSETS.fetch(new URL("/+not-found.html", request.url));
    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    });
  },
};
