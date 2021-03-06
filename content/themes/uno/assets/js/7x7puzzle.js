if (document.getElementById('tableDiv')){
       var _maze = [
        
        [6,3,2,4,6,2,5],
        [3,5,2,4,4,4,1],
        [3,3,2,3,3,4,2],
        [3,4,1,2,2,5,3],
        [4,4,4,2,3,2,4],
        [2,5,4,2,3,2,5],
        [3,5,2,1,4,4,0]
        
        // [2,2,1],
        // [1,2,2],
        // [2,2,0]
      ];
    
    var _solutions = [];

	for (var i=0; i<_maze.length; i++) // rows
		for (var j=0; j<_maze[i].length; j++) // cols
			// swap value integer with an objct that contains more information. 
            _maze[i][j] = { x: j,             // store X position
                            y: i,             // store Y position
                            v: _maze[i][j],   // store # of steps
                            toString: function(){return '[' + this.x + ':' + this.y + '(' + this.v + ')]';} // neater way to print this node
                           };
	

   function createMazeHtml(){
    var html = '<table class=maze-table>'
    for (var i=0; i<_maze.length; i++) { // rows
      html += '<tr>'
      for (var j=0; j<_maze[i].length; j++) { // cols
        
        var cellStyle = ((i+j) % 2) == 0 
          ? '' 
          : ' class="alt" ';
        html += '<td ' +  cellStyle + '>' + _maze[i][j].v + '</td>'
      }
      html += '</tr>'
    }
    html += '</table>';
    
    var d = document.createElement('div');
    d.innerHTML = html;
    return d;
  }
  function writeOutput(text) {
    var d = document.createElement('div');
    d.innerHTML = text;
    
    document.getElementById('outputTextDiv').appendChild(d);
  }
  
  function move(node, direction, history) {
    // 1. create a new copy history array since it gets passed by reference. 
    history = history.slice(0); 
    // 2. save current node into current thread history
    history.push(getArrow(direction));
    history.push(node);
    // 3. get next node
    var nextNode = getNextNode(node, direction);
    if (!nextNode) 
      return; // no node exists at that address
    // 4. check if this node has already been visited. 
    if (history.some(function(o){
      return o === nextNode;
    })){
      return; // loop detected, terminate!
    }
  
    // 5. check if this is the final node. 
    if (nextNode.v == 0){ 
      history.push(nextNode); // solution found! 
      _solutions.push(history);
    }
    // attempt to move in every direction
    move(nextNode, 'up', history);
    move(nextNode, 'down', history);
    move(nextNode, 'right', history);
    move(nextNode, 'left', history);
  }

  function getNextNode(node, direction){
    var nextNode = null;
    if (node.v < 1) return nextNode;
    switch(direction){
     case 'up':
     if (node.y - node.v > -1)
      nextNode = _maze[node.y - node.v][node.x];
    break;
    case 'down':
    if (node.y + node.v < _maze.length)
      nextNode = _maze[node.y + node.v][node.x];
    break;
    case 'left':
    if (node.x - node.v > -1)
      nextNode = _maze[node.y][node.x - node.v];
    break;
    case 'right':
    if (node.x + node.v < _maze.length)
     nextNode = _maze[node.y][node.x + node.v];
   break;
   default:
   console.error('bad direction supplied: ', direction);
 }
 
 return nextNode;
}

// REPLAY functions ********************************************* //

 function getCell(matrixObj){
     return document.getElementById('tableDiv')
        .children[0] // table div
        .children[0] // table
        .rows[ matrixObj.y] // row
        .cells[matrixObj.x]; // return cell 
 }

 function getArrow(direction) {
     return '&' + direction.substring(0,1) + 'arr;';
 }

function replay(history, i, lastCell){
    if (!history) return;
    i = i || 0;
    var moves = getMoves(history);
    var matrixObject = moves[i];
    if (!matrixObject) return;
    var c = getCell(matrixObject);
    console.log('replay: ', matrixObject.toString());
    if (lastCell) 
        lastCell.className = lastCell.className.replace(/(?:^|\s)selected(?!\S)/,'');
    c.className += ' selected';
    setTimeout(function() {replay(history, i+1, c);}, 300);
}




  document.getElementById('tableDiv').appendChild(createMazeHtml());
    
    // get upper left corner and try going down and right
    var startNode = _maze[0][0];
    move(startNode, 'down', []);
    move(startNode, 'right', []);
    
    writeOutput(_solutions.length + ' solutions found.');
    _solutions.sort(function(a,b) {return a.length > b.length ? 1 : -1;});
    _solutions.forEach(function(s, i){
        
       writeOutput('<a href="#a" onclick=replay(_solutions['+ i +'])>' +
           getMoves(s).length + 
           ' moves: </a>' +
           s.map(function(el){ return ' ' + el.toString();})) 
    }); 
    
    function getMoves(history){
        return history.filter(function(el){return typeof el.x != 'undefined';})
    }

}
