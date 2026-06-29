const listSafe = await chrome.storage.sync.get(["URLS"]);
SafeUrls = listSafe.URLS
let currentUrl = window.location.href()
if (currentUrl == "https://www.duckduck.go") {
  // Parse a full URL string
  const url = new URL("duckduckgo.com");
  url.protocol = "https://";
  url.hostname = `safe.${url.hostname}`; // Changes DNS to safe search
  url.searchParams.set("pk", 1);
  const safeURL  = url.toString();
  window.location.assign(safeURL)
}
