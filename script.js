
function confetti(){
 const holder=document.getElementById('confetti'); if(!holder)return;
 const c=['#d85d91','#f4a5c5','#f7c9dc','#f2d27a','#ffffff','#8f5b73'];
 for(let i=0;i<110;i++){let x=document.createElement('i');x.className='conf';x.style.left=Math.random()*100+'vw';x.style.top=(-10-Math.random()*30)+'vh';x.style.background=c[Math.floor(Math.random()*c.length)];x.style.animationDelay=Math.random()*.7+'s';holder.appendChild(x);setTimeout(()=>x.remove(),3600)}
}
function openGift(){
 document.getElementById('giftMessage')?.classList.add('show');
 document.getElementById('giftPhoto')?.classList.add('show');
 document.querySelector('.giftbox')?.classList.add('opened');
 confetti();
}
