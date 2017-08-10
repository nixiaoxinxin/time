function ball(balls, x, y, r_, arr, px, py){
    var colors = [
        '#FFA400',
        '#5C0DAC',
        '#FFAA00',
        '#1240AB',
        '#009999',
        '#00CC00',
    ];
    var px_ = px || 300;
    var py_ = py || 20;

    for(var i = 0; i < arr.length; i ++){
        for(var j = 0; j < arr[i].length; j++){
            var cNum = Math.ceil(Math.random()* colors.length);
            if(arr[i][j] == 1){
                balls.push({
                    x: j*x + px_,
                    y: i*y + py_,
                    r: r_,
                    g: 2,
                    v: 0,
                    c: 'green',
                    xv: Math.pow(-1, Math.ceil((Math.random()*10)))*4,
                    st:0
                })
            }
        }
    }
}