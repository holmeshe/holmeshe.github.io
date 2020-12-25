let msgs = ['text is a dish best served with code',
            'zero understanding placebo in source level',
            'layer-by-layer walkthroughs',
            'never forget why started',
            '梦在地平线，打拼双拳间',
            'do not go gentle into that good night, for the night is dark and full of terrors',
           ];

let idx = Math.floor(Math.random() * 10) % msgs.length;

$("#message").text(msgs[idx]);

function setFontForMobile() {
  resizeEl = $("html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td");

  if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    resizeEl.css("font-size", "103%");
//  } else {
//    resizeEl.css("font-size", "100%");
  }
}

//$(window).resize(function() {
//  setFontForMobile();
//});

setFontForMobile();

