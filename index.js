function t1(table){
var ele=document.createElement(table)
ele.setAttribute("class","table")
ele.style.borderCollapse = "collapse";
return ele
}
function tr1(tr){
var ele=document.createElement(tr)
return ele
}
function th1(th1,atn,atv,content){
    var ele=document.createElement(th1)
    ele.setAttribute(atn,atv)
    ele.innerHTML=content
    return ele
}
    function th2(th1,atn,atv,content){
        var ele=document.createElement(th1)
        ele.setAttribute(atn,atv)
        ele.innerHTML=content
        return ele
        }
        function th3(th1,atn,atv,content){
            var ele=document.createElement(th1)
            ele.setAttribute(atn,atv)
            ele.innerHTML=content
            return ele
        }
            function tr2(tr2){
                var ele=document.createElement(tr2)
                return ele
            }
            function td1(tn,content){
              var ele=document.createElement(tn)
              ele.innerHTML=content
              return ele
            }
            function breaker(br){
             var ele=document.createElement(br)
             return ele
            }
            function td2(tn,content){
                var ele=document.createElement(tn)
                ele.innerHTML=content
                return ele
            }
            function td3(tn,content){
                var ele=document.createElement(tn)
                ele.innerHTML=content
                return ele
            }
            
var br1=breaker("br")
 var col1=th1("th","scope","col","First") 
 var col2=th2("th","scope","col","Last") 
 var col3=th3("th","scope","col","Handle") 
 var t11=td1("td","Mark")
 var t12=td2("td","otto")
 var t13=td3("td","@mdo")
 var table=t1("table")
 var trr1=tr1("tr")
 var trr2=tr2("tr")
 
 trr1.append(col1,col2,col3,br1)
trr2.append(t11,t12,t13)
table.append(trr1,trr2)
document.body.append(table);
