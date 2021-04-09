import ml5 from 'ml5'

let first
let scend
let firstImg
let scendImg 
let thirdImg 
let btn
let styler
window.onload = function () {
    first = document.getElementById('choose-first')
    scend = document.getElementById('choose-scend')
    firstImg = document.getElementById('first-img')
    scendImg = document.getElementById('scend-img')
    thirdImg = document.getElementById('third-img')
    btn = document.getElementById('btn')
    btn.addEventListener('click',styleChange,false)
    first.onclick = function (e) {
        var img = e.target
        if (img && img.className.indexOf('choose-img')>-1) {
            firstImg.setAttribute('src',img.getAttribute('src'))
        }
    }
    scend.onclick = function (e) {
        var img = e.target
        if (img && img.className.indexOf('choose-img')>-1) {
            scendImg.setAttribute('src',img.getAttribute('src'))
        }
    }
}

const styleChange = async _=>{
    await loadingStyle()
    console.log('转换中')
    styler.transfer(firstImg,function(err,res){
        thirdImg.setAttribute('src',res.src)
    })
}

function loadingStyle(){
    return new Promise((reslove,reject)=>{
        styler = ml5.styleTransfer('models/wave',function(){
            reslove()
            console.log('加载成功');
        })
    })
}