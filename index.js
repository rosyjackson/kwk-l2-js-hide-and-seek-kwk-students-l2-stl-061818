//Code your solution here

function getFirstSelector(selector) {
  return document.querySelector (selector)
}

function nestedTarget() {
<<<<<<< HEAD
  return document.getElementById('nested').querySelector('div.target')
  
}


function increaseRankBy(n) { 
  const lis = document.querySelectorAll('ul.ranked-list')
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
=======
  #"nested"
  ."target"
>>>>>>> 4ac25ca043a626c028df39047993c032849d186d
}