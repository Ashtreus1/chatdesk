import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_DUQ9axT8.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DaNCqvvy.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/keiru/Documents/chatdesk/","cacheDir":"file:///home/keiru/Documents/chatdesk/node_modules/.astro/","outDir":"file:///home/keiru/Documents/chatdesk/dist/","srcDir":"file:///home/keiru/Documents/chatdesk/src/","publicDir":"file:///home/keiru/Documents/chatdesk/public/","buildClientDir":"file:///home/keiru/Documents/chatdesk/.amplify-hosting/static/","buildServerDir":"file:///home/keiru/Documents/chatdesk/.amplify-hosting/compute/default/","adapterName":"astro-aws-amplify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/bot-reply","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/bot-reply\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"bot-reply","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/bot-reply.ts","pathname":"/api/bot-reply","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blogs.CVHgE42j.css"}],"routeData":{"route":"/blogs/[slug]","isIndex":false,"type":"page","pattern":"^\\/blogs\\/([^/]+?)\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blogs/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blogs.CVHgE42j.css"}],"routeData":{"route":"/blogs","isIndex":false,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blogs.CVHgE42j.css"}],"routeData":{"route":"/chats/[ticketid]","isIndex":false,"type":"page","pattern":"^\\/chats\\/([^/]+?)\\/?$","segments":[[{"content":"chats","dynamic":false,"spread":false}],[{"content":"ticketId","dynamic":true,"spread":false}]],"params":["ticketId"],"component":"src/pages/chats/[ticketId].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blogs.CVHgE42j.css"}],"routeData":{"route":"/support","isIndex":false,"type":"page","pattern":"^\\/support\\/?$","segments":[[{"content":"support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support.astro","pathname":"/support","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blogs.CVHgE42j.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/keiru/Documents/chatdesk/src/pages/blogs/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blogs/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/keiru/Documents/chatdesk/src/pages/chats/[ticketId].astro",{"propagation":"none","containsHead":true}],["/home/keiru/Documents/chatdesk/src/pages/support.astro",{"propagation":"none","containsHead":true}],["/home/keiru/Documents/chatdesk/src/pages/blogs.astro",{"propagation":"none","containsHead":true}],["/home/keiru/Documents/chatdesk/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/bot-reply@_@ts":"pages/api/bot-reply.astro.mjs","\u0000@astro-page:src/pages/blogs/[slug]@_@astro":"pages/blogs/_slug_.astro.mjs","\u0000@astro-page:src/pages/blogs@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/chats/[ticketId]@_@astro":"pages/chats/_ticketid_.astro.mjs","\u0000@astro-page:src/pages/support@_@astro":"pages/support.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C8S9c0Su.mjs","/home/keiru/Documents/chatdesk/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cisy4YFS.mjs","/home/keiru/Documents/chatdesk/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/keiru/Documents/chatdesk/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DIDUY4an.mjs","@/react-components/CustomerChat":"_astro/CustomerChat.ItHJ_GgN.js","@/react-components/ChatPanel":"_astro/ChatPanel.CIY3eaw4.js","@/react-components/RequestTicketModal":"_astro/RequestTicketModal.CS2aW2WV.js","@/react-components/HeroImage":"_astro/HeroImage.B3oWem_N.js","@astrojs/react/client.js":"_astro/client.DdsPMDPS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/blogs.CVHgE42j.css","/favicon.svg","/image-hero.png","/_astro/ChatPanel.CIY3eaw4.js","/_astro/CustomerChat.ItHJ_GgN.js","/_astro/HeroImage.B3oWem_N.js","/_astro/MessageBox.YTdtkdn0.js","/_astro/RequestTicketModal.CS2aW2WV.js","/_astro/blogs.CkrUqZa7.css","/_astro/client.DdsPMDPS.js","/_astro/index.8GQRyBEI.js","/_astro/index.DH0ko44-.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/supabaseClient.-23kbNNv.js","/scripts/articles.js","/scripts/feedback.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"QmO6x7TlcerOb5tQCuTP2Sl9+iZn7d6iFMXXgiFsWxY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
