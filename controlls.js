class Controlls {
  constructor(side) {
    this.side = side;

    this.up = false;
    this.down = false;
  }

  update() {
    if (this.side === "right") {
      if (keys.arrowUp) {
        this.up = true;
      } else {
        this.up = false;
      }
      if (keys.arrowDown) {
        this.down = true;
      } else {
        this.down = false;
      }
    }

    if(this.side==="left"){
        if(keys.w){
            this.up=true
        }else{
            this.up=false
        }
        if(keys.s){
            this.down=true
        }else{
            this.down=false
        }
    }
  }
}

let keys = {
  w: false,
  s: false,
  arrowUp: false,
  arrowDown: false,
};

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 87:
      keys.w = true;
      break;
    case 83:
      keys.s = true;
      break;
    case 38:
      keys.arrowUp = true;
      break;
    case 40:
      keys.arrowDown = true;
      break;
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    case 87:
      keys.w = false;
      break;
    case 83:
      keys.s = false;
      break;
    case 38:
      keys.arrowUp = false;
      break;
    case 40:
      keys.arrowDown = false;
      break;
  }
});
