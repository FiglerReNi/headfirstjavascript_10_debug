function DebugConsole(){
    var console = document.getElementById('debug');
    console.style = 'monospace';
    console.color = '#333333';
    console.appendChild(document.createElement('hr'));
    this.shaded = false;
}
DebugConsole.prototype.displayMsg = function(msg){
    var msgElement = document.createElement('div');
    msgElement.appendChild(document.createTextNode(msg));
    msgElement.style.backgroundColor = this.shaded ? '#EEEEEE' : '#FFFFFF';
    document.getElementById('debug').appendChild(msgElement);
    this.shaded = !this.shaded;
};