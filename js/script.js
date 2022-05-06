let t1 = gsap.timeline({ paused: true });
let flap = CSSRulePlugin.getRule('.envelope:before');
var i = 0;
var txts = [
  "Hi Rushda, \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0first of all heartiest 💕 congratulations to both of you.. there are many things to write but I'll try to keep it short.. Thank you, for all the precious memories and kind gestures you have given which are very close to my heart.. and I wish we'll continue the same bond in future as well, no matter where we will be🤝.. May Allah bless you with abundance of love, care, and fulfill all your wishes whatever you prayed for.. \u0026 give healthy and prosperous married life.. “Remember, keep Smiling and never lose the 🌟 you have”..😊 \u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0  \u00A0\u00A0 \u00A0 \u00A0 \u00A0-yours, Calculator😎",
];

var speed = 100;
var j = 0;
var x = 0;
var flag = 0;
t1.to(flap, {
  duration: 0.5,
  cssRule: {
    rotateX: 180,
  },
})
  .set(flap, {
    cssRule: {
      zIndex: 10,
    },
  })
  .to('.letter', {
    translateY: -200,
    duration: 0.9,
    ease: 'back.inOut(1.5)',
  })
  .set('.letter', {
    zIndex: 40,
  })
  .to('.letter', {
    duration: 0.7,
    ease: 'back.out(.4)',
    translateX: 33,
    translateY: -36,
    translateZ: 278,
  });

let t2 = gsap.timeline({ paused: true });
t2.to('.shadow', {
  delay: 1.4,
  width: 450,
  boxShadow: '-5px 120px 4px 4px #eeeef3',
  ease: 'back.out(.2)',
  duration: 0.7,
});

function openCard(e) {
  t1.play();
  t2.play();
  createEl();
  setTimeout(typeWriter, 5000);
}

function closeCard(e) {
  t1.reverse();
  t2.reverse();
  setTimeout(clearContent, 1500);
}

function createEl() {
  flag = 0;
  j = 0;
  while (x < txts.length) {
    var iDiv = document.createElement('div');
    iDiv.id = 'demo' + x;
    iDiv.class = 'message';
    iDiv.style.fontSize = '12px';
    //iDiv.style.fontWeight = "500";
    iDiv.style.wordSpacing = '2px';
    iDiv.style.marginLeft = '35px';
    iDiv.style.background = '#ffffff00';
    iDiv.style.fontFamily = "'Courgette', cursive";
    iDiv.style.display = 'contents';
    iDiv.style.color = '#1715af';
    document.getElementsByClassName('body')[0].appendChild(iDiv);
    x++;
  }
}

function typeWriter() {
  if (j < txts.length) {
    var txt = txts[j];
    if (i < txt.length) {
      if (flag == 1) {
        i = 0;
        return;
      }
      document.getElementById('demo' + j).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      j++;
      i = 0;
      typeWriter();
    }
  } else return;
}

function clearContent() {
  document.getElementById('demo0').innerHTML = '';
  flag = 1;
}
