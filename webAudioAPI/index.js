/*Создаем основные переменные*/
let body, num, array, width, context, logo, myElements, analyser, src, height

/*Записываем в переменную body элемент body*/
body = document.querySelector('body')

/*Указываем количество стобиков наиндикаторе*/
num = 32

/*Создаем массив*/
array = new Uint8Array(num * 2)

/*Указываем длину стобиков в px*/
width = 10;

/*При нажатии на кнопку мыши в документе*/
window.onclick = function () {

  if (context) return;

  /*Удаляем элемент с текстом*/
  body.querySelector('h1').remove()

  /*Прописываем цикл, внтури которого будем создавать элементы наших столбиков*/
  for (let i = 0; i < num; i++) {
    logo = document.createElement('div')
    logo.className = 'logo'
  }
}




