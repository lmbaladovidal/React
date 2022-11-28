let yourself = {
    fibonacci : function(n) {
        let actual = 0;
        let ant1 = 0;
        let ant2 = 0;
        if (n === 0){
            return 1;
        }else if( n === 1 ){
            return 1
        }
        for (let i=0;i<n;i++){
            if (actual === 0){
                actual = 1;
            }else if( ant1 === 0 ){
                ant1 = 1
                ant2 = 1
            }else{
                actual = ant1+ant2
                ant2 = ant1
                ant1 = actual            
            }
        }
        return actual
    }
};

console.log(yourself.fibonacci(3))