// 打印效果：
var typed = new Typed('#typed', {
            startDelay: 2000,
            typeSpeed: 200,
            loop: true,
            loopCount: Infinity,
            cursorChar: '🔥',
        strings: ['网站在努力建设中......']
        });
var typed = new Typed('#typed2', {
            startDelay: 3300,
            typeSpeed: 200,
            loop: true,
            loopCount: Infinity,
            cursorChar: '🔥',
        strings: ['学习中......']
        });

// 网站成立计时：
function show_runtime()
    {window.setTimeout("show_runtime()",1000);
    X=new Date("03/17/2020 12:00:00");
    Y=new Date();
    T=(Y.getTime()-X.getTime());
    M=24*60*60*1000;
    a=T/M;
    A=Math.floor(a);
    b=(a-A)*24;
    B=Math.floor(b);
    c=(b-B)*60;
    C=Math.floor((b-B)*60);
    D=Math.floor((c-C)*60);
    runtime_span.innerHTML="本站基于华为云 ｜ 网站破壳: "+A+"天"+B+"小时"+C+"分"+D+"秒"}
    show_runtime();

// 背景特效：
(function() {
    var   COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
          NUM_CONFETTI = 350;
          COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
          PI_2 = 2 * Math.PI;
          canvas = document.getElementById("bg");
          context = canvas.getContext("2d");
          window.w = 0;
          window.h = 0;
resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeWindow, false);
    window.onload = function() {
    return setTimeout(resizeWindow, 0);
    };
range = function(a, b) {
    return (b - a) * Math.random() + a;
    };
drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
    };
xpos = 0.5;
document.onmousemove = function(e) {
    return xpos = e.pageX / w;
    };
window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 60);
    };
    })();

Confetti = class Confetti {
    constructor() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }
    replace() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    }
    draw() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
      }
      };
confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
    })();
window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };
step();
}).call(this);