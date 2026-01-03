export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
