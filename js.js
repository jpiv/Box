var MAINR = [];
var ctx;
var	wid;
var	hei;
var busy = false;

function draw()
{

	ctx = document.getElementById("can");
	wid = $('body').width();
	hei = $('body').height() - ($('#coms').position().top + $('#coms').height());
	console.log();
	ctx.width = wid;
	ctx.height = hei;
	ctx = ctx.getContext('2d');
	ctx.fillRect(0,hei*.9,wid,3);
	MAINR = [wid/2-5,hei*.9-10,10,10];
	ctx.fillRect(MAINR[0],MAINR[1],MAINR[2], MAINR[3]);

	var commands = {

			'print': print,
			'grow': grow,
			'shrink': shrink,
			'be cool': beCool,
			'clear': clear,
			'shatter': shatter

	};	
	console.log(annyang);
	annyang.start();
	annyang.debug();
	annyang.addCommands(commands);

}

function shatter()
{
	grow(MAINR[3]*12);

	var PARTICLES = 400;
	var pieces = [];
	var sizeW = 0;
	var sizeH = 0;
	var timeID = 0;

	timeId = setInterval(function ()
		{
			if(!busy)
			{

				sizeW = MAINR[2] / 20;
				sizeH = MAINR[3] / 20;
				fullClear();
				clearInterval(timeId);
				for(var i = 0; i <= 20; i++)
				{
					for(var j = 0; j <= 20; j++)
					{
						pieces[i+j] = [MAINR[0] + j * sizeW, MAINR[1] + i * sizeH, sizeW, sizeH];
						ctx.fillRect(pieces[i+j][0], pieces[i+j][1]-50, pieces[i+j][2]-2, pieces[i+j][3]-2);
					}
				}
			}
		}, 250)

}

function fullClear()
{
	ctx.clearRect(0,0,wid,hei);
	ctx.fillRect(0,hei*.9,wid,3);
}

function clear()
{
	ctx.clearRect(0,0,wid,hei);
	ctx.fillRect(0,hei*.9,wid,3);
	MAINR = [wid/2-5,hei*.9-10,10,10];
	ctx.fillRect(MAINR[0],MAINR[1],MAINR[2], MAINR[3]);
}

function wait()
{
	if(!busy)
		return;
	else
		setTimeout(wait(),1500);
}

function beCool()
{
	clear();
	grow(MAINR[3]*12);
	var id = setInterval(function(){
		if(!busy){
	ctx.clearRect(MAINR[0]+1,MAINR[1]+2,MAINR[2]-2, MAINR[3]-2);
	MAINR[2] /= 1.025;
	MAINR[3] /= 1.025;
	MAINR[0] = wid/2 - MAINR[2]/2
	MAINR[1] = hei*.9-MAINR[3]
	ctx.fillRect(MAINR[0],MAINR[1],MAINR[2], MAINR[3]);
	}
	if (MAINR[3] <= 10) {
		clearInterval(id);
	};

	}, 10);
	
}

function shrink(){
	busy = true;
	var id = setInterval(function(){
	ctx.clearRect(MAINR[0]-1,MAINR[1]-2,MAINR[2]+2, MAINR[3]+2);
	MAINR[2] /= 1.025;
	MAINR[3] /= 1.025;
	MAINR[0] = wid/2 - MAINR[2]/2
	MAINR[1] = hei*.9-MAINR[3]
	ctx.fillRect(MAINR[0],MAINR[1],MAINR[2], MAINR[3]);
	if (MAINR[3] <= 10) {
		clearInterval(id);
		busy = false;
	};

	}, 10);
	
}

function grow(ovr)
{

	busy = true;
	var orig = ovr | MAINR[3]; 
	var id = setInterval(function(){
	ctx.clearRect(MAINR[0],MAINR[1],MAINR[2], MAINR[3]);
	MAINR[2] *= 1.025;
	MAINR[3] *= 1.025;
	MAINR[0] = wid/2 - MAINR[2]/2
	MAINR[1] = hei*.9-MAINR[3]
	ctx.fillRect(MAINR[0],MAINR[1],MAINR[2], MAINR[3]);
	if (MAINR[3] > orig*3) {
		clearInterval(id);
		busy = false;
	};

	}, 10);
	
}

var print = function()
{
	console.log("Hi");

}