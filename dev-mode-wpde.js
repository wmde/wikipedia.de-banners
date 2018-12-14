// This is a "banner" for previewing banners in development mode on wikipedia.de

function getDevbanner() {
	    return location.search.match(/devbanner=(\w+)/)[1] || '';
}

$(function(){
    var container = $('body');
    var hostPort = window.location.host;
    var bannerName = getDevbanner();
    container.append( '<scr' + 'ipt src="//' + hostPort + '/loader.js">' );
    if ( bannerName ) {
    	container.append( '<scr' + 'ipt src="//' + hostPort + '/' + bannerName + '.js">' );
    }
});
