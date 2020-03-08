// var links = document.querySelectorAll('div[id="search"] ol li h3 a');
var links = document.getElementsByTagName('a');
// var links = document.getElementById('links');
//  for(var i = 0,length=links.length>10 ? 10 : links.length; i < length; i++) links[i].style.backgroundColor = '#F00';
for (let i = 0; i < links.length; i++) {
    // links[i].style.backgroundColor = '#EE0';
    links[i].style.borderLeft = '20px solid #000'
    links[i].animate([
        // keyframes
        { borderLeftColor: '#000' },
        { borderLeftColor: '#FFF' },
        { borderLeftColor: '#000' }
    ], {
        // timing
        delay: i % 10 * 500,
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in'
    })
}