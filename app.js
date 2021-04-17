
draw = () => {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
   
    const ctx = canvas.getContext('2d');
    const centerX = canvas.height/2;
    const centerY = canvas.width/2;
    const scale = canvas.width;

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    
    let x1 = 0;
    let x2 = 0;

    for(let i = 0; i<=scale*2; i++){
        if(i<=scale){
            if(x1 <= scale){
                ctx.beginPath();
                ctx.moveTo(x1, 0);
                ctx.lineTo(centerY, centerX);
                ctx.stroke();
            }
            x1 += 5;
        }else if(i>scale){
            if(x2 <= scale){
                ctx.beginPath();
                ctx.setTransform(1,0,0,-1,0,canvas.height);
                ctx.moveTo(x2, 0);
                ctx.lineTo(centerY, centerX);  
                ctx.stroke();
            }
            x2 += 5;
        }
    }
    
}
draw();
