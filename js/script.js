//crzeromq8yp5tii
let t1 = gsap.timeline({ paused: true });
let flap = CSSRulePlugin.getRule('.envelope:before');
var i = 0;
var txts = [
  "nnfhAB-RkbvjSKaBUCHnfD:RyfFC^Day64yfHmxntY?.Ok}<A^BUCHnfD:RyfFC^Day64yfHmxntY?.Ok}(L^fFC^Day64yfHmx$BUCHnfD:RyfFC^Day64yfHmxntY?.Ok}(L^fFC^Day64yfHmx$BUCHnfD:RyfFC^DtY?.Ok}<A^BUCHnfKe-OfHmxntY?.Ok}(L^fFC^Day64yfHmxntY?.Ok}<A^BUCHnfKe-OfHmxntY?.Ok}<A^BUCHnfLk3tB95Kyw/$I#y-)z5vrcE7wPI@o[sL(eay/tcxl4B5B.>Gdx(v)gaARJAvScv4aA7<mD2E*Te*bmHwPzu8vrb{4zddscaARphzFa2kBz&pCA+PSbayYFnaw0}%y-)?uC{4iEazUL1A3e>paAIjmA=-]^axi2.zFHwuz/)PNw]zYjvqG:5BzbkdAb]J1x(wcnaz>Xbz/PM6B0a[ewftV4zE:(5wPI%oA+fqmD2E*FxKM6}azkziwO@SmxLy%&ayPq4aA?spC{3Qkz/YFjBz&psC{3^ivrcDxe*aOuwfsC^CwhbiaA}xAy?$k7z/fVhzGPIkBzbkdB75]%ayYnbwftP7azb+rB-I4ovriMnwO=flaz#9uzddKdwPw]qxK#i}aA}xtCwg(fayX{KPqn2ge*9>%C{2y?y*?01vR/Q%B0b:DBS+)xBz8!9vS=N0vqYN^aA7<my&sGdefFChA+c^AvqYP#w{4{4x(4PdvqG:5D2E?CaA}KvxK#lcCw7AbwP?T9aBd)FaAhvfD1yIew]zYxe*azwfFCmuazkziwGUU$vqH40C{3Kkwft&iz/Y(eA=l8waz>LcA+P8}az++7wIbOT&^^K%wO(0}vR6NhazUL1A3e7@x(4H3xcpS2wft=3C4CXpy&sxaaARpdaMw]&aBd)Fazthbw-wlhe?VT=N2i1>BUCHnfD:RyfFC^DtY?.Ok}<A^BUCHnfKe-OfHmxntY?.Ok}(L^fFC^Day64yfHmx$BUCHnfD:RyfFC^DtY?.Ok}<A^BUCHnfD:RyfFC^Day64yfHmx$BUCHnfD:RyfFC^DtY?.Ok}<A^BUCHnfKe-OfHmxntY?.Ok}(L^fFC^Day64yfHmx$BUCHnfD:RyfFC^DarT{ifFC^DtY?.Ok}<A^BUCHnfD:RyfFC^Day64yfHmxAD2E?CB1wC3vqGB@y*?B7A}2Y*JS",
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
