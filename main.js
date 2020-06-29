const bodyElement = document.querySelector("body")
const mainElement = document.createElement('main')
bodyElement.append(mainElement)
const button = document.createElement('button')
const linkElement = document.createElement('a')
let img = document.createElement("img")
img. src = "https://free4kwallpapers.com/uploads/originals/2015/10/03/what-a-natural-beauty--.jpg";
bodyElement.append(button)
mainElement.append(img)
const src = document.createTextNode ("pic")
linkElement.append(src)
linkElement.href = "https://free4kwallpapers.com/uploads/originals/2015/10/03/what-a-natural-beauty--.jpg"

mainElement.append(linkElement)
const buttonText = document.createTextNode("remove")
button.append(buttonText)

button.addEventListener('click', function() {
mainElement.remove()

})


















