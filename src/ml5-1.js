/*
 * @Author: zihao.chen
 * @Date: 2021-03-24 15:58:05
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-03-25 16:40:29
 * @Description: 
 */
import ml5 from 'ml5'

document.getElementById('file').addEventListener('change',fileChanged,false)
document.getElementById('button').addEventListener('click',classify,false)
function fileChanged(e){
  var file = e.target.files[0]
  if(!file) return
  var reader = new FileReader()
  reader.onload = function(e){
    document.getElementById('image').setAttribute('src',e.target.result)
  }
  reader.readAsDataURL(file)
}

var modeLoaded = false
// // ml5
var classifier = ml5.imageClassifier('MobileNet',function(res){
  document.getElementById('result').innerHTML=res
  modeLoaded = true
})
export function classify(){
  if(!modeLoaded) return
  classifier.classify(document.getElementById('image'),function(err,res){
  document.getElementById('result').innerHTML=JSON.stringify(res)
  })
}