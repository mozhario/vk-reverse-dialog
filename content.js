var margin = '317px'
var customStyles = document.createElement('style'); 
customStyles.innerHTML = 
    '.im-page--history { '+ 
    	'margin-left: 0 !important; ' +
    	'margin-right: ' + margin + ' !important;' +
    '}' +
    '.im-page--dialogs { ' +
    	'float: right !important; ' +
    '}';
document.documentElement.insertBefore(customStyles, null);