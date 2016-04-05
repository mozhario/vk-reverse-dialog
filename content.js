function getStyle(el, cssprop){
	if (el.currentStyle) //IE
		return el.currentStyle[cssprop]
	else if (document.defaultView && document.defaultView.getComputedStyle) //Firefox
		return document.defaultView.getComputedStyle(el, "")[cssprop]
	else //try and get inline style
		return el.style[cssprop]
}

//var list = document.querySelector('.im-page--dialogs')
var dialog= document.querySelector('.im-page--history._im_page_history')

var margin = getStyle(dialog, 'margin-left')

var sheet = window.document.styleSheets[0]
sheet.insertRule('.im-page--history { margin-left: 0; margin-right: ' + margin + '}', sheet.cssRules.length)
sheet.insertRule('.im-page--dialogs { float: right; }', sheet.cssRules.length)
