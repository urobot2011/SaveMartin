// Checkers.js v1.0.0
// https://github.com/urobot2011/Checkers.js/
//
// Copyright (c) 2023 urobot2011(esp32-urobot2011, urobot2011chess)
// Released under the MIT license
// https://github.com/urobot2011/Checkers.js/blob/master/LICENSE.md

(function(){
  var DEFAULT_FEN = "1p1p1p1p/p1p1p1p1/1p1p1p1p/8/8/P1P1P1P1/1P1P1P1P/P1P1P1P1 w - - - -";
  var COLUMNS = 'abcdefgh'.split('');
  var ROWS = '12345678'.split('');
  var SQUARES = [];

  var present_fen = DEFAULT_FEN;
  var present_turn = 'w';
  var present_headers = [];
  var present_number = 0;
  var present_move = [];
  var old_fens = [];

  // for(let i = 0; i < 8; i++){
  //   var squares = [];
  //   for(let j = 0; j < 8; j++){
  //     squares.push(COLUMNS[j] + ROWS[i]);
  //   }
  //   SQUARES[i] = squares;
  // }
  function Checkers(fen = DEFAULT_FEN){
    present_fen = fen;
  }
  function fenToPieceCode(piece) {
    if (piece.toLowerCase() === piece) {
      return 'b' + piece.toUpperCase();
    }
    return 'w' + piece.toUpperCase();
  }
  function pieceCodeToFen(piece) {
    var pieceCodeLetters = piece.split('');
    if (pieceCodeLetters[0] === 'w') {
      return pieceCodeLetters[1].toUpperCase();
    }
    return pieceCodeLetters[1].toLowerCase();
  }
  function pieceCodeToArr(piece) {
    var pieceCodeLetters = piece.split('');
    return [pieceCodeLetters[0], pieceCodeLetters[1].toLowerCase()];
  }
  function ArrTopieceCode(Arr) {
    return Arr[0]+Arr[1].toUpperCase();
  }
  function squeezeFenEmptySquares (fen) {
    return fen.replace(/11111111/g, '8')
      .replace(/1111111/g, '7')
      .replace(/111111/g, '6')
      .replace(/11111/g, '5')
      .replace(/1111/g, '4')
      .replace(/111/g, '3')
      .replace(/11/g, '2');
  }
  function fenToObj(fen) {
    present_number = 0;
    present_headers = [];
    present_move = [];
    old_fens = [];
    if(fen.includes('b')){
      present_turn = 'b';
    } else {
      present_turn = 'w';
    }
    fen = fen.replace(/ .+$/, '');
  
    var rows = fen.split('/');
    var position = {};
  
    var currentRow = 8;
    for (var i = 0; i < 8; i++) {
      var row = rows[i].split('');
      var colIdx = 0;
      for (var j = 0; j < row.length; j++) {
        if (row[j].search(/[1-8]/) !== -1) {
          var numEmptySquares = parseInt(row[j], 10);
          colIdx = colIdx + numEmptySquares;
        } else {
          var square = COLUMNS[colIdx] + currentRow;
          position[square] = fenToPieceCode(row[j]);
          colIdx = colIdx + 1;
        }
      }
      currentRow = currentRow - 1;
    }
    return position;
  }
  
  function objToFen(obj) {
    var fen = '';
  
    var currentRow = 8;
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var square = COLUMNS[j] + currentRow;
        if (obj.hasOwnProperty(square) && obj[square] != undefined) {
          fen = fen + pieceCodeToFen(obj[square]);
        } else {
          fen = fen + '1'
        }
      }
  
      if (i !== 7) {
        fen = fen + '/';
      }
  
      currentRow = currentRow - 1;
    }
  
    fen = squeezeFenEmptySquares(fen);
  
    return fen;
  }
  function board() {
    var BOARDS = [];
    for(let i = 0; i < 8; i++){
      var boards = [];
      for(let j = 0; j < 8; j++){
        var obj = fenToObj(present_fen);
        var find = obj[COLUMNS[j] + ROWS[i]];
        if(find != undefined){
          var piece = pieceCodeToArr(find);
          boards.push({type: piece[1], color: piece[0]});
        } else {
          boards.push(null);
        }
      }
      BOARDS[i] = boards;
    }
    return BOARDS;
  }
  function diagonalSquareCalc(location, move){
    //ul ur dl dr
    var number = parseInt(location.replace(/a/g, '1')
        .replace(/b/g, '2')
        .replace(/c/g, '3')
        .replace(/d/g, '4')
        .replace(/e/g, '5')
        .replace(/f/g, '6')
        .replace(/g/g, '7')
        .replace(/h/g, '8'));
    var calc = number + (move == "ul" ? -9 : (move == "ur" ? +11 : (move == "dl" ? -11 : +9)));
    calc = (String(calc).split('')[0].replace(/1/g, 'a')
        .replace(/2/g, 'b')
        .replace(/3/g, 'c')
        .replace(/4/g, 'd')
        .replace(/5/g, 'e')
        .replace(/6/g, 'f')
        .replace(/7/g, 'g')
        .replace(/8/g, 'h')+String(calc).split('')[1]);
    return isNaN(parseInt(String(calc).split('')[0])) && parseInt(String(calc).split('')[1]) > 0 && 9 > parseInt(String(calc).split('')[1]) ? calc : null;
  }
  function squareCheck(square, obj = fenToObj(present_fen)){
    var find = obj[square];
    if(find != undefined){
      return pieceCodeToArr(find);
    } else {
      return null;
    }
  }
  function oppositeColor(color){
    return color == 'w' ? 'b' : 'w';
  }
  function isEat(square, move, obj = fenToObj(present_fen)){
    var check = squareCheck(square, obj);
    if(check != null){
      var color = check[0];
      var calc = diagonalSquareCalc(square, move);
      if(calc != null){
        check = squareCheck(calc, obj);
        if(check != null && oppositeColor(check[0]) == color){
          calc = diagonalSquareCalc(calc, move);
          if(calc != null){
            if(squareCheck(calc, obj) == null){
              return 1;
            }
          }
        }
      }
      return 0;
    } else {
      return 0;
    }
  }
  function moves_piece(square, obj = fenToObj(present_fen)){
    var moves = [];
    var check = squareCheck(square, obj);
    if(check != null){
      var eat = 0;
      if(isEat(square, 'ul', obj)){
        moves.push(square+"-"+'ulEat');
        eat = 1;
      }
      if(isEat(square, 'ur', obj)){
        moves.push(square+"-"+'urEat');
        eat = 1;
      }
      if(check[1] == 'k'){
        if(isEat(square, 'dl', obj)){
          moves.push(square+"-"+'dlEat');
          eat = 1;
        }
        if(isEat(square, 'dr', obj)){
          moves.push(square+"-"+'drEat');
          eat = 1;
        }
      }

      if(!eat){
        var calc = diagonalSquareCalc(square, 'ul');
        if(calc != null){
          if(squareCheck(calc, obj) == null){
            moves.push(square+"-"+calc);
          }
        }
        calc = diagonalSquareCalc(square, 'ur');
        if(calc != null){
          if(squareCheck(calc, obj) == null){
            moves.push(square+"-"+calc);
          }
        }
        if(check[1] == 'k'){
          calc = diagonalSquareCalc(square, 'dl');
          if(calc != null){
            if(squareCheck(calc, obj) == null){
              moves.push(square+"-"+calc);
            }
          }
          calc = diagonalSquareCalc(square, 'dr');
          if(calc != null){
            if(squareCheck(calc, obj) == null){
              moves.push(square+"-"+calc);
            }
          }
        }
      }
      return moves;
    } else {
      return null;
    }
  }
  function moves(){
    var _moves = [];
    var obj = fenToObj(present_fen);
    for(var obj1 in obj){
      var find = pieceCodeToArr(obj[obj1]);
      if(find[0] == present_turn){
        var move = moves_piece(obj1, obj);
        _moves.push(...move);
      }
    }
    var moves = [];
    var eat = 0;
    for(var move of _moves){
      if(move.includes("Eat")){
        eat = 1;
      }
    }
    for(var move of _moves){
      if(move.includes("Eat")){
        moves.push(move);
      }
      if(!move.includes("Eat") && !eat){
        moves.push(move);
      }
    }
    return moves;
  }
  function eat(square, move){
    var obj = fenToObj(present_fen);
    var oldObj = obj[square];
    obj[square] = undefined;
    var calc = diagonalSquareCalc(square, move);
    obj[calc] = oldObj;
    obj[diagonalSquareCalc(calc, move)] = undefined;
    present_fen = objToFen(obj);
    return 1;
  }
  function eat(square, move){
    var obj = fenToObj(present_fen);
    var oldObj = obj[square];
    obj[square] = undefined;
    var calc = diagonalSquareCalc(square, move);
    obj[calc] = oldObj;
    if(parseInt(String(calc).split('')[1]) == 8){
      obj[calc] = ArrTopieceCode([pieceCodeToArr(obj[calc])[0], 'k']);
    }
    obj[diagonalSquareCalc(calc, move)] = undefined;
    present_fen = objToFen(obj);
    return 1;
  }
  function positioning(startSquare, endSquare){
    if(endSquare == diagonalSquareCalc(startSquare, 'ul')){
      return 'ul';
    } else if(endSquare == diagonalSquareCalc(startSquare, 'ur')){
      return 'ur';
    } else if(endSquare == diagonalSquareCalc(startSquare, 'dl')){
      return 'dl';
    } else if(endSquare == diagonalSquareCalc(startSquare, 'dr')){
      return 'dr';
    } else {
      return null;
    }
  }
  function move(_move){
    var _moves = moves();
    if(_moves.includes(_move)){
      var move_start = _move.substr(0, 2);
      var move_end = _move.substr(3, 2);
      var move_isEat = _move.substr(5, 3);
      if(move_isEat == "Eat"){
        eat(move_start, move_end);
        present_number++;
        present_turn = oppositeColor(present_turn);
        old_fens[present_number] = present_fen;
        present_move[present_number] = _move;
        return 1;
      } else {
        var _positioning = positioning(move_start, move_end);
        if(_positioning != null){
          var obj = fenToObj(present_fen);
          var oldObj = obj[move_start];
          obj[move_start] = undefined;
          var calc = diagonalSquareCalc(move_start, _positioning);
          obj[calc] = oldObj;
          if(parseInt(String(calc).split('')[1]) == 8){
            obj[calc] = ArrTopieceCode([pieceCodeToArr(obj[calc])[0], 'k']);
          }
          present_fen = objToFen(obj);
          present_number++;
          present_turn = oppositeColor(present_turn);
          old_fens[present_number] = present_fen;
          present_move[present_number] = _move;
          return 1;
        }
      }
    }
    return null;
  }
  function undo(){
    present_fen = old_fens[present_number-1];
  }
  function in_draw() {
    if(moves().length == 0){
      present_turn = oppositeColor(present_turn);
      if(moves().length == 0){
        return 1;
      }
      present_turn = oppositeColor(present_turn);
    }
    return 0;
  }
  function in_checkmate() {
    if(present_fen == present_fen.toUpperCase() || present_fen == present_fen.toLowerCase()) {
      return 1;
    }
    if(moves().length == 0){
      present_turn = oppositeColor(present_turn);
      if(moves().length != 0){
        return 1;
      }
      present_turn = oppositeColor(present_turn);
    }
    return 0;
  }
  function in_game_over(){
    return in_draw() || in_checkmate();
  }
  Checkers.prototype.fenToObj = function (fen) {
    return fenToObj(fen);
  };
  
  Checkers.prototype.objToFen = function (obj) {
    return objToFen(obj);
  };
  Checkers.prototype.board = function () {
    return board();
  };
  Checkers.prototype.diagonalSquareCalc = function (location, move) {
    return diagonalSquareCalc(location, move);
  };
  Checkers.prototype.squareCheck = function (square) {
    return squareCheck(square);
  };
  Checkers.prototype.oppositeColor = function (color) {
    return oppositeColor(color);
  };
  Checkers.prototype.isEat = function (square) {
    return isEat(square);
  };
  Checkers.prototype.moves_piece = function (square) {
    return moves_piece(square);
  };
  Checkers.prototype.moves = function () {
    return moves();
  };
  Checkers.prototype.move = function (_move) {
    return move(_move);
  };
  Checkers.prototype.undo = function () {
    return undo();
  };
  Checkers.prototype.load = function(fen) {
    present_fen = fen;
  };
  Checkers.prototype.fen = function() {
    return present_fen;
  };
  Checkers.prototype.pgn = function(...l) {
    return "";
  };
  Checkers.prototype.header = function(...l) {
    return "";
  };
  Checkers.prototype.turn = function() {
    return present_turn;
  };
  Checkers.prototype.reset = function() {
    present_fen = DEFAULT_FEN;
    present_turn = 'w';
    present_headers = [];
    present_number = 0;
    present_move = [];
    old_fens = [];
  };
  Checkers.prototype.in_check = function() {
    return 0;
  };
  Checkers.prototype.in_draw = function() {
    return in_draw();
  };
  Checkers.prototype.in_checkmate = function() {
    return in_checkmate();
  };
  Checkers.prototype.in_game_over = function() {
    return in_game_over();
  };
  window['Checkers'] = Checkers;
})();
