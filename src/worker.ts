interface Env {
  ASSETS: Fetcher;
}

const resumeUrl = "https://drive.google.com/file/d/1WWMIGpjEJwXdqxdFY1JwCvS2OJ0LZy9W/view?usp=sharing";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const hostHeader = request.headers.get("host");
    const hostname = hostHeader ? hostHeader.replace(/:\d+$/, "") : url.hostname;

    const redirectHosts = new Set(["www.maxarias.com", "max-arias.com", "www.max-arias.com"]);

    if (redirectHosts.has(hostname.toLowerCase())) {
      url.protocol = "https:";
      url.hostname = "maxarias.com";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/resume" || url.pathname === "/resume/") {
      return Response.redirect(resumeUrl, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
