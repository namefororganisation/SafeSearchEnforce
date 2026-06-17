// Parse a full URL string
const url = new URL("duckduckgo.com");

// Read or modify individual components

url.hostname = "safe.duckduckgo.com"; // Changes host name
url.pathname = "/v2/users";       // Modifies path
url.port = "9000";                // Updates port
url.hash = "download";            // Changes fragment/anchor

// Output the complete modified URL string
console.log(Url.toString()); 
// Output: "https://example.com"
