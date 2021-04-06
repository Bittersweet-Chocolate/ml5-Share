window.onload = function () {
    var first = document.getElementById('choose-first')
    var scend = document.getElementById('choose-scend')
    var firstImg = document.getElementById('first-img')
    var scendImg = document.getElementById('scend-img')
    first.onclick = function (e) {
        var img = e.target
        if (img && img.className === 'choose-img') {
            firstImg.style.backgroundImage = document.defaultView.getComputedStyle(img, null)['backgroundImage']
        }
    }
    scend.onclick = function (e) {
        var img = e.target
        if (img && img.className === 'choose-img') {
            scendImg.style.backgroundImage = document.defaultView.getComputedStyle(img, null)['backgroundImage']
        }
    }
}