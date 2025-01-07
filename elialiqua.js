var url = "https://example.com/search?query=hello world&sort=ascending";
var res = encodeURI(url);

console.log(res);
// Output: https://example.com/search?query=hello%20world&sort=ascending
