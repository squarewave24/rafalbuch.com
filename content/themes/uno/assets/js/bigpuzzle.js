if (document.getElementById('bigTableDiv')) {
    var _maze = [

        [12, 12, 10, 8 , 11, 10, 5 , 12, 12, 10, 8 , 11, 10, 5 , 10, 8 , 11, 10, 1],
        [12, 10, 10, 8 , 8 , 8 , 11, 12, 10, 10, 8 , 8 , 8 , 11, 10, 8 , 11, 10, 3],
        [12, 12, 11, 12, 12, 8 , 11, 12, 12, 11, 12, 12, 8 , 11, 10, 8 , 11, 10, 2],
        [12, 8 , 11, 11, 11, 11, 12, 12, 8 , 11, 11, 11, 11, 12, 10, 8 , 11, 10, 2],
        [8 , 8 , 8 , 11, 12, 11, 8 , 8 , 8 , 8 , 11, 12, 11, 8 , 10, 8 , 11, 10, 3],
        [11, 11, 8 , 11, 12, 11, 11, 11, 11, 8 , 11, 12, 11, 11, 10, 5 , 2 , 2 , 5],
        [3 , 11, 11, 11, 8 , 8 , 3 , 3 , 11, 11, 11, 8 , 8 , 3 , 10, 3 , 3 , 3 , 5],
        [12, 12, 10, 8 , 11, 10, 5 , 12, 12, 10, 8 , 11, 10, 5 , 10, 8 , 11, 10, 5],
        [12, 10, 10, 8 , 8 , 8 , 11, 12, 10, 10, 8 , 8 , 8 , 11, 10, 3 , 3 , 3 , 2],
        [12, 12, 11, 12, 12, 8 , 11, 12, 12, 11, 12, 12, 8 , 10, 10, 8 , 11, 10, 5],
        [12, 8 , 11, 11, 11, 11, 12, 12, 8 , 11, 11, 11, 11, 12, 10, 8 , 11, 10, 5],
        [8 , 8 , 8 , 11, 12, 11, 8 , 8 , 8 , 8 , 11, 12, 11, 8 , 10, 8 , 11, 10, 5],
        [11, 11, 8 , 11, 12, 11, 11, 11, 11, 8 , 11, 12, 11, 11, 10, 8 , 11, 10, 10],
        [12 , 11, 11, 11, 8 , 8 , 3 , 3 , 11, 11, 11, 8 , 8 , 5 , 10, 8 , 11, 10, 10],
        [12, 12, 10, 8 , 11, 10, 5 , 12, 12, 10, 8 , 5 , 10, 5 , 10, 8 , 5 , 10, 10],
        [12, 10, 10, 8 , 8 , 8 , 11, 12, 10, 10, 8 , 8 , 8 , 5 , 10, 8 , 11, 10, 10],
        [12, 12, 11, 12, 12, 8 , 11, 12, 12, 11, 12, 12, 7 , 5 , 10, 8 , 11, 10, 12],
        [12, 8 , 11, 11, 11, 11, 12, 12, 8 , 11, 11, 11, 11, 5 , 10, 8 , 11, 10, 5],
        [8 , 8 , 8 , 11, 12, 11, 8 , 8 , 8 , 8 , 11, 12, 11, 7 , 10, 7 , 11, 10, 5],
        [11, 11, 8 , 11, 12, 11, 11, 11, 11, 8 , 11, 12, 11, 11, 10, 8 , 11, 10, 5],
        [12, 12, 10, 8 , 11, 10, 5 , 12, 12, 10, 8 , 11, 10, 5 , 10, 8 , 11, 10, 10],
        [12, 10, 10, 8 , 8 , 8 , 11, 12, 10, 10, 8 , 8 , 8 , 11, 10, 8 , 11, 10, 10],
        [12, 12, 11, 12, 12, 8 , 11, 12, 12, 11, 12, 12, 8 , 11, 10, 8 , 11, 10, 10],
        [12, 8 , 11, 11, 11, 11, 12, 12, 8 , 11, 11, 11, 11, 5 , 10, 8 , 11, 10, 5],
        [8 , 8 , 8 , 11, 12, 11, 8 , 8 , 8 , 8 , 11, 12, 11, 8 , 10, 8 , 11, 10, 5],
        [11, 11, 8 , 11, 12, 11, 11, 11, 11, 8 , 11, 12, 11, 11, 10, 8 , 11, 10, 5],
        [3 , 10, 13, 12, 8 , 8 , 3 , 3 , 11, 11, 11, 8 , 8 , 5 , 10, 8 , 11, 10, 0]
    ]
    var _solutions = [];

    // swap values for bjecs with x, y, v
    for (var i = 0; i < _maze.length; i++) // rows
        for (var j = 0; j < _maze[i].length; j++) // cols
        // swap value integer with an objct that contains more information. 
            _maze[i][j] = {
            x: j, // store X position
            y: i, // store Y position
            v: _maze[i][j], // store # of steps
            toString: function() {
                return '[' + this.x + ':' + this.y +']';
            } // neater way to print this node
        };

}


function createMazeHtml() {
    var html = '<table class=maze-table>'
    for (var i = 0; i < _maze.length; i++) { // rows
        html += '<tr>'
        for (var j = 0; j < _maze[i].length; j++) { // cols

            var cellStyle = ((i + j) % 2) == 0 ? '' : ' class="alt" ';
            html += '<td ' + cellStyle + '>' + _maze[i][j].v + '</td>'
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



// REPLAY functions ********************************************* //

function getCell(matrixObj) {
    return document.getElementById('bigTableDiv')
        .children[0] // table div
        .children[0] // table
        .rows[matrixObj.y] // row
        .cells[matrixObj.x]; // return cell 
}

function getArrow(direction) {
    return '&' + direction.substring(0, 1) + 'arr;';
}

var tdiv = document.getElementById('bigTableDiv');
if (tdiv) {
    tdiv.appendChild(createMazeHtml());
    document.getElementById('bigTableStartButton').addEventListener('click', start);
}

function start() {
    var startNode = _maze[0][0];
    solve(startNode);
}
// var script = document.createElement('script');
// script.src = something;

  function solve(root){
      var startTime = new Date();
      var q = new Queue();  // using a Queue library 
      q.enqueue(root);      // Queue is needed in order to ensure that nodes are navigated in order from lowest to higest
      var visited = {};     // will use a hashtable to determine loops. 
      visited[root] = true; // add root node to visited hash

      while (!q.isEmpty()){ // as long as there are nodes in the qeueue let's keep searching
         var node = q.dequeue();
         getAvailableLinks(node).forEach(function(n){ // find all possible edges from current node, and loop through them
             if (visited[n]) return; // loop detected, terminate
             visited[n] = true;
             n.parent = node; // save bread crumbs via linked list 
              if (n.v === 0){ // solution found! 
                  while (!q.isEmpty()) q.dequeue(); // empty the queue 
                  showResults(n, new Date() - startTime);
                  return;
              }
              else // current node is not the solution, add to queue in order to process all edges from this node next! 
                q.enqueue( n );
          });
      }
  }



function getMoves(history){
    return history.filter(function(el){return typeof el.x != 'undefined';})
}

function getAvailableLinks(node) {
    var nodes = [];
    // this function assumes maze is an even rectangle 

    if (node.v < 1) return nodes;

    // look up for available node
    if (node.y - node.v > -1)
        nodes.push(_maze[node.y - node.v][node.x]);

    // look down for availabl node
    if (node.y + node.v < _maze.length) // checking y axis length
        nodes.push(_maze[node.y + node.v][node.x]);

    // look left for available node
    if (node.x - node.v > -1)
        nodes.push(_maze[node.y][node.x - node.v]);

    // look right for availabl node
    if (node.x + node.v < _maze[0].length) // checking x axis length
        nodes.push(_maze[node.y][node.x + node.v]);

    return nodes;
}

function showResults(n, elapsed) {
    var steps = [n];
    term = 100;
    while (n && term > 0) {
        n = n.parent;
        if (n) steps.push(n);
        term--;
    }
    _solutions = [steps.reverse()];

    writeOutput(_solutions.length + ' solution found in ' + elapsed +'ms.');
    _solutions.sort(function(a, b) {
        return a.length > b.length ? 1 : -1;
    });
    _solutions.forEach(function(s, i) {

        writeOutput('<a href="#solution" id="solutionLink" onclick=replay(_solutions[' + i + '])>' +
            getMoves(s).length +
            ' moves</a>' 
            // +
            // s.map(function(el) {
            //     return ' ' + el.toString();
            // })
            )
        var sl = document.getElementById('solutionLink');
        if (sl) sl.click();
        
    });
}

function replay(history, i, lastCell) {
    if (!history) return;
    i = i || 0;
    var moves = getMoves(history);
    var matrixObject = moves[i];
    if (!matrixObject) return;
    var c = getCell(matrixObject);
    console.log('replay: ', matrixObject.toString());
    if (lastCell)
        lastCell.className = lastCell.className.replace(/(?:^|\s)selected(?!\S)/, ' selected-visited ');
    c.className += ' selected';
    setTimeout(function() {
        replay(history, i + 1, c);
    }, 300);
}