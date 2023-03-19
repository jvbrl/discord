var rev = "fwd";
    function titlebar(val){
        var msg  = "abusadinhos";
        var res = " ";
        var speed = 100;
        var pos = val;
        msg = ""+msg+"";
        var le = msg.length;
        if(rev == "fwd"){
            if(pos < le){
                pos = pos+1;
                scroll = msg.substr(0,pos);
                document.title = scroll;
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
            else {
                rev = "bwd";
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        }
        else {
            if(pos > 0) {
                pos = pos-1;
                var ale = le-pos;
                scrol = msg.substr(ale,le);
                document.title = scrol;
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
            else {
                rev = "fwd";
                timer = window.setTimeout("titlebar("+pos+")",speed);
            }
        }
    }
    titlebar(0);

    try {
        fetch("https://discord-web-api.glitch.me/discord/user/435234685782589461", {
      
        }).then(res => res.json()).then(r => {
          document.getElementById('jvbrl').src = `${r.url}`  
        })
      }  catch (e) {
        console.log(e)
      }

      try {
        fetch("https://discord-web-api.glitch.me/discord/user/763950760375091252", {
      
        }).then(res => res.json()).then(r => {
          document.getElementById('trash').src = `${r.url}`  
        })
      }  catch (e) {
        console.log(e)
      }


      