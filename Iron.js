class Iron {
	constructor(x, y) {
	  var options = {
		'density':0.8,
		'friction': 1.0,
		'restitution':0.5
	  };
	  this.body = Bodies.rectangle(x, y, 100, 100, options);
	  this.width = 70;
	  this.height = 80;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;

	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  strokeWeight(3);
	  stroke('white')
	  fill('brown')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };