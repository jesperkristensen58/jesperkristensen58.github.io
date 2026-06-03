// Progressive enhancement only — the page is fully functional without JS.
// Keep the footer copyright year current.
(function () {
  var el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
})();
