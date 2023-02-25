function AIobjSort(obj){
    /*var Sort = {};
    for(var _obj in obj){
        Sort[parseInt(_obj.replace(/a/g, '1')
            .replace(/b/g, '2')
            .replace(/c/g, '3')
            .replace(/d/g, '4')
            .replace(/e/g, '5')
            .replace(/f/g, '6')
            .replace(/g/g, '7')
            .replace(/h/g, '8'))] = parseInt(obj[_obj].replace(/b/g, '1')
            .replace(/w/g, '2')
            .replace(/P/g, '1')
            .replace(/N/g, '2')
            .replace(/B/g, '3')
            .replace(/R/g, '4')
            .replace(/Q/g, '5')
            .replace(/K/g, '6'));
    }
    return Sort;*/
  return obj;
}
function DataSort(obj){
    /*return {
        obj: AIobjSort(Chessboard.fenToObj(obj["fen"])),
        move: parseInt(obj["move"].replace(/a/g, '1')
            .replace(/b/g, '2')
            .replace(/c/g, '3')
            .replace(/d/g, '4')
            .replace(/e/g, '5')
            .replace(/f/g, '6')
            .replace(/g/g, '7')
            .replace(/h/g, '8')
            .replace(/x/g, '9')
            .replace(/P/g, '1')
            .replace(/N/g, '2')
            .replace(/B/g, '3')
            .replace(/R/g, '4')
            .replace(/Q/g, '5')
            .replace(/K/g, '6'))
    };*/
  return obj;
}
var MartyL5_V1_AI_data = [

{
	input: DataSort({
 	fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
 	move: "Nc6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
 	move: "Nf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3",
 	move: "Na6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
 	move: "Bb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5",
 	move: "Rg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1r1/pppp1ppp/2n2n2/4p1N1/1bB1P3/2N5/PPPP1PPP/R1BQ1RK1 b q - 9 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1r1/pppp1ppp/2n2n2/4p1N1/1bB1P3/2N5/PPPP1PPP/R1BQ1RK1 b q - 9 6",
 	move: "d5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1r1/ppp2ppp/2n2n2/3Pp1N1/1bB5/2N5/PPPP1PPP/R1BQ1RK1 b q - 0 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1r1/ppp2ppp/2n2n2/3Pp1N1/1bB5/2N5/PPPP1PPP/R1BQ1RK1 b q - 0 7",
 	move: "Nd4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1r1/ppp2ppp/5n2/3Pp1N1/1bBn4/P1N5/1PPP1PPP/R1BQ1RK1 b q - 0 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1r1/ppp2ppp/5n2/3Pp1N1/1bBn4/P1N5/1PPP1PPP/R1BQ1RK1 b q - 0 8",
 	move: "Bg4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/3Pp1N1/1bBn2b1/P1N2P2/1PPP2PP/R1BQ1RK1 b q - 0 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/3Pp1N1/1bBn2b1/P1N2P2/1PPP2PP/R1BQ1RK1 b q - 0 9",
 	move: "Bxc3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/3Pp1N1/2Bn2P1/P1b5/1PPP2PP/R1BQ1RK1 b q - 0 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/3Pp1N1/2Bn2P1/P1b5/1PPP2PP/R1BQ1RK1 b q - 0 10",
 	move: "Ba5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/b2Pp1N1/2Bn2P1/P1P5/1P1P2PP/R1BQ1RK1 b q - 0 11",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/b2Pp1N1/2Bn2P1/P1P5/1P1P2PP/R1BQ1RK1 b q - 0 11",
 	move: "Bb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/1b3n2/3Pp1N1/2BP2P1/P7/1P1P2PP/R1BQ1RK1 b q - 0 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/1b3n2/3Pp1N1/2BP2P1/P7/1P1P2PP/R1BQ1RK1 b q - 0 12",
 	move: "Bxd4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/3Pp1N1/2Bb2P1/P7/1P1P2PP/R1BQ1R1K b q - 1 13",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/ppp2ppp/5n2/3Pp1N1/2Bb2P1/P7/1P1P2PP/R1BQ1R1K b q - 1 13",
 	move: "Qd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/5n2/3Pp3/2Bb2P1/P4N2/1P1P2PP/R1BQ1R1K b q - 3 14",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/5n2/3Pp3/2Bb2P1/P4N2/1P1P2PP/R1BQ1R1K b q - 3 14",
 	move: "Ne4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/8/3Pp3/2BNn1P1/P7/1P1P2PP/R1BQ1R1K b q - 0 15",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/8/3Pp3/2BNn1P1/P7/1P1P2PP/R1BQ1R1K b q - 0 15",
 	move: "exd4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/8/3P4/2Bpn1P1/P2P4/1P4PP/R1BQ1R1K b q - 0 16",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/8/3P4/2Bpn1P1/P2P4/1P4PP/R1BQ1R1K b q - 0 16",
 	move: "Nd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/3n4/3P4/3p2P1/PB1P4/1P4PP/R1BQ1R1K b q - 2 17",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/pppq1ppp/3n4/3P4/3p2P1/PB1P4/1P4PP/R1BQ1R1K b q - 2 17",
 	move: "O-O-O"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/pppq1ppp/3n4/3P4/3p1BP1/PB1P4/1P4PP/R2Q1R1K b - - 4 18",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/pppq1ppp/3n4/3P4/3p1BP1/PB1P4/1P4PP/R2Q1R1K b - - 4 18",
 	move: "Ne8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq1ppp/8/3P2P1/3p1B2/PB1P4/1P4PP/R2Q1R1K b - - 0 19",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq1ppp/8/3P2P1/3p1B2/PB1P4/1P4PP/R2Q1R1K b - - 0 19",
 	move: "g6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq1p1p/6p1/3P2P1/3p1B2/PB1P4/1P4PP/2RQ1R1K b - - 1 20",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq1p1p/6p1/3P2P1/3p1B2/PB1P4/1P4PP/2RQ1R1K b - - 1 20",
 	move: "f5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq3p/6p1/3P1pP1/P2p1B2/1B1P4/1P4PP/2RQ1R1K b - - 0 21",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq3p/6p1/3P1pP1/P2p1B2/1B1P4/1P4PP/2RQ1R1K b - - 0 21",
 	move: "Nd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/pppq3p/3n2p1/P2P1pP1/3p1B2/1B1P4/1P4PP/2RQ1R1K b - - 0 22",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/pppq3p/3n2p1/P2P1pP1/3p1B2/1B1P4/1P4PP/2RQ1R1K b - - 0 22",
 	move: "Ne8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq3p/P5p1/3P1pP1/3p1B2/1B1P4/1P4PP/2RQ1R1K b - - 0 23",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/pppq3p/P5p1/3P1pP1/3p1B2/1B1P4/1P4PP/2RQ1R1K b - - 0 23",
 	move: "bxa6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/p1pq3p/p5p1/3P1pP1/B2p1B2/3P4/1P4PP/2RQ1R1K b - - 1 24",
 	move: "Kb7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/p1pq3p/p5p1/3P1pP1/B2p1B2/3P4/1P4PP/2RQ1R1K b - - 1 24",
 	move: "Qf7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/p1p2q1p/p5p1/3P1pP1/3p1B2/1B1P4/1P4PP/2RQ1R1K b - - 3 25",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2krn1r1/p1p2q1p/p5p1/3P1pP1/3p1B2/1B1P4/1P4PP/2RQ1R1K b - - 3 25",
 	move: "Nd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/p1p2q1p/p2n2p1/3P1pP1/3p1B2/1B1P4/1PQ3PP/2R2R1K b - - 5 26",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/p1p2q1p/p2n2p1/3P1pP1/3p1B2/1B1P4/1PQ3PP/2R2R1K b - - 5 26",
 	move: "Kb8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p2q1p/p1Qn2p1/3P1pP1/3p1B2/1B1P4/1P4PP/2R2R1K b - - 7 27",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p2q1p/p1Qn2p1/3P1pP1/3p1B2/1B1P4/1P4PP/2R2R1K b - - 7 27",
 	move: "a5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p2q1p/2Qn2p1/p2P1pP1/3p1B2/1B1P4/1P4PP/R4R1K b - - 1 28",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p2q1p/2Qn2p1/p2P1pP1/3p1B2/1B1P4/1P4PP/R4R1K b - - 1 28",
 	move: "Qg7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p3qp/2Qn2p1/R2P1pP1/3p1B2/1B1P4/1P4PP/5R1K b - - 0 29",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p3qp/2Qn2p1/R2P1pP1/3p1B2/1B1P4/1P4PP/5R1K b - - 0 29",
 	move: "Rh8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r3r/p1p3qp/Q2n2p1/R2P1pP1/3p1B2/1B1P4/1P4PP/5R1K b - - 2 30",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r3r/p1p3qp/Q2n2p1/R2P1pP1/3p1B2/1B1P4/1P4PP/5R1K b - - 2 30",
 	move: "Nc8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1knr3r/p1p3qp/Q5p1/1R1P1pP1/3p1B2/1B1P4/1P4PP/5R1K b - - 4 31",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1knr3r/p1p3qp/Q5p1/1R1P1pP1/3p1B2/1B1P4/1P4PP/5R1K b - - 4 31",
 	move: "Nb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r3r/p1p3qp/Qn4p1/1R1P1pP1/3p1B2/1B1P4/1P4PP/R6K b - - 6 32",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r3r/p1p3qp/Qn4p1/1R1P1pP1/3p1B2/1B1P4/1P4PP/R6K b - - 6 32",
 	move: "Rd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k4r/Q1p3qp/1n1r2p1/1R1P1pP1/3p1B2/1B1P4/1P4PP/2R4K b - - 2 34",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k4r/Q1p3qp/1n1r2p1/1R1P1pP1/3p1B2/1B1P4/1P4PP/2R4K b - - 2 34",
 	move: "Rd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k4r/Q1pr2qp/1R4p1/3P1pP1/3p1B2/1B1P4/1P4PP/2R4K b - - 0 35",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k4r/Q1pr2qp/1R4p1/3P1pP1/3p1B2/1B1P4/1P4PP/2R4K b - - 0 35",
 	move: "Rf7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "4k2r/2Q2rqp/4R1p1/3P1pP1/3p1B2/1B1P4/1P4PP/2R4K b - - 2 38",
 	move: "Kf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "4k2r/2Q2rqp/4R1p1/3P1pP1/3p1B2/1B1P4/1P4PP/2R4K b - - 2 38",
 	move: "Re7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
 	move: "f5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1p1pp/2n5/1N1p1p2/3P1B2/8/PPP1PPPP/R2QKBNR b KQkq - 1 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1p1pp/2n5/1N1p1p2/3P1B2/8/PPP1PPPP/R2QKBNR b KQkq - 1 4",
 	move: "e5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp3pp/2n5/1N1pPp2/5B2/8/PPP1PPPP/R2QKBNR b KQkq - 0 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp3pp/2n5/1N1pPp2/5B2/8/PPP1PPPP/R2QKBNR b KQkq - 0 5",
 	move: "g5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp4p/2n5/1N1pPpp1/8/8/PPP1PPPP/R1BQKBNR b KQkq - 1 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp4p/2n5/1N1pPpp1/8/8/PPP1PPPP/R1BQKBNR b KQkq - 1 6",
 	move: "g4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp4p/2n5/1N1pPp2/6p1/4P3/PPP2PPP/R1BQKBNR b KQkq - 0 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp4p/2n5/1N1pPp2/6p1/4P3/PPP2PPP/R1BQKBNR b KQkq - 0 7",
 	move: "Bc5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/2bpPp2/3N2p1/4P3/PPP2PPP/R1BQKBNR b KQkq - 2 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/2bpPp2/3N2p1/4P3/PPP2PPP/R1BQKBNR b KQkq - 2 8",
 	move: "Bb4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/3pPp2/1b1N2p1/4P3/PPPB1PPP/R2QKBNR b KQkq - 4 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/3pPp2/1b1N2p1/4P3/PPPB1PPP/R2QKBNR b KQkq - 4 9",
 	move: "Bxd2+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/3pPp2/3N2p1/4P3/PPPQ1PPP/R3KBNR b KQkq - 0 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/3pPp2/3N2p1/4P3/PPPQ1PPP/R3KBNR b KQkq - 0 10",
 	move: "Nxe5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/8/1B1pnp2/3N2p1/4P3/PPPQ1PPP/R3K1NR b KQkq - 1 11",
 	move: "Bd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/8/1B1pnp2/3N2p1/4P3/PPPQ1PPP/R3K1NR b KQkq - 1 11",
 	move: "c6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/pp5p/2N5/1B1pnp2/6p1/4P3/PPPQ1PPP/R3K1NR b KQkq - 0 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/pp5p/2N5/1B1pnp2/6p1/4P3/PPPQ1PPP/R3K1NR b KQkq - 0 12",
 	move: "bxc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/p6p/2p5/3pnp2/6p1/3BP3/PPPQ1PPP/R3K1NR b KQkq - 1 13",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/p6p/2p5/3pnp2/6p1/3BP3/PPPQ1PPP/R3K1NR b KQkq - 1 13",
 	move: "Nxd3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/p6p/2p5/3p1p2/6p1/3QP3/PPP2PPP/R3K1NR b KQkq - 0 14",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/p6p/2p5/3p1p2/6p1/3QP3/PPP2PPP/R3K1NR b KQkq - 0 14",
 	move: "Ne7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/p3n2p/2p5/3p1p2/6p1/3QP2P/PPP2PP1/R3K1NR b KQkq - 0 15",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/p3n2p/2p5/3p1p2/6p1/3QP2P/PPP2PP1/R3K1NR b KQkq - 0 15",
 	move: "gxh3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/p3n2p/2p5/3p1p2/8/3QP2N/PPP2PP1/R3K2R b KQkq - 0 16",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/p3n2p/2p5/3p1p2/8/3QP2N/PPP2PP1/R3K2R b KQkq - 0 16",
 	move: "Qb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p3n2p/1qp5/3p1p2/8/3QP2N/PPP2PP1/R4RK1 b kq - 2 17",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p3n2p/1qp5/3p1p2/8/3QP2N/PPP2PP1/R4RK1 b kq - 2 17",
 	move: "Qxb2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p3n2p/2p5/3p1p2/8/3QP2N/PqP2PP1/RR4K1 b kq - 1 18",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p3n2p/2p5/3p1p2/8/3QP2N/PqP2PP1/RR4K1 b kq - 1 18",
 	move: "Qf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p3n2p/2p2q2/3p1p2/5N2/3QP3/P1P2PP1/RR4K1 b kq - 3 19",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p3n2p/2p2q2/3p1p2/5N2/3QP3/P1P2PP1/RR4K1 b kq - 3 19",
 	move: "Ng6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p6p/2p2qn1/3p1p2/P4N2/3QP3/2P2PP1/RR4K1 b kq a3 0 20",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/p6p/2p2qn1/3p1p2/P4N2/3QP3/2P2PP1/RR4K1 b kq a3 0 20",
 	move: "Kd8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bk3r/p6p/2p2qn1/P2p1p2/5N2/3QP3/2P2PP1/RR4K1 b - - 0 21",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bk3r/p6p/2p2qn1/P2p1p2/5N2/3QP3/2P2PP1/RR4K1 b - - 0 21",
 	move: "Bd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2k3r/p2b3p/2p2qn1/P2p1p2/R4N2/3QP3/2P2PP1/1R4K1 b - - 2 22",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2k3r/p2b3p/2p2qn1/P2p1p2/R4N2/3QP3/2P2PP1/1R4K1 b - - 2 22",
 	move: "Rg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2k2r1/p2b3p/Q1p2qn1/P2p1p2/R4N2/4P3/2P2PP1/1R4K1 b - - 4 23",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2k2r1/p2b3p/Q1p2qn1/P2p1p2/R4N2/4P3/2P2PP1/1R4K1 b - - 4 23",
 	move: "Nxf4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2k2r1/p2b3p/Q1p2q2/P2p1p2/R4P2/8/2P2PP1/1R4K1 b - - 0 24",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2k2r1/p2b3p/Q1p2q2/P2p1p2/R4P2/8/2P2PP1/1R4K1 b - - 0 24",
 	move: "Qg7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2k2r1/p2b2qp/Q1p5/P2p1p2/R4P2/6P1/2P2P2/1R4K1 b - - 0 25",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2k2r1/p2b2qp/Q1p5/P2p1p2/R4P2/6P1/2P2P2/1R4K1 b - - 0 25",
 	move: "Be8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb1r1/p5qp/Q1p5/P2p1p2/1R3P2/6P1/2P2P2/1R4K1 b - - 2 26",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb1r1/p5qp/Q1p5/P2p1p2/1R3P2/6P1/2P2P2/1R4K1 b - - 2 26",
 	move: "Qc7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb1r1/p1q4p/Q1p5/P2p1p2/1R3P2/2P3P1/5P2/1R4K1 b - - 0 27",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb1r1/p1q4p/Q1p5/P2p1p2/1R3P2/2P3P1/5P2/1R4K1 b - - 0 27",
 	move: "Rg6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb3/p1q4p/Q1p3r1/P2p1p2/1RP2P2/6P1/5P2/1R4K1 b - - 0 28",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb3/p1q4p/Q1p3r1/P2p1p2/1RP2P2/6P1/5P2/1R4K1 b - - 0 28",
 	move: "c5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb3/pRq4p/Q5r1/P1pp1p2/2P2P2/6P1/5P2/1R4K1 b - - 1 29",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb3/pRq4p/Q5r1/P1pp1p2/2P2P2/6P1/5P2/1R4K1 b - - 1 29",
 	move: "Rxa6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb3/p1R4p/r7/P1pp1p2/2P2P2/6P1/5P2/1R4K1 b - - 0 30",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2kb3/p1R4p/r7/P1pp1p2/2P2P2/6P1/5P2/1R4K1 b - - 0 30",
 	move: "Kxc7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3b3/p1k4p/r7/P1pP1p2/5P2/6P1/5P2/1R4K1 b - - 0 31",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3b3/p1k4p/r7/P1pP1p2/5P2/6P1/5P2/1R4K1 b - - 0 31",
 	move: "Rxa5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3b3/p1k4p/8/r1pP1p2/5P2/6P1/5P2/3R2K1 b - - 1 32",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3b3/p1k4p/8/r1pP1p2/5P2/6P1/5P2/3R2K1 b - - 1 32",
 	move: "Bf7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r7/p1k2b1p/3P4/r1p2p2/5P2/6P1/5P2/3R2K1 b - - 0 33",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/p1k2b1p/3P4/r1p2p2/5P2/6P1/5P2/3R2K1 b - - 0 33",
 	move: "Kc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r7/p2P1b1p/2k5/r1p2p2/5P2/6P1/5P2/3R2K1 b - - 0 34",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/p2P1b1p/2k5/r1p2p2/5P2/6P1/5P2/3R2K1 b - - 0 34",
 	move: "Rd8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "3r4/p2P1b1p/2k5/r1p2p2/5P2/6P1/5PK1/3R4 b - - 2 35",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "3r4/p2P1b1p/2k5/r1p2p2/5P2/6P1/5PK1/3R4 b - - 2 35",
 	move: "Rxd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/p2R1b1p/2k5/r1p2p2/5P2/6P1/5PK1/8 b - - 0 36",
 	move: "a6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/p2R1b1p/2k5/r1p2p2/5P2/6P1/5PK1/8 b - - 0 36",
 	move: "Kxd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/p2k1b1p/8/r1p2p2/5P2/6PK/5P2/8 b - - 1 37",
 	move: "a6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/p2k1b1p/8/r1p2p2/5P2/6PK/5P2/8 b - - 1 37",
 	move: "Kc8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k5/p4b1p/8/r1p2p2/5P1K/6P1/5P2/8 b - - 3 38",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k5/p4b1p/8/r1p2p2/5P1K/6P1/5P2/8 b - - 3 38",
 	move: "Kb8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/p4b1p/8/r1p2p2/5PPK/8/5P2/8 b - - 0 39",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/p4b1p/8/r1p2p2/5PPK/8/5P2/8 b - - 0 39",
 	move: "Be6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/p6p/4b3/r1p2pP1/5P1K/8/5P2/8 b - - 0 40",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/p6p/4b3/r1p2pP1/5P1K/8/5P2/8 b - - 0 40",
 	move: "Ra3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/p6p/4b3/2p2pPK/5P2/r7/5P2/8 b - - 2 41",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/p6p/4b3/2p2pPK/5P2/r7/5P2/8 b - - 2 41",
 	move: "Rh3#"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
 	move: "f5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1p1pp/2n5/1N1p1p2/3P1B2/8/PPP1PPPP/R2QKBNR b KQkq - 1 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1p1pp/2n5/1N1p1p2/3P1B2/8/PPP1PPPP/R2QKBNR b KQkq - 1 4",
 	move: "e5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp3pp/2n5/1N1pPp2/5B2/8/PPP1PPPP/R2QKBNR b KQkq - 0 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp3pp/2n5/1N1pPp2/5B2/8/PPP1PPPP/R2QKBNR b KQkq - 0 5",
 	move: "g5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp4p/2n5/1N1pPpB1/8/8/PPP1PPPP/R2QKBNR b KQkq - 0 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp4p/2n5/1N1pPpB1/8/8/PPP1PPPP/R2QKBNR b KQkq - 0 6",
 	move: "Bb4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/1N1pPpB1/1b6/2P5/PP2PPPP/R2QKBNR b KQkq - 0 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/1N1pPpB1/1b6/2P5/PP2PPPP/R2QKBNR b KQkq - 0 7",
 	move: "Bxc3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/1N1pPpB1/8/2P5/P3PPPP/R2QKBNR b KQkq - 0 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp4p/2n5/1N1pPpB1/8/2P5/P3PPPP/R2QKBNR b KQkq - 0 8",
 	move: "Qd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bBk1nr/pppq3p/2n5/1N1pPp2/8/2P5/P3PPPP/R2QKBNR b KQkq - 2 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bBk1nr/pppq3p/2n5/1N1pPp2/8/2P5/P3PPPP/R2QKBNR b KQkq - 2 9",
 	move: "Kxd8"
	}),
	output: {
 	1: 1
	}
},
];
