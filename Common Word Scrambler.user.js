// ==UserScript==
// @name Common Word Scrambler
// @version 0.2
// @updateURL https://github.com/GittyLitter/word-scrambler/raw/master/Common%20Word%20Scrambler.user.js
// @include *
// ==/UserScript==

(function() {
 var textnodes = document.evaluate("//body//text()[not(ancestor::script) and not(ancestor::style)]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),
 node, text;
 var sites = new Array(" at ", " by ", " for ", " from ", " in ", " onto ", " of ", " to ", " with ", " the ", " and ", " or ", " a ", " into ", " if ");
 for(var i = 0; i < textnodes.snapshotLength; i++) {
 node = textnodes.snapshotItem(i);
 text = node.data;
 text = text.replace(/ at /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ by /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ to /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ in /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ of /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ the /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ with /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ onto /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ for /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ from /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ and /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ or /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ a /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ into /i, sites[Math.round(Math.random()*(sites.length-1))]);
 text = text.replace(/ if /i, sites[Math.random(Math.random()*(sites.length-1))]);
 node.data = text;
 }
}).call(this);
