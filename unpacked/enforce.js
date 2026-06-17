const listSafe = await chrome.storage.sync.get(["URLS"]);
SafeUrls = listSafe.URLS
let currentUrl = window.location.href()
if currentUrl == "https://www.duckduck.go" {
  // Parse a full URL string
  const url = new URL("duckduckgo.com");
  url.protocol = "https://"
  url.hostname = "safe.duckduckgo.com"; // Changes DNS to safe search
}
