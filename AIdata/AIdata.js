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
},{
	input: DataSort({
 	fen: "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
 	move: "g6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/pppp1p1p/2n3p1/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 1 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/pppp1p1p/2n3p1/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 1 4",
 	move: "Nh6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/2n3pn/4p3/2B1P2P/5Q2/PPPP1PP1/RNB1K1NR b KQkq h3 0 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/2n3pn/4p3/2B1P2P/5Q2/PPPP1PP1/RNB1K1NR b KQkq h3 0 5",
 	move: "Nb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/6pn/4p3/1nB1P2P/N4Q2/PPPP1PP1/R1B1K1NR b KQkq - 2 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/6pn/4p3/1nB1P2P/N4Q2/PPPP1PP1/R1B1K1NR b KQkq - 2 6",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/2n3pn/4p3/2B1P1PP/N4Q2/PPPP1P2/R1B1K1NR b KQkq g3 0 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/2n3pn/4p3/2B1P1PP/N4Q2/PPPP1P2/R1B1K1NR b KQkq g3 0 7",
 	move: "Nd4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/6pn/4p3/2BnP1PP/N6Q/PPPP1P2/R1B1K1NR b KQkq - 2 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1p1p/6pn/4p3/2BnP1PP/N6Q/PPPP1P2/R1B1K1NR b KQkq - 2 8",
 	move: "Bxa3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p3/2BnP1PP/b1P4Q/PP1P1P2/R1B1K1NR b KQkq - 0 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p3/2BnP1PP/b1P4Q/PP1P1P2/R1B1K1NR b KQkq - 0 9",
 	move: "Nc2+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p3/2B1P1PP/b1P4Q/PPnP1P2/R1B2KNR b kq - 2 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p3/2B1P1PP/b1P4Q/PPnP1P2/R1B2KNR b kq - 2 10",
 	move: "Nxa1"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p3/2B1P1PP/P1P4Q/P2P1P2/n1B2KNR b kq - 0 11",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p3/2B1P1PP/P1P4Q/P2P1P2/n1B2KNR b kq - 0 11",
 	move: "Nc2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p1P1/2B1P2P/P1P4Q/P1nP1P2/2B2KNR b kq - 0 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1p1p/6pn/4p1P1/2B1P2P/P1P4Q/P1nP1P2/2B2KNR b kq - 0 12",
 	move: "Ng8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/pppp1p1p/6p1/4p1P1/2B1P2P/P1P2N1Q/P1nP1P2/2B2K1R b kq - 2 13",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/pppp1p1p/6p1/4p1P1/2B1P2P/P1P2N1Q/P1nP1P2/2B2K1R b kq - 2 13",
 	move: "h6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/pppp1p2/6pp/4N1P1/2B1P2P/P1P4Q/P1nP1P2/2B2K1R b kq - 0 14",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/pppp1p2/6pp/4N1P1/2B1P2P/P1P4Q/P1nP1P2/2B2K1R b kq - 0 14",
 	move: "d5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6pp/3pN1P1/2B1P2P/P1PQ4/P1nP1P2/2B2K1R b kq - 1 15",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6pp/3pN1P1/2B1P2P/P1PQ4/P1nP1P2/2B2K1R b kq - 1 15",
 	move: "dxc4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6pp/4N1P1/2p1P2P/P1P5/P1QP1P2/2B2K1R b kq - 0 16",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6pp/4N1P1/2p1P2P/P1P5/P1QP1P2/2B2K1R b kq - 0 16",
 	move: "hxg5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6p1/4N1p1/2pPP2P/P1P5/P1Q2P2/2B2K1R b kq d3 0 17",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6p1/4N1p1/2pPP2P/P1P5/P1Q2P2/2B2K1R b kq d3 0 17",
 	move: "cxd3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6p1/4N1p1/4P2P/P1Pp4/P2Q1P2/2B2K1R b kq - 1 18",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2p2/6p1/4N1p1/4P2P/P1Pp4/P2Q1P2/2B2K1R b kq - 1 18",
 	move: "Rxh4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1n1/ppp2p2/6p1/4N1Q1/4P2r/P1Pp4/P4P2/2B2K1R b q - 0 19",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1n1/ppp2p2/6p1/4N1Q1/4P2r/P1Pp4/P4P2/2B2K1R b q - 0 19",
 	move: "Rxh1+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1n1/ppp2p2/6p1/4N3/4P3/P1Pp4/P4P2/2B2KQr b q - 1 20",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1n1/ppp2p2/6p1/4N3/4P3/P1Pp4/P4P2/2B2KQr b q - 1 20",
 	move: "Bh3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1n1/ppp2p2/6p1/4N3/4P3/P1Pp3b/P4P2/2B1K1Qr b q - 3 21",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1n1/ppp2p2/6p1/4N3/4P3/P1Pp3b/P4P2/2B1K1Qr b q - 3 21",
 	move: "Rxg1+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1n1/ppp2p2/6p1/4N3/4P3/P1Pp3b/P2K1P2/2B3r1 b q - 1 22",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1n1/ppp2p2/6p1/4N3/4P3/P1Pp3b/P2K1P2/2B3r1 b q - 1 22",
 	move: "Nf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/5np1/4N3/P3P3/2Pp3b/P2K1P2/2B3r1 b q - 0 23",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/5np1/4N3/P3P3/2Pp3b/P2K1P2/2B3r1 b q - 0 23",
 	move: "Nxe4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/4N3/P3n3/2PpK2b/P4P2/2B3r1 b q - 1 24",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/4N3/P3n3/2PpK2b/P4P2/2B3r1 b q - 1 24",
 	move: "d2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/4N3/P3n3/2P1K2b/P2B1P2/6r1 b q - 0 25",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/4N3/P3n3/2P1K2b/P2B1P2/6r1 b q - 0 25",
 	move: "Nxd2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/8/P7/2PNK2b/P2n1P2/6r1 b q - 1 26",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/8/P7/2PNK2b/P2n1P2/6r1 b q - 1 26",
 	move: "Nc4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/8/P1n1K3/2PN3b/P4P2/6r1 b q - 3 27",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/8/P1n1K3/2PN3b/P4P2/6r1 b q - 3 27",
 	move: "Bf5+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/5b2/P1n2K2/2PN4/P4P2/6r1 b q - 5 28",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/5b2/P1n2K2/2PN4/P4P2/6r1 b q - 5 28",
 	move: "Rg4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/5b2/P1n3r1/2PN1K2/P4P2/8 b q - 7 29",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk3/ppp2p2/6p1/5b2/P1n3r1/2PN1K2/P4P2/8 b q - 7 29",
 	move: "Qxd3#"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
 	move: "e6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp2ppp/2n1p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R b KQkq - 2 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp2ppp/2n1p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R b KQkq - 2 4",
 	move: "Bb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2ppp/2n1p3/3p4/1b1P4/P1N1PN2/1PP2PPP/R1BQKB1R b KQkq - 0 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2ppp/2n1p3/3p4/1b1P4/P1N1PN2/1PP2PPP/R1BQKB1R b KQkq - 0 5",
 	move: "Bxc3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2ppp/2n1p3/3p4/3P4/P1P1PN2/2P2PPP/R1BQKB1R b KQkq - 0 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/ppp2ppp/2n1p3/3p4/3P4/P1P1PN2/2P2PPP/R1BQKB1R b KQkq - 0 6",
 	move: "a6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/1pp2ppp/p1n1p3/3p4/3P4/P1PBPN2/2P2PPP/R1BQK2R b KQkq - 1 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/1pp2ppp/p1n1p3/3p4/3P4/P1PBPN2/2P2PPP/R1BQK2R b KQkq - 1 7",
 	move: "Nf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/1pp2ppp/p1n1pn2/3p4/3P4/P1PBPN2/2P2PPP/R1BQ1RK1 b kq - 3 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/1pp2ppp/p1n1pn2/3p4/3P4/P1PBPN2/2P2PPP/R1BQ1RK1 b kq - 3 8",
 	move: "Qd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/1pp2ppp/p1nqpn2/3p4/2PP4/P2BPN2/2P2PPP/R1BQ1RK1 b kq - 0 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/1pp2ppp/p1nqpn2/3p4/2PP4/P2BPN2/2P2PPP/R1BQ1RK1 b kq - 0 9",
 	move: "b6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/2p2ppp/ppnqpn2/3P4/3P4/P2BPN2/2P2PPP/R1BQ1RK1 b kq - 0 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/2p2ppp/ppnqpn2/3P4/3P4/P2BPN2/2P2PPP/R1BQ1RK1 b kq - 0 10",
 	move: "exd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/2p2ppp/ppnq1n2/3p4/3P4/P2BPN2/2P2PPP/R1BQR1K1 b kq - 1 11",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/2p2ppp/ppnq1n2/3p4/3P4/P2BPN2/2P2PPP/R1BQR1K1 b kq - 1 11",
 	move: "Bg4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k2r/2p2ppp/ppnq1n2/3p4/3P2b1/P2BPN1P/2P2PP1/R1BQR1K1 b kq - 0 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k2r/2p2ppp/ppnq1n2/3p4/3P2b1/P2BPN1P/2P2PP1/R1BQR1K1 b kq - 0 12",
 	move: "Bd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k2r/2pb1ppp/ppnq1n2/3p4/3P4/P1PBPN1P/5PP1/R1BQR1K1 b kq - 0 13",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k2r/2pb1ppp/ppnq1n2/3p4/3P4/P1PBPN1P/5PP1/R1BQR1K1 b kq - 0 13",
 	move: "O-O-O"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/2pb1ppp/ppnq1n2/3p2N1/3P4/P1PBP2P/5PP1/R1BQR1K1 b - - 2 14",
 	move: "Kb7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/2pb1ppp/ppnq1n2/3p2N1/3P4/P1PBP2P/5PP1/R1BQR1K1 b - - 2 14",
 	move: "Rdf8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1ppp/ppnq1n2/3p2N1/2PP4/P2BP2P/5PP1/R1BQR1K1 b - - 0 15",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1ppp/ppnq1n2/3p2N1/2PP4/P2BP2P/5PP1/R1BQR1K1 b - - 0 15",
 	move: "h6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1pp1/ppnq1n1p/3p4/2PP4/P2BPN1P/5PP1/R1BQR1K1 b - - 1 16",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1pp1/ppnq1n1p/3p4/2PP4/P2BPN1P/5PP1/R1BQR1K1 b - - 1 16",
 	move: "dxc4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1pp1/ppnq1n1p/8/2BP4/P3PN1P/5PP1/R1BQR1K1 b - - 0 17",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1pp1/ppnq1n1p/8/2BP4/P3PN1P/5PP1/R1BQR1K1 b - - 0 17",
 	move: "Na5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1pp1/Bp1q1n1p/n7/3P4/P3PN1P/5PP1/R1BQR1K1 b - - 0 18",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r1r/2pb1pp1/Bp1q1n1p/n7/3P4/P3PN1P/5PP1/R1BQR1K1 b - - 0 18",
 	move: "Kb8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2pb1pp1/1p1q1n1p/n7/3P4/P2BPN1P/5PP1/R1BQR1K1 b - - 2 19",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2pb1pp1/1p1q1n1p/n7/3P4/P2BPN1P/5PP1/R1BQR1K1 b - - 2 19",
 	move: "Be6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1qbn1p/n7/3PP3/P2B1N1P/5PP1/R1BQR1K1 b - - 0 20",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1qbn1p/n7/3PP3/P2B1N1P/5PP1/R1BQR1K1 b - - 0 20",
 	move: "Bb3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q1n1p/n7/3PP3/Pb1B1N1P/3Q1PP1/R1B1R1K1 b - - 2 21",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q1n1p/n7/3PP3/Pb1B1N1P/3Q1PP1/R1B1R1K1 b - - 2 21",
 	move: "Nc4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q1n1p/8/2nPP3/PbQB1N1P/5PP1/R1B1R1K1 b - - 4 22",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q1n1p/8/2nPP3/PbQB1N1P/5PP1/R1B1R1K1 b - - 4 22",
 	move: "Na5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q1n1p/n3P3/3P4/PbQB1N1P/5PP1/R1B1R1K1 b - - 0 23",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q1n1p/n3P3/3P4/PbQB1N1P/5PP1/R1B1R1K1 b - - 0 23",
 	move: "Nd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q3p/n2nP3/3P4/Pb1B1N1P/3Q1PP1/R1B1R1K1 b - - 2 24",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1p1q3p/n2nP3/3P4/Pb1B1N1P/3Q1PP1/R1B1R1K1 b - - 2 24",
 	move: "Qc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1pq4p/n2nP3/3P4/Pb1B1N1P/1B1Q1PP1/R3R1K1 b - - 4 25",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p2pp1/1pq4p/n2nP3/3P4/Pb1B1N1P/1B1Q1PP1/R3R1K1 b - - 4 25",
 	move: "f5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p3p1/1pq4p/n2nPp2/3P4/Pb1B1N1P/1B1Q1PP1/2R1R1K1 b - - 1 26",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r1r/2p3p1/1pq4p/n2nPp2/3P4/Pb1B1N1P/1B1Q1PP1/2R1R1K1 b - - 1 26",
 	move: "Qa8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "qk3r1r/2p3p1/1p2P2p/n2n1p2/3P4/Pb1B1N1P/1B1Q1PP1/2R1R1K1 b - - 0 27",
 	move: "Qb7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "qk3r1r/2p3p1/1p2P2p/n2n1p2/3P4/Pb1B1N1P/1B1Q1PP1/2R1R1K1 b - - 0 27",
 	move: "Nb7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "qk3r1r/1np3p1/1p2P2p/3nNp2/3P4/Pb1B3P/1B1Q1PP1/2R1R1K1 b - - 2 28",
 	move: "Qa7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "qk3r1r/1np3p1/1p2P2p/3nNp2/3P4/Pb1B3P/1B1Q1PP1/2R1R1K1 b - - 2 28",
 	move: "Rfg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "qk4rr/1npN2p1/1p2P2p/3n1p2/3P4/Pb1B3P/1B1Q1PP1/2R1R1K1 b - - 4 29",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "qk4rr/1npN2p1/1p2P2p/3n1p2/3P4/Pb1B3P/1B1Q1PP1/2R1R1K1 b - - 4 29",
 	move: "Ka7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "q5rr/knpNP1p1/1p5p/3n1p2/3P4/Pb1B3P/1B1Q1PP1/2R1R1K1 b - - 0 30",
 	move: "Qb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "q5rr/knpNP1p1/1p5p/3n1p2/3P4/Pb1B3P/1B1Q1PP1/2R1R1K1 b - - 0 30",
 	move: "Qe8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knpNP1p1/1p5p/1B1n1p2/3P4/Pb5P/1B1Q1PP1/2R1R1K1 b - - 2 31",
 	move: "Qf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knpNP1p1/1p5p/1B1n1p2/3P4/Pb5P/1B1Q1PP1/2R1R1K1 b - - 2 31",
 	move: "Nxe7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knpNn1p1/1p5p/1B3p2/3P4/PbR4P/1B1Q1PP1/4R1K1 b - - 1 32",
 	move: "Qf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knpNn1p1/1p5p/1B3p2/3P4/PbR4P/1B1Q1PP1/4R1K1 b - - 1 32",
 	move: "Bd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knRNn1p1/1p5p/1B1b1p2/3P4/P6P/1B1Q1PP1/4R1K1 b - - 0 33",
 	move: "Qf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knRNn1p1/1p5p/1B1b1p2/3P4/P6P/1B1Q1PP1/4R1K1 b - - 0 33",
 	move: "Bxg2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knRNn1p1/1p5p/1B3p2/3P4/P6P/1B1Q1PK1/4R3 b - - 0 34",
 	move: "Qf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "4q1rr/knRNn1p1/1p5p/1B3p2/3P4/P6P/1B1Q1PK1/4R3 b - - 0 34",
 	move: "Qg6+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/knRNn1p1/1p4qp/1B3p2/3P4/P6P/1B1Q1P2/4RK2 b - - 2 35",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/knRNn1p1/1p4qp/1B3p2/3P4/P6P/1B1Q1P2/4RK2 b - - 2 35",
 	move: "Qh5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/kn1Nn1p1/1p5p/1B3p1q/3P4/P1R4P/1B1Q1P2/4RK2 b - - 4 36",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/kn1Nn1p1/1p5p/1B3p1q/3P4/P1R4P/1B1Q1P2/4RK2 b - - 4 36",
 	move: "Nd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/kn1N2p1/1p5p/1B1n1p1q/3P4/P2R3P/1B1Q1P2/4RK2 b - - 6 37",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/kn1N2p1/1p5p/1B1n1p1q/3P4/P2R3P/1B1Q1P2/4RK2 b - - 6 37",
 	move: "Nd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pBn3p/3n1p1q/3P4/P2R3P/1B1Q1P2/4RK2 b - - 8 38",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pBn3p/3n1p1q/3P4/P2R3P/1B1Q1P2/4RK2 b - - 8 38",
 	move: "Nc4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pB4p/3n1p1q/2nP4/P2R3P/1BQ2P2/4RK2 b - - 10 39",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pB4p/3n1p1q/2nP4/P2R3P/1BQ2P2/4RK2 b - - 10 39",
 	move: "Nce3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pB4p/3n1p1q/3P4/P2RR2P/1BQ2P2/5K2 b - - 0 40",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pB4p/3n1p1q/3P4/P2RR2P/1BQ2P2/5K2 b - - 0 40",
 	move: "Nxe3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pB4p/5p1q/3P4/P3R2P/1BQ2P2/5K2 b - - 0 41",
 	move: "Rf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6rr/k2N2p1/1pB4p/5p1q/3P4/P3R2P/1BQ2P2/5K2 b - - 0 41",
 	move: "b5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
 	move: "e6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp2ppp/2n1p3/1B1p4/3P4/4PN2/PPP2PPP/RNBQK2R b KQkq - 2 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp2ppp/2n1p3/1B1p4/3P4/4PN2/PPP2PPP/RNBQK2R b KQkq - 2 4",
 	move: "a6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp2ppp/p1n1p3/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R b KQkq - 1 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp2ppp/p1n1p3/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R b KQkq - 1 5",
 	move: "Nb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp2ppp/p3p3/3p4/1n1P4/4PN2/PPP1BPPP/RNBQK2R b KQkq - 3 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp2ppp/p3p3/3p4/1n1P4/4PN2/PPP1BPPP/RNBQK2R b KQkq - 3 6",
 	move: "c5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1p3ppp/p3p3/2pp4/1n1P4/2P1PN2/PP2BPPP/RNBQK2R b KQkq - 0 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1p3ppp/p3p3/2pp4/1n1P4/2P1PN2/PP2BPPP/RNBQK2R b KQkq - 0 7",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1p3ppp/p1n1p3/2Pp4/8/2P1PN2/PP2BPPP/RNBQK2R b KQkq - 0 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1p3ppp/p1n1p3/2Pp4/8/2P1PN2/PP2BPPP/RNBQK2R b KQkq - 0 8",
 	move: "Bxc5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/1p3ppp/p1n1p3/2bp4/8/2P1PN2/PP2BPPP/RNBQ1RK1 b kq - 1 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk1nr/1p3ppp/p1n1p3/2bp4/8/2P1PN2/PP2BPPP/RNBQ1RK1 b kq - 1 9",
 	move: "Nf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/1p3ppp/p1n1pn2/2bp4/8/2P1PN1P/PP2BPP1/RNBQ1RK1 b kq - 0 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/1p3ppp/p1n1pn2/2bp4/8/2P1PN1P/PP2BPP1/RNBQ1RK1 b kq - 0 10",
 	move: "Bd7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk2r/1p1b1ppp/p1n1pn2/2bp4/8/2P1PN1P/PP1NBPP1/R1BQ1RK1 b kq - 2 11",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk2r/1p1b1ppp/p1n1pn2/2bp4/8/2P1PN1P/PP1NBPP1/R1BQ1RK1 b kq - 2 11",
 	move: "Rg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/1p1b1ppp/p1n1pn2/2bp4/8/1NP1PN1P/PP2BPP1/R1BQ1RK1 b q - 4 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/1p1b1ppp/p1n1pn2/2bp4/8/1NP1PN1P/PP2BPP1/R1BQ1RK1 b q - 4 12",
 	move: "Bd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/1p1b1ppp/p1nbpn2/3p2N1/8/1NP1P2P/PP2BPP1/R1BQ1RK1 b q - 6 13",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qk1r1/1p1b1ppp/p1nbpn2/3p2N1/8/1NP1P2P/PP2BPP1/R1BQ1RK1 b q - 6 13",
 	move: "Qc7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/1pqb1ppp/p1nbpn2/3p4/8/1NP1PN1P/PP2BPP1/R1BQ1RK1 b q - 8 14",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/1pqb1ppp/p1nbpn2/3p4/8/1NP1PN1P/PP2BPP1/R1BQ1RK1 b q - 8 14",
 	move: "O-O-O"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/1pqb1ppp/p1nbpn2/3p4/2P5/1N2PN1P/PP2BPP1/R1BQ1RK1 b - - 0 15",
 	move: "Rde8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/1pqb1ppp/p1nbpn2/2Pp4/8/1N2PN1P/PP2BPP1/R1BQ1RK1 b - - 0 16",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/1pqb1ppp/p1nbpn2/2Pp4/8/1N2PN1P/PP2BPP1/R1BQ1RK1 b - - 0 16",
 	move: "Be7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/1pqbbppp/p1n1pn2/2Pp2N1/8/1N2P2P/PP2BPP1/R1BQ1RK1 b - - 2 17",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/1pqbbppp/p1n1pn2/2Pp2N1/8/1N2P2P/PP2BPP1/R1BQ1RK1 b - - 2 17",
 	move: "Rdf8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/1pqbbppp/p1n1pn2/2Pp2N1/5P2/1N2P2P/PP2B1P1/R1BQ1RK1 b - f3 0 18",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/1pqbbppp/p1n1pn2/2Pp2N1/5P2/1N2P2P/PP2B1P1/R1BQ1RK1 b - f3 0 18",
 	move: "b6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qbbppp/Bpn1pn2/2Pp2N1/5P2/1N2P2P/PP4P1/R1BQ1RK1 b - - 0 19",
 	move: "Ka7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qbbppp/Bpn1pn2/2Pp2N1/5P2/1N2P2P/PP4P1/R1BQ1RK1 b - - 0 19",
 	move: "Bxc5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qb1ppp/Bpn1pn2/2Np2N1/5P2/4P2P/PP4P1/R1BQ1RK1 b - - 0 20",
 	move: "Ka7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qb1ppp/Bpn1pn2/2Np2N1/5P2/4P2P/PP4P1/R1BQ1RK1 b - - 0 20",
 	move: "bxc5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qb1ppp/B1n1pn2/2pp2N1/5P2/P3P2P/1P4P1/R1BQ1RK1 b - - 0 21",
 	move: "Ka7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qb1ppp/B1n1pn2/2pp2N1/5P2/P3P2P/1P4P1/R1BQ1RK1 b - - 0 21",
 	move: "h6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3rr1/2qb1pp1/B1n1pn1p/2pp2N1/5P2/PQ2P2P/1P4P1/R1B2RK1 b - - 1 22",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1qb1pp1/2n1pn1p/1Bpp2N1/5P2/PQ2P2P/1P4P1/R1B2RK1 b - - 3 23",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1qb1pp1/2n1pn1p/1Bpp2N1/5P2/PQ2P2P/1P4P1/R1B2RK1 b - - 3 23",
 	move: "Na5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1qb1pp1/4pn1p/nBpp2N1/Q4P2/P3P2P/1P4P1/R1B2RK1 b - - 5 24",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1qb1pp1/4pn1p/nBpp2N1/Q4P2/P3P2P/1P4P1/R1B2RK1 b - - 5 24",
 	move: "Bxb5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1q2pp1/4pn1p/nQpp2N1/5P2/P3P2P/1P4P1/R1B2RK1 b - - 0 25",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1q2pp1/4pn1p/nQpp2N1/5P2/P3P2P/1P4P1/R1B2RK1 b - - 0 25",
 	move: "hxg5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1q2pp1/4pn2/nQpp2p1/5P2/P3P2P/1P1B2P1/R4RK1 b - - 1 26",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5rr1/k1q2pp1/4pn2/nQpp2p1/5P2/P3P2P/1P1B2P1/R4RK1 b - - 1 26",
 	move: "Rb8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1r4r1/k1q2pp1/4pn2/BQpp2p1/5P2/P3P2P/1P4P1/R4RK1 b - - 0 27",
 	move: "Rbc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1r4r1/k1q2pp1/4pn2/BQpp2p1/5P2/P3P2P/1P4P1/R4RK1 b - - 0 27",
 	move: "Rxb5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/k1B2pp1/4pn2/1rpp2p1/5P2/P3P2P/1P4P1/R4RK1 b - - 0 28",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/k1B2pp1/4pn2/1rpp2p1/5P2/P3P2P/1P4P1/R4RK1 b - - 0 28",
 	move: "Ne4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/k1B2pp1/4p3/1rpp2p1/1P2nP2/P3P2P/6P1/R4RK1 b - b3 0 29",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/k1B2pp1/4p3/1rpp2p1/1P2nP2/P3P2P/6P1/R4RK1 b - b3 0 29",
 	move: "Rb7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr3pp1/4p3/2ppB1p1/1P2nP2/P3P2P/6P1/R4RK1 b - - 2 30",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr3pp1/4p3/2ppB1p1/1P2nP2/P3P2P/6P1/R4RK1 b - - 2 30",
 	move: "f6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P2nP2/P3P2P/1B4P1/R4RK1 b - - 1 31",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P2nP2/P3P2P/1B4P1/R4RK1 b - - 1 31",
 	move: "Ng3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P3P2/P3P1nP/1B3RP1/R5K1 b - - 3 32",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P3P2/P3P1nP/1B3RP1/R5K1 b - - 3 32",
 	move: "Ne4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P2nP2/P3P2P/1B4P1/R4RK1 b - - 5 33",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P2nP2/P3P2P/1B4P1/R4RK1 b - - 5 33",
 	move: "Ng3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P3P2/P3P1nP/1B3RP1/R5K1 b - - 7 34",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P3P2/P3P1nP/1B3RP1/R5K1 b - - 7 34",
 	move: "Ne4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P2nP2/P3PR1P/1B4P1/R5K1 b - - 9 35",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr4p1/4pp2/2pp2p1/1P2nP2/P3PR1P/1B4P1/R5K1 b - - 9 35",
 	move: "g6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr6/4ppp1/2pp2P1/1P2n3/P3PR1P/1B4P1/R5K1 b - - 0 36",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr6/4ppp1/2pp2P1/1P2n3/P3PR1P/1B4P1/R5K1 b - - 0 36",
 	move: "fxg5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr6/4p1p1/2pp2p1/1P2n3/P3PR1P/1B4P1/2R3K1 b - - 1 37",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr6/4p1p1/2pp2p1/1P2n3/P3PR1P/1B4P1/2R3K1 b - - 1 37",
 	move: "cxb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr6/4p1p1/3p2p1/1P2n3/4PR1P/1B4P1/2R3K1 b - - 0 38",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/kr6/4p1p1/3p2p1/1P2n3/4PR1P/1B4P1/2R3K1 b - - 0 38",
 	move: "Rxb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/k7/4p1p1/3p2p1/1r2n3/4PR1P/1B4P1/R5K1 b - - 1 39",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/k7/4p1p1/3p2p1/1r2n3/4PR1P/1B4P1/R5K1 b - - 1 39",
 	move: "Kb7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/1k6/4p1p1/3pB1p1/1r2n3/4PR1P/6P1/R5K1 b - - 3 40",
 	move: "Rb3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/1k3R2/4p1p1/3pB1p1/4n3/1r2P2P/6P1/R5K1 b - - 5 41",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/1k3R2/4p1p1/3pB1p1/4n3/1r2P2P/6P1/R5K1 b - - 5 41",
 	move: "Kb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/5R2/1k2p1p1/3p2p1/3Bn3/1r2P2P/6P1/R5K1 b - - 7 42",
 	move: "Kb5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/5R2/R1k1p1p1/3p2p1/3Bn3/1r2P2P/6P1/6K1 b - - 9 43",
 	move: "Rb6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/5R2/1R2p1p1/1k1p2p1/3Bn3/1r2P2P/6P1/6K1 b - - 11 44",
 	move: "Ka4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1R2p1p1/3p2p1/2kBn3/1r2P2P/6P1/5RK1 b - - 13 45",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1R2p1p1/3p2p1/2kBn3/1r2P2P/6P1/5RK1 b - - 13 45",
 	move: "Rxb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1r2p1p1/3p2p1/2kBn3/4P2P/6P1/2R3K1 b - - 1 46",
 	move: "Kb3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1r2p1p1/3p2p1/3Bn3/1k2P2P/6P1/1R4K1 b - - 3 47",
 	move: "Ka4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1r2p1p1/3p2p1/3Bn3/1k2P2P/6P1/1R4K1 b - - 3 47",
 	move: "Ka3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1R2p1p1/3p2p1/3Bn3/k3P2P/6P1/6K1 b - - 0 48",
 	move: "Rh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "6r1/8/1R2p1p1/3p2p1/3Bn3/k3P2P/6P1/6K1 b - - 0 48",
 	move: "Rc8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2r5/8/R3p1p1/3p2p1/3Bn3/k3P2P/6P1/6K1 b - - 2 49",
 	move: "Kb4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2r5/8/R3p1p1/3p2p1/3Bn3/k3P2P/6P1/6K1 b - - 2 49",
 	move: "Kb3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2r5/8/R3p1p1/3p2p1/3Bn3/1k2P2P/6P1/5K2 b - - 4 50",
 	move: "Rc1+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/8/R3p1p1/3p2p1/3Bn3/1k2P2P/4K1P1/2r5 b - - 6 51",
 	move: "Rc2+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/8/R3p1p1/3p2p1/3Bn3/1k1KP2P/2r3P1/8 b - - 8 52",
 	move: "Rd2#"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 1 2",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq e3 0 3",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq e3 0 3",
 	move: "dxe4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
 	move: "Bf5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qkbnr/ppp1pppp/2n5/2N2b2/3P4/8/PPP2PPP/R1BQKBNR b KQkq - 2 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qkbnr/ppp1pppp/2n5/2N2b2/3P4/8/PPP2PPP/R1BQKBNR b KQkq - 2 5",
 	move: "Qxd4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1pppp/2n5/2N2b2/3Q4/8/PPP2PPP/R1B1KBNR b KQkq - 0 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1pppp/2n5/2N2b2/3Q4/8/PPP2PPP/R1B1KBNR b KQkq - 0 6",
 	move: "Nxd4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1pppp/8/2N2b2/3n4/8/PPP2PPP/R1BK1BNR b kq - 1 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1pppp/8/2N2b2/3n4/8/PPP2PPP/R1BK1BNR b kq - 1 7",
 	move: "Bxc2+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1pppp/8/2N5/3n4/8/PPbK1PPP/R1B2BNR b kq - 1 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1pppp/8/2N5/3n4/8/PPbK1PPP/R1B2BNR b kq - 1 8",
 	move: "f5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1p1pp/8/2N2p2/3n4/3B4/PPbK1PPP/R1B3NR b kq - 1 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1p1pp/8/2N2p2/3n4/3B4/PPbK1PPP/R1B3NR b kq - 1 9",
 	move: "Bxd3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1p1pp/8/2N2p2/3n4/3K4/PP3PPP/R1B3NR b kq - 0 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kbnr/ppp1p1pp/8/2N2p2/3n4/3K4/PP3PPP/R1B3NR b kq - 0 10",
 	move: "O-O-O"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1bnr/ppp1p1pp/8/2N2p2/2Kn4/8/PP3PPP/R1B3NR b - - 2 11",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1bnr/ppp1p1pp/8/2N2p2/2Kn4/8/PP3PPP/R1B3NR b - - 2 11",
 	move: "Nf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp1p1pp/5n2/2N2p2/2Kn4/5P2/PP4PP/R1B3NR b - - 0 12",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp1p1pp/5n2/2N2p2/2Kn4/5P2/PP4PP/R1B3NR b - - 0 12",
 	move: "e5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp3pp/5n2/2N1pp2/2Kn4/4BP2/PP4PP/R5NR b - - 1 13",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp3pp/5n2/2N1pp2/2Kn4/4BP2/PP4PP/R5NR b - - 1 13",
 	move: "Nc2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp3pp/4Nn2/4pp2/2K5/4BP2/PPn3PP/R5NR b - - 3 14",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp3pp/4Nn2/4pp2/2K5/4BP2/PPn3PP/R5NR b - - 3 14",
 	move: "Nxe3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp3pp/4Nn2/4pp2/8/1K2nP2/PP4PP/R5NR b - - 1 15",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/ppp3pp/4Nn2/4pp2/8/1K2nP2/PP4PP/R5NR b - - 1 15",
 	move: "Rd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2N1r/ppp3pp/3r1n2/4pp2/8/1K2nP2/PP4PP/R5NR b - - 0 16",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2N1r/ppp3pp/3r1n2/4pp2/8/1K2nP2/PP4PP/R5NR b - - 0 16",
 	move: "Rxf8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/3r1n2/4pp2/8/1K2nP2/PP4PP/2R3NR b - - 1 17",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/3r1n2/4pp2/8/1K2nP2/PP4PP/2R3NR b - - 1 17",
 	move: "Nxg2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/3r1n2/4pp2/8/1K3P2/PP2N1nP/2R4R b - - 1 18",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/3r1n2/4pp2/8/1K3P2/PP2N1nP/2R4R b - - 1 18",
 	move: "Ne3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/3r1n2/4pp2/8/1KN1nP2/PP5P/2R4R b - - 3 19",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/3r1n2/4pp2/8/1KN1nP2/PP5P/2R4R b - - 3 19",
 	move: "Rb6+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/1r3n2/4pp2/K7/2N1nP2/PP5P/2R4R b - - 5 20",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/1r3n2/4pp2/K7/2N1nP2/PP5P/2R4R b - - 5 20",
 	move: "Rxb2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/5n2/1N2pp2/K7/4nP2/Pr5P/2R4R b - - 1 21",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/5n2/1N2pp2/K7/4nP2/Pr5P/2R4R b - - 1 21",
 	move: "Rxa2+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/5n2/4pp2/K7/N3nP2/r6P/2R4R b - - 1 22",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/5n2/4pp2/K7/N3nP2/r6P/2R4R b - - 1 22",
 	move: "Rd2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/5n2/4pp2/K7/N1R1nP2/3r3P/7R b - - 3 23",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/5n2/4pp2/K7/N1R1nP2/3r3P/7R b - - 3 23",
 	move: "Nfd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/8/2Rnpp2/K7/N3nP2/3r3P/7R b - - 5 24",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k2r2/ppp3pp/8/2Rnpp2/K7/N3nP2/3r3P/7R b - - 5 24",
 	move: "Kb8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/ppp3pp/8/2Rnpp2/K7/N3nP2/3r3P/1R6 b - - 7 25",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/ppp3pp/8/2Rnpp2/K7/N3nP2/3r3P/1R6 b - - 7 25",
 	move: "Rxh2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/ppp3pp/8/1R1npp2/K7/N3nP2/7r/1R6 b - - 1 26",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/ppp3pp/8/1R1npp2/K7/N3nP2/7r/1R6 b - - 1 26",
 	move: "Nc3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/ppp3pp/8/KR2pp2/8/N1n1nP2/7r/1R6 b - - 3 27",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/ppp3pp/8/KR2pp2/8/N1n1nP2/7r/1R6 b - - 3 27",
 	move: "b6+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/p1p3pp/Kp6/1R2pp2/8/N1n1nP2/7r/1R6 b - - 1 28",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/p1p3pp/Kp6/1R2pp2/8/N1n1nP2/7r/1R6 b - - 1 28",
 	move: "Ra2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/p1p3pp/KR6/4pp2/8/N1n1nP2/r7/1R6 b - - 0 29",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/p1p3pp/KR6/4pp2/8/N1n1nP2/r7/1R6 b - - 0 29",
 	move: "cxb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/p5pp/KR6/4pp2/8/N1n1nP2/r7/8 b - - 0 30",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/p5pp/KR6/4pp2/8/N1n1nP2/r7/8 b - - 0 30",
 	move: "axb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/6pp/1K6/4pp2/8/N1n1nP2/r7/8 b - - 0 31",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/6pp/1K6/4pp2/8/N1n1nP2/r7/8 b - - 0 31",
 	move: "Rxa3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/6pp/1K6/4pp2/5P2/r1n1n3/8/8 b - - 0 32",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k3r2/6pp/1K6/4pp2/5P2/r1n1n3/8/8 b - - 0 32",
 	move: "Rc8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1kr5/6pp/1K6/4Pp2/8/r1n1n3/8/8 b - - 0 33",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1kr5/6pp/1K6/4Pp2/8/r1n1n3/8/8 b - - 0 33",
 	move: "Ned5#"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 1 2",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P4/2N1P3/PPP2PPP/R1BQKBNR b KQkq - 0 3",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P4/2N1P3/PPP2PPP/R1BQKBNR b KQkq - 0 3",
 	move: "a6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp1pppp/p1n5/3p4/3P4/2NBP3/PPP2PPP/R1BQK1NR b KQkq - 1 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp1pppp/p1n5/3p4/3P4/2NBP3/PPP2PPP/R1BQK1NR b KQkq - 1 4",
 	move: "Nb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp1pppp/p7/3p4/1n1P4/2N1P3/PPP1BPPP/R1BQK1NR b KQkq - 3 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp1pppp/p7/3p4/1n1P4/2N1P3/PPP1BPPP/R1BQK1NR b KQkq - 3 5",
 	move: "f5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp1p1pp/p7/3p1p2/1n1P4/2N1PN2/PPP1BPPP/R1BQK2R b KQkq - 1 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkbnr/1pp1p1pp/p7/3p1p2/1n1P4/2N1PN2/PPP1BPPP/R1BQK2R b KQkq - 1 6",
 	move: "Nf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/1pp1p1pp/p4n2/3pNp2/1n1P4/2N1P3/PPP1BPPP/R1BQK2R b KQkq - 3 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/1pp1p1pp/p4n2/3pNp2/1n1P4/2N1P3/PPP1BPPP/R1BQK2R b KQkq - 3 7",
 	move: "Nc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/1pp1p1pp/p1N2n2/3p1p2/3P4/2N1P3/PPP1BPPP/R1BQK2R b KQkq - 0 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/1pp1p1pp/p1N2n2/3p1p2/3P4/2N1P3/PPP1BPPP/R1BQK2R b KQkq - 0 8",
 	move: "bxc6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/2p1p1pp/p1p2n2/3p1p2/3P4/2N1P3/PPP1BPPP/R1BQ1RK1 b kq - 1 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/2p1p1pp/p1p2n2/3p1p2/3P4/2N1P3/PPP1BPPP/R1BQ1RK1 b kq - 1 9",
 	move: "Bb7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r2qkb1r/1bp1p1pp/p1p2n2/3p1p2/3P4/2N1PP2/PPP1B1PP/R1BQ1RK1 b kq - 0 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r2qkb1r/1bp1p1pp/p1p2n2/3p1p2/3P4/2N1PP2/PPP1B1PP/R1BQ1RK1 b kq - 0 10",
 	move: "Qd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kb1r/1bp1p1pp/p1pq1n2/3p1p2/3P4/2NQPP2/PPP1B1PP/R1B2RK1 b kq - 2 11",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kb1r/1bp1p1pp/p1pq1n2/3p1p2/3P4/2NQPP2/PPP1B1PP/R1B2RK1 b kq - 2 11",
 	move: "g6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r3kb1r/1bp1p2p/p1pq1np1/3p1p2/3P4/1PNQPP2/P1P1B1PP/R1B2RK1 b kq - 0 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3kb1r/1bp1p2p/p1pq1np1/3p1p2/3P4/1PNQPP2/P1P1B1PP/R1B2RK1 b kq - 0 12",
 	move: "O-O-O"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/1bp1p2p/p1pq1np1/3p1p2/P2P4/1PNQPP2/2P1B1PP/R1B2RK1 b - a3 0 13",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/1bp1p2p/p1pq1np1/3p1p2/P2P4/1PNQPP2/2P1B1PP/R1B2RK1 b - a3 0 13",
 	move: "c5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/1bp1p2p/p2q1np1/2Pp1p2/P7/1PNQPP2/2P1B1PP/R1B2RK1 b - - 0 14",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/1bp1p2p/p2q1np1/2Pp1p2/P7/1PNQPP2/2P1B1PP/R1B2RK1 b - - 0 14",
 	move: "Qxc5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/1bp1p2p/p4np1/2qp1p2/P7/1PNQPP2/2P1B1PP/1RB2RK1 b - - 1 15",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr1b1r/1bp1p2p/p4np1/2qp1p2/P7/1PNQPP2/2P1B1PP/1RB2RK1 b - - 1 15",
 	move: "Kb8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp1p2p/p4np1/2qp1p2/PP6/2NQPP2/2P1B1PP/1RB2RK1 b - - 0 16",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp1p2p/p4np1/2qp1p2/PP6/2NQPP2/2P1B1PP/1RB2RK1 b - - 0 16",
 	move: "Qd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp1p2p/p2q1np1/1P1p1p2/P7/2NQPP2/2P1B1PP/1RB2RK1 b - - 0 17",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp1p2p/p2q1np1/1P1p1p2/P7/2NQPP2/2P1B1PP/1RB2RK1 b - - 0 17",
 	move: "a5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp1p2p/3q1np1/pP1p1p2/P7/2NQPP2/2P1B1PP/1RBR2K1 b - - 1 18",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp1p2p/3q1np1/pP1p1p2/P7/2NQPP2/2P1B1PP/1RBR2K1 b - - 1 18",
 	move: "e5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp4p/3q1np1/pP1ppp2/P7/2NQPP2/2P3PP/1RBR1BK1 b - - 1 19",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r1b1r/1bp4p/3q1np1/pP1ppp2/P7/2NQPP2/2P3PP/1RBR1BK1 b - - 1 19",
 	move: "Be7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r3r/1bp1b2p/3q1np1/pP1ppp2/P7/1RNQPP2/2P3PP/2BR1BK1 b - - 3 20",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r3r/1bp1b2p/3q1np1/pP1ppp2/P7/1RNQPP2/2P3PP/2BR1BK1 b - - 3 20",
 	move: "Rdg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k4rr/1bp1b2p/3q1np1/pP1ppp2/P7/1RNQPP1P/2P3P1/2BR1BK1 b - - 0 21",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k4rr/1bp1b2p/3q1np1/pP1ppp2/P7/1RNQPP1P/2P3P1/2BR1BK1 b - - 0 21",
 	move: "Rg7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1bp1b1rp/3q1np1/pP1ppp2/P4P2/1RNQP2P/2P3P1/2BR1BK1 b - - 0 22",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1bp1b1rp/3q1np1/pP1ppp2/P4P2/1RNQP2P/2P3P1/2BR1BK1 b - - 0 22",
 	move: "exf4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1bp1b1rp/3q1np1/pP1p1p2/P4P2/1RNQ3P/2P3P1/2BR1BK1 b - - 0 23",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1bp1b1rp/3q1np1/pP1p1p2/P4P2/1RNQ3P/2P3P1/2BR1BK1 b - - 0 23",
 	move: "c5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q1np1/pPpp1p2/P4P2/1RN4P/2P1Q1P1/2BR1BK1 b - - 1 24",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q1np1/pPpp1p2/P4P2/1RN4P/2P1Q1P1/2BR1BK1 b - - 1 24",
 	move: "c4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q1np1/pP1p1p2/P1p2P2/2N4P/2P1Q1P1/1RBR1BK1 b - - 1 25",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q1np1/pP1p1p2/P1p2P2/2N4P/2P1Q1P1/1RBR1BK1 b - - 1 25",
 	move: "Ne4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q2p1/pP1p1p2/P1p1NP2/7P/2P1Q1P1/1RBR1BK1 b - - 0 26",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q2p1/pP1p1p2/P1p1NP2/7P/2P1Q1P1/1RBR1BK1 b - - 0 26",
 	move: "fxe4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q2p1/pP1p4/P1p1pP2/2P4P/4Q1P1/1RBR1BK1 b - - 0 27",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/3q2p1/pP1p4/P1p1pP2/2P4P/4Q1P1/1RBR1BK1 b - - 0 27",
 	move: "Qf6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/5qp1/pP1p4/P1p1pP2/2P4P/1R2Q1P1/2BR1BK1 b - - 2 28",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b2b1rp/5qp1/pP1p4/P1p1pP2/2P4P/1R2Q1P1/2BR1BK1 b - - 2 28",
 	move: "Ba3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b4rp/5qp1/pP1p4/P1p1pP2/b1P4P/3RQ1P1/2BR1BK1 b - - 4 29",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b4rp/5qp1/pP1p4/P1p1pP2/b1P4P/3RQ1P1/2BR1BK1 b - - 4 29",
 	move: "Bc5+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b4rp/5qp1/pPbp4/P1p1pP2/2P4P/3RQ1P1/2BR1B1K b - - 6 30",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b4rp/5qp1/pPbp4/P1p1pP2/2P4P/3RQ1P1/2BR1B1K b - - 6 30",
 	move: "e3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b4rp/5qp1/pPbR4/P1p2P2/2P1p2P/4Q1P1/2BR1B1K b - - 0 31",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/1b4rp/5qp1/pPbR4/P1p2P2/2P1p2P/4Q1P1/2BR1B1K b - - 0 31",
 	move: "Bxd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/6rp/5qp1/pPbR4/P1p2P2/2P1p2P/4Q1P1/2B2B1K b - - 0 32",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/6rp/5qp1/pPbR4/P1p2P2/2P1p2P/4Q1P1/2B2B1K b - - 0 32",
 	move: "Bb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/6rp/1b3qp1/pP1R4/P1Q2P2/2P1p2P/6P1/2B2B1K b - - 0 33",
 	move: "Kb7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k5r/6rp/1b3qp1/pP1R4/P1Q2P2/2P1p2P/6P1/2B2B1K b - - 0 33",
 	move: "Rc8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1kr5/6rp/1b3qp1/pP1R4/P4P2/2PQp2P/6P1/2B2B1K b - - 2 34",
 	move: "Kc7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1kr5/6rp/1b3qp1/pP1R4/P4P2/2PQp2P/6P1/2B2B1K b - - 2 34",
 	move: "Rxc3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/6rp/1b1R1qp1/pP6/P4P2/2rQp2P/6P1/2B2B1K b - - 1 35",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/6rp/1b1R1qp1/pP6/P4P2/2rQp2P/6P1/2B2B1K b - - 1 35",
 	move: "Rxd3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/6rp/1b3Rp1/pP6/P4P2/3rp2P/6P1/2B2B1K b - - 0 36",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/6rp/1b3Rp1/pP6/P4P2/3rp2P/6P1/2B2B1K b - - 0 36",
 	move: "Bd8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/6rp/4R1p1/pP6/P4P2/3rp2P/6P1/2B2B1K b - - 2 37",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/6rp/4R1p1/pP6/P4P2/3rp2P/6P1/2B2B1K b - - 2 37",
 	move: "Rd1"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/6rp/4R1p1/pP6/P4P2/4B2P/6P1/3r1B1K b - - 0 38",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/6rp/4R1p1/pP6/P4P2/4B2P/6P1/3r1B1K b - - 0 38",
 	move: "Rxf1+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/6rp/4R1p1/pP6/P4P2/4B2P/6PK/5r2 b - - 1 39",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/6rp/4R1p1/pP6/P4P2/4B2P/6PK/5r2 b - - 1 39",
 	move: "Re7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/4R2p/6p1/pP6/P4P2/4B2P/6PK/5r2 b - - 0 40",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1b4/4R2p/6p1/pP6/P4P2/4B2P/6PK/5r2 b - - 0 40",
 	move: "Bxe7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/P4P2/4B2P/6PK/5r2 b - - 0 41",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/P4P2/4B2P/6PK/5r2 b - - 0 41",
 	move: "Ra1"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/P4P1P/4B3/6PK/r7 b - - 0 42",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/P4P1P/4B3/6PK/r7 b - - 0 42",
 	move: "Rxa4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/r4P1P/4B1P1/7K/8 b - - 0 43",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/r4P1P/4B1P1/7K/8 b - - 0 43",
 	move: "Ra2+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/5P1P/4B1PK/r7/8 b - - 2 44",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/5P1P/4B1PK/r7/8 b - - 2 44",
 	move: "Re2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/3B1P1P/6PK/4r3/8 b - - 4 45",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k6/4b2p/1P4p1/p7/3B1P1P/6PK/4r3/8 b - - 4 45",
 	move: "Kb7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b2p/1P4p1/p7/3B1PKP/6P1/4r3/8 b - - 6 46",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b2p/1P4p1/p7/3B1PKP/6P1/4r3/8 b - - 6 46",
 	move: "Rh2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b2p/1P4p1/p7/5PKP/4B1P1/7r/8 b - - 8 47",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b2p/1P4p1/p7/5PKP/4B1P1/7r/8 b - - 8 47",
 	move: "h5+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b3/1P4p1/p6p/5P1P/4BKP1/7r/8 b - - 1 48",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b3/1P4p1/p6p/5P1P/4BKP1/7r/8 b - - 1 48",
 	move: "Bd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P1b2p1/p6p/4KP1P/4B1P1/7r/8 b - - 3 49",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P1b2p1/p6p/4KP1P/4B1P1/7r/8 b - - 3 49",
 	move: "Ra2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P1b2p1/p2K3p/5P1P/4B1P1/r7/8 b - - 5 50",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P1b2p1/p2K3p/5P1P/4B1P1/r7/8 b - - 5 50",
 	move: "Re2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P1b2p1/p2K3p/3B1P1P/6P1/4r3/8 b - - 7 51",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P1b2p1/p2K3p/3B1P1P/6P1/4r3/8 b - - 7 51",
 	move: "Be7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b3/1P4p1/p1BK3p/5P1P/6P1/4r3/8 b - - 9 52",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k2b3/1P4p1/p1BK3p/5P1P/6P1/4r3/8 b - - 9 52",
 	move: "Bxc5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P4p1/p1K4p/5P1P/6P1/4r3/8 b - - 0 53",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P4p1/p1K4p/5P1P/6P1/4r3/8 b - - 0 53",
 	move: "Rb2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P4p1/p1K4p/5PPP/8/1r6/8 b - - 0 54",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P4p1/p1K4p/5PPP/8/1r6/8 b - - 0 54",
 	move: "hxg4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P4p1/p1K2P2/6pP/8/1r6/8 b - - 0 55",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P4p1/p1K2P2/6pP/8/1r6/8 b - - 0 55",
 	move: "gxf5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P6/p1K2p1P/6p1/8/1r6/8 b - - 0 56",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1P6/p1K2p1P/6p1/8/1r6/8 b - - 0 56",
 	move: "Rxb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1r5P/p1K2p2/6p1/8/8/8 b - - 0 57",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/1r5P/p1K2p2/6p1/8/8/8 b - - 0 57",
 	move: "Rxh6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/7r/p2K1p2/6p1/8/8/8 b - - 1 58",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/7r/p2K1p2/6p1/8/8/8 b - - 1 58",
 	move: "Rg6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/6r1/p3Kp2/6p1/8/8/8 b - - 3 59",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/6r1/p3Kp2/6p1/8/8/8 b - - 3 59",
 	move: "Rg5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4pr1/5Kp1/8/8/8 b - - 5 60",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4pr1/5Kp1/8/8/8 b - - 5 60",
 	move: "Rh5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p3Kp1r/6p1/8/8/8 b - - 7 61",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p3Kp1r/6p1/8/8/8 b - - 7 61",
 	move: "g3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4p1r/5K2/6p1/8/8 b - - 1 62",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4p1r/5K2/6p1/8/8 b - - 1 62",
 	move: "g2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4p1r/8/5K2/6p1/8 b - - 1 63",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4p1r/8/5K2/6p1/8 b - - 1 63",
 	move: "g1=Q"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4p1r/5K2/8/8/6q1 b - - 1 64",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p4p1r/5K2/8/8/6q1 b - - 1 64",
 	move: "Qg5+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p3Kpqr/8/8/8/8 b - - 3 65",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k6/8/p3Kpqr/8/8/8/8 b - - 3 65",
 	move: "Rh7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p4pq1/8/8/8/8 b - - 5 66",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p4pq1/8/8/8/8 b - - 5 66",
 	move: "f4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/5p2/8/8/8 b - - 1 67",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/5p2/8/8/8 b - - 1 67",
 	move: "f3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p5q1/8/5p2/8/8 b - - 1 68",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p5q1/8/5p2/8/8 b - - 1 68",
 	move: "f2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/8/8/5p2/8 b - - 1 69",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/8/8/5p2/8 b - - 1 69",
 	move: "f1=N"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p5q1/8/8/8/5n2 b - - 1 70",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p5q1/8/8/8/5n2 b - - 1 70",
 	move: "Nh2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/8/8/7n/8 b - - 3 71",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/8/8/7n/8 b - - 3 71",
 	move: "Nf1"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p5q1/8/8/8/5n2 b - - 5 72",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/4K3/p5q1/8/8/8/5n2 b - - 5 72",
 	move: "Nh2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/8/8/7n/8 b - - 7 73",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/1k5r/3K4/p5q1/8/8/7n/8 b - - 7 73",
 	move: "Nf1"
	}),
	output: {
 	1: 1
	}
},
];
