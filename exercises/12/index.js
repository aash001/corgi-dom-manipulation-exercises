const body = document.body
const div = document.querySelector('div')
const ul = document.createElement('ul')
const li = document.createElement('li')

li.textContent = 'Kiki'

body.append(ul)
ul.append(li)
div.append(ul)