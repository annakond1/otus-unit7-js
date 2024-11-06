const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5
}
let arr1 = Object.keys(scores).map(key => scores[key]);
//function getScore() {
//function getScore(...valuess) {
  //let sum = 0;
  //for(let i = 0; i < arr1.length; i++) {
    //if(arr1[i] > 0){
      //getScore = getScore + arr1[i]
    //}
  //}
  //return getScore
//}
//console.log(getScore())
//console.log(arr1)

//leg sum = 0;
//arr1.forEach(function (el) {
//sum = sum + el;
//});

function getScore(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum);
}

getScore(arr1)
