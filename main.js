
console.log("I miss you Viktoria and i love you <3");
function YTFilter() {
    var blacklist = [
        'Krass Schule - Die jungen Lehrer',
        'Hilf Mir! Jung, pleite, verzweifelt',
        '#Mentale Zuflucht',
        'Julienco',
        'Das Supertalent',
        'taff',
        'Simon Desue',
        'xLaeta',
        'DieLochis',
        'JERYKO',
        'Promiflash',
        'Paluten',
        'Wissenswert',
        'Troom Troom De',
        'rezo',
        'Deutschland sucht den Superstar',
        'Klinik am Südring',
        'RayFox',
        'SCHLAUSCHLEIM SAM',
        'DREAM',
        'RTL2',
        'Julien Bam',
        'Team Harrison',
        'Köln 50667',
        'YTITTY',
        'BibisBeautyPalace',
        'Mavie Noelle',
        'EnisaDesue',
        'izzi',
        'RedSama',
        'ScorpionPlayz',
        'LUCA',
        'Tag & Nacht',
        'Bonnytrash',
        'Rebekah Wing',
        'Ruhrpottwache'
    ];
    

    
	var c = document.querySelectorAll("[id]");
	for (var i = 0, len = c.length; i < len; i++) {
		var block = c[i];
		if (block.id.indexOf("dismissable") > -1) {
                
            for (var k = 0, klen = blacklist.length; k < klen; k++) {
                if (c[i].innerHTML.indexOf(blacklist[k]) !== -1) {
                    block.innerHTML = '<div class="filtert"><b><h1><center>Dieser Inhalt wurde entfernt! <font color="red">' + blacklist[k] + '</font></center></h1></b></div>';
                }
            }
		}
	}
}

window.setInterval(function(){
    YTFilter();
 // YTFilter();
}, 1000);