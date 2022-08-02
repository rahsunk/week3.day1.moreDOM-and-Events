let weaponTile=document.getElementById("weapons")
let outfitTile=document.getElementById("outfits")
let moneyTile=document.getElementById("money")
let weaponMouseDown=false
let outfitMouseDown=false
let moneyMouseDown=false

weaponTile.onmousedown=function(){
    weaponMouseDown=true
}

weaponTile.onmouseup=function(){
    weaponMouseDown=false;
}

console.log(weaponTile.clientWidth)
console.log(outfitTile.clientWidth)
console.log(moneyTile.clientWidth)
console.log(moneyTile.clientHeight)

// document.addEventListener('mousemove', onMouseMove);

outfitTile.onmousedown=function(){
    outfitMouseDown=true
    console.log(outfitMouseDown)
}

outfitTile.onmouseup=function(){
    outfitMouseDown=false;
}

moneyTile.onmousedown=function(){
    moneyMouseDown=true
}

moneyTile.onmouseup=function(){
    moneyMouseDown=false;
}

document.onmousemove=function(event){
    if(weaponMouseDown){
        weaponTile.onmousemove=function(){
            weaponTile.style.position="absolute"
            weaponTile.style.zIndex=1000
            outfitTile.style.zIndex=1
            moneyTile.style.zIndex=1
            weaponTile.style.left=(event.pageX-weaponTile.offsetWidth/2)+"px"  
            weaponTile.style.top=(event.pageY-weaponTile.offsetHeight/2)+"px"
            weaponTile.style.width="606px"
            weaponTile.style.height="387px"
        }
    }
    else if(outfitMouseDown){
        outfitTile.onmousemove=function(){
            outfitTile.style.position="absolute"
            weaponTile.style.zIndex=1
            outfitTile.style.zIndex=1000
            moneyTile.style.zIndex=1
            outfitTile.style.left=(event.pageX-outfitTile.offsetWidth/2)+"px"  
            outfitTile.style.top=(event.pageY-outfitTile.offsetHeight/2)+"px"
            outfitTile.style.width="606px"
            outfitTile.style.height="387px"       
        }
    }
    else if(moneyMouseDown){
        moneyTile.onmousemove=function(){
            moneyTile.style.position="absolute"
            moneyTile.style.zIndex=1
            moneyTile.style.zIndex=1
            moneyTile.style.zIndex=1000
            moneyTile.style.left=(event.pageX-moneyTile.offsetWidth/2)+"px"  
            moneyTile.style.top=(event.pageY-moneyTile.offsetHeight/2)+"px"
            moneyTile.style.width="606px"      
            moneyTile.style.height="387px" 
        }
    }
}