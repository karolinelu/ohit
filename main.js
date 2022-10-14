title = "O HIT";

description = `
[TAP] STOP
`;

characters = [];
let colors = ['red', 'purple'];

options = {
	theme: "shapeDark",
	isReplayEnabled: true,
};

/** @type {{size: number, isIncreasing: boolean, isStopped: boolean}} */
let c;

let inner_c;
let c1;
let outer_c;
let c2;

function init_c(){
	c = {
		size: 5,
		isIncreasing: true,
		isStopped: false
	};
	return c;
}

function update() {
	if (!ticks) {
		c = init_c();
		inner_c = rnd(10, 45);
		outer_c = inner_c + 5;
		//c.isIncreasing = true;
	}
	color("black");
	arc(50, 50, c.size);

	// manage size of circle
	if (c.size >= 50) {
		c.isIncreasing = false;
	} else if (c.size < 2) {
		c.isIncreasing = true;
	}

	if (c.isIncreasing && !c.isStopped) {
		c.size+= difficulty;
	} 
	if (!c.isIncreasing && !c.isStopped) {
		c.size-= difficulty;
	}
	// stop when pressed
	if (input.isJustPressed){
		//c.isStopped = !c.isStopped; // change size of inner and outer instead
		if (c.size > outer_c 
			|| c.size < inner_c){
				end();
		} else {
			c = init_c();
			inner_c = rnd(10, 45);
			outer_c = inner_c + 7;
			addScore(10);
			color('black');
			particle(50, 50, 100, 3);
	

		}
	}
	color(colors[rndi(0,2)]);
	c1 = arc(50, 50, inner_c, 2);
	c2 = arc(50, 50, outer_c, 2);

	// check if within bounds
}
addEventListener("load", onLoad);