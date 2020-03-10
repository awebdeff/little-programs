const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement
  this.words = words
  this.wait = wait
  this.wordIndex = 0
  this.txt = ''
  this.isDeleting = false
  this.type()
}

TypeWriter.prototype.type = function () {
  let speed = 500
  let currentIndex = this.wordIndex % this.words.length
  let currentWord = this.words[currentIndex]

  if (this.isDeleting) {
    speed = speed / 2
    this.txt = currentWord.su
  } else {
    speed = 500
  }

  setTimeout(() => this.type(), speed)
}

document.addEventListener('DOMContentLoaded', init)

function init() {
  let txtElement = document.querySelector('.text')
  let words = JSON.parse(txtElement.getAttribute('data-words'))
  let wait = txtElement.getAttribute('data-wait')

  new TypeWriter(txtElement, words, wait)

}