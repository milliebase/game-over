// let x = 0;
// let y = 0;
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let size = 10;
let velocity = 0.15;
let balls = [];
let bombs = [];
let score = 0;
let particles = [];
let operator = [true, false, true, false, true, false, true, false];
let scl = 3;
let diameter;
let angle = 0;

const scoreEl = document.querySelector(".score");
