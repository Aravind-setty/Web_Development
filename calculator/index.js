        const out=document.getElementById('pt');
        const buttons=document.querySelectorAll('.btn');
        const operators=['+','-','*','/'];
        let resultDisplayed=false;
        buttons.forEach(button => {
            button.addEventListener("click",function(){
                const value=button.value;
                const current=out.textContent;
                const lastchar=current[current.length-1];
                if(resultDisplayed){
                    if(operators.includes(value)){
                        out.textcontent+=value;
                    }else{
                        out.textContent=value;
                    }
                    resultDisplayed=false;
                } else {
                if(out.textContent==="0"){
                    out.textContent=value;
                }
                else{
                    if(operators.includes(lastchar)&&operators.includes(value)){
                        return;
                    }
                out.textContent+=value;
                }
            }

            });
        });

        const ac=document.querySelector('.btn-ac');
        ac.addEventListener("click",function(){
            out.textContent=0;
            resultDisplayed=false;
        });

        const eq=document.getElementById('ideq');
        eq.addEventListener("click",function(){
           const output = eval(out.textContent);
           out.textContent=output;
            resultDisplayed=true;
        });

        const txt=document.getElementById('txt');
        const title=document.createElement('h1');
        txt.appendChild(title);
        title.textContent="Simple Caliculator.....";
        txt.style.cssText="width:300px;margin-top:50px;margin-left:100px;";
