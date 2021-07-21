console.log('this is log file')

let w =   window.innerWidth
console.log(w);

if (w < 1700){
    let v= document.getElementById('body')
    // console.log(v)
    v.innerHTML= '<h3 style="display:flex; justify-content:center;text-align:center;align-item:cente;height:100vh"> website not work at this screen plz take a screen with more resolution </h3>'
    // document.write("tisisidfdjsdkjf")
}
else{
    console.log('work well');
   
}