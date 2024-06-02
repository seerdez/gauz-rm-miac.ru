function download(fileName) {
  var element = document.createElement('a');
  element.setAttribute('href', fileName);
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}



