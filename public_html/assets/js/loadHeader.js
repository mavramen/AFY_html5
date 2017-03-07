function addToHeader() {
    var doc = document.querySelector('link[rel="import"]').import;
    var div = doc.querySelector('.header-includes');

    for (var child = div.firstChild; child !== null; child = child.nextSibling) {
        document.head.appendChild(child.cloneNode(true));
    }
}