// statistics section counting 
flag2 = 0;
function countTo(){
        $('#drivers').countTo({
            from: 1,
            to: 110,
            speed: 4000
        });
        
        $('#users').countTo({
            from: 1,
            to: 50,
            speed: 4000
        });
        
        $('travels').countTo({
            from: 215,
            to: 637,
            speed: 4000
        });
        
        flag2 = 1;
    }
