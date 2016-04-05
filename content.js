function getStyle(el, cssprop){
	if (el.currentStyle) 
		return el.currentStyle[cssprop]
	else if (document.defaultView && document.defaultView.getComputedStyle) 
		return document.defaultView.getComputedStyle(el, "")[cssprop]
	else 
		return el.style[cssprop]
}

//var list = document.querySelector('.im-page--dialogs')
var dialog= document.querySelector('.im-page--history._im_page_history')

var margin = getStyle(dialog, 'margin-left')

var sheet = window.document.styleSheets[0]
sheet.insertRule('.im-page--history { margin-left: 0 !important; margin-right: ' + margin + ' !important;}', sheet.cssRules.length)
sheet.insertRule('.im-page--dialogs { float: right !important; }', sheet.cssRules.length)