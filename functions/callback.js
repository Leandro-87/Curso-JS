function f1(callback){
    setTimeout(function() {
        console.log('F1');
        if (callback) callback()
    }, 1000);
}
function f2(callback){
    setTimeout(function() {
        console.log('F2');
        if (callback) callback()
    }, 1000);
}
function f3(callback){
    setTimeout(function() {
        console.log('F3');
        if (callback) callback()
    }, 1000);
}


f1(f1Callback)

function f1Callback(){
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Fim!')
}