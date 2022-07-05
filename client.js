const d = (e) => {
  return document.getElementById(e);
};
function cefh(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
d("p-search").innerHTML = `<a href="/search"> search</a>`;
d("p-wikibase-otherprojects").remove();
d("p-lang").remove();
d("p-tb").remove();
d("coll-download-as-rl").remove();
let a = `<nav id="p-sharepage" class="mw-portlet mw-portlet-coll-print_export vector-menu vector-menu-portal portal" aria-labelledby="p-coll-print_export-label" role="navigation"><h3 id="p-coll-print_export-label" class="vector-menu-heading "><span class="vector-menu-heading-label">WikiFWD</span></h3><div class="vector-menu-content"><ul class="vector-menu-content-list"><li id="t-share" class="mw-list-item"><a class="secondary" onclick="w(event)" href="mailto:?subject=wikiFWD&body=Hey%2C%20check%20out%20wikiFWD%2C%20the%20cool%20new%20tool%20to%20avoid%20Wikipedia%20censorship!%0Ahttps%3A%2F%2Fwikifwd.glitch.me">sharing is caring</a></li></ul><ul class="vector-menu-content-list"><li id="t-source" class="mw-list-item"><a href="https://glitch.com/edit/#!/wikifwd">source code</a></li></ul></div></nav>`;
d("mw-panel").innerHTML = d("mw-panel").innerHTML + a;
function w(e) {
  if (navigator.share) {
    e.preventDefault();
    navigator
      .share({
        title: "wikiFWD",
        text: "A simple node app to prevent Wikipedia censorship",
        url: "https://wikifwd.glitch.me",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}
