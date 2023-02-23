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
 	fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
 	move: "Nd7"
	}),
	output: {
 	0: 1
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
 	fen: "r1bqkbnr/ppp1p1pp/2n5/3p1p2/3P1B2/2N2N2/PPP1PPPP/R2QKB1R b KQkq - 1 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/ppp1p1pp/2n2n2/3p1p2/3P1B2/2N2N1P/PPP1PPP1/R2QKB1R b KQkq - 0 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/ppp1p1pp/2n5/3p1p2/3PNB2/5N1P/PPP1PPP1/R2QKB1R b KQkq - 0 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/ppp1p1pp/2n5/5p2/3PpB2/7P/PPPNPPP1/R2QKB1R b KQkq - 1 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1kb1r/ppp1p1pp/2n5/5p2/3qpB2/2P4P/PP1NPPP1/R2QKB1R b KQkq - 0 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1kb1r/pppqp1pp/2n5/5p2/4pB2/2P1P2P/PP1N1PP1/R2QKB1R b KQkq - 0 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1kb1r/pppq2pp/2n5/4pp2/4p3/2P1P2P/PP1N1PPB/R2QKB1R b KQkq - 1 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1kb1r/ppp3pp/2n5/3qpp2/2P1p3/4P2P/PP1N1PPB/R2QKB1R b KQkq - 0 11",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1kb1r/ppp3pp/2n5/q3pp2/2P1p3/P3P2P/1P1N1PPB/R2QKB1R b KQkq - 0 12",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp3pp/2nb4/q3pp2/1PP1p3/P3P2P/3N1PPB/R2QKB1R b KQkq b3 0 13",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp3pp/2n5/q3pp2/1PP1p3/4P2P/3N1PPB/R2QKB1R b KQkq - 0 14",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp3pp/2n5/4pp2/1qP1p3/4P2P/3N1PPB/1R1QKB1R b Kkq - 1 15",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp3pp/2n5/qR2pp2/2P1p3/4P2P/3N1PPB/3QKB1R b Kkq - 3 16",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp3pp/2n5/1R2Bp2/2P1p3/q3P2P/3N1PP1/3QKB1R b Kkq - 0 17",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp3pp/8/4Rp2/2P1p3/q3P2P/3N1PP1/3QKB1R b Kkq - 0 18",
 	move: "Be6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b2k1r/ppp3pp/8/4Rp2/2P1p3/q3P2P/5PP1/1N1QKB1R b K - 2 19",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b2k1r/ppp3pp/8/4Rp2/1qP1p3/4P2P/3N1PP1/3QKB1R b K - 4 20",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b2k1r/ppp3pp/8/1R3p2/2P1p3/2q1P2P/3N1PP1/3QKB1R b K - 6 21",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b2kr1/ppp3pp/8/1R3p2/2P1p1P1/2q1P2P/3N1P2/3QKB1R b K g3 0 22",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b2kr1/ppp3pp/8/1R6/2P1p1P1/2q1P3/3N1P2/3QKB1R b K - 0 23",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b2kr1/1pp3pp/p7/3R4/2P1p1P1/2q1P3/3N1P2/3QKB1R b K - 1 24",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r4kr1/1pp3pp/p3b3/3R3R/2P1p1P1/2q1P3/3N1P2/3QKB2 b - - 3 25",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r4kr1/1pp3pp/p7/3R4/2P1p1P1/2q1P3/3N1P2/3QKB2 b - - 0 26",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r4kr1/2p3pp/p7/1p3R2/2P1p1P1/2q1P3/3N1P2/3QKB2 b - - 1 27",
 	move: "Ke7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/2p3pp/p7/1pP2R2/4p1P1/2q1P3/3N1P2/3QKB2 b - - 0 28",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/2p3pp/p7/2P2R2/1p2p1P1/2q1P3/3NBP2/3QK3 b - - 1 29",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/2p3pp/p7/2P2R2/4p1P1/1pq1P3/3NBP2/3Q1K2 b - - 1 30",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/2p3pp/p7/2P2R2/1q2p1P1/1N2P3/4BP2/3Q1K2 b - - 0 31",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/1qp3pp/p7/2P2R2/3Np1P1/4P3/4BP2/3Q1K2 b - - 2 32",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/1qp3p1/p1P4p/5R2/3Np1P1/4P3/4BP2/3Q1K2 b - - 0 33",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k1r1/2p3p1/p1P4p/4R3/1q1Np1P1/4P3/4BP2/3Q1K2 b - - 2 34",
 	move: "Kf7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r4kr1/2p3p1/p1P1N2p/4R3/1q2p1P1/4P3/4BP2/3Q1K2 b - - 4 35",
 	move: "Ke7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r5r1/2N2kp1/p1P4p/4R3/1q2p1P1/4P3/4BP2/3Q1K2 b - - 0 36",
 	move: "Rab8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r5r1/2N3p1/p1P2k1p/5R2/1q2p1P1/4P3/4BP2/3Q1K2 b - - 2 37",
 	move: "Ke7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r5r1/6p1/p1P3kp/3N1R2/1q2p1P1/4P3/4BP2/3Q1K2 b - - 4 38",
 	move: "Rab8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r5r1/6pk/p1P4p/5RP1/4pN2/q3P3/4BP2/3Q1K2 b - - 0 40",
 	move: "Rab8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r5r1/3Q3k/p1P3pp/5RP1/4pN2/q3P3/4BP2/5K2 b - - 1 41",
 	move: "Kh8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/6rk/p1P3pp/5RP1/4pN2/q3P3/4BP2/3Q1K2 b - - 3 42",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/6rk/p1P4P/5p2/4pN2/q3P3/4BP2/3Q1K2 b - - 0 43",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/6r1/p1P1N2k/5p2/4p3/q3P3/4BP2/3Q1K2 b - - 1 44",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p1P3rk/5p2/3Np3/q3P3/4BP2/3Q1K2 b - - 3 45",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p1P3rk/2q2p2/3Np3/4P3/2Q1BP2/5K2 b - - 5 46",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p1P3rk/5p2/4p3/4P3/2N1BP2/5K2 b - - 0 47",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p1r4k/5p2/3Np3/4P3/4BP2/5K2 b - - 1 48",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p6k/5p2/3Np3/4P3/4BPK1/2r5 b - - 3 49",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p5k1/5p2/3Np3/4PP2/4B1K1/2r5 b - - 0 50",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p5k1/5p2/3NpP2/4P3/4B1K1/r7 b - - 0 51",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r7/8/p5k1/5p2/3NpP2/r3P3/4BK2/8 b - - 2 52",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7r/8/p5k1/5p2/4pP2/r3P3/2N1BK2/8 b - - 4 53",
 	move: "Rh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7r/8/p5k1/5p2/r3pP2/4P3/4BK2/4N3 b - - 6 54",
 	move: "Rh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7r/8/p5k1/5p2/4pP2/4P3/r3BKN1/8 b - - 8 55",
 	move: "Rh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7r/6k1/p7/5p2/4pP2/4P3/r3BK2/4N3 b - - 10 56",
 	move: "Rh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "8/6k1/p7/5p2/4pP2/4P3/r3BKN1/7r b - - 12 57",
 	move: "Kf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7k/8/p7/5p2/4pP2/4P3/r3BK2/4N2r b - - 14 58",
 	move: "Kh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7k/8/8/p4p2/4pP2/4P1K1/r3B3/4N2r b - - 1 59",
 	move: "Kh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7k/8/8/p4p2/2B1pP2/4P1K1/r7/4r3 b - - 1 60",
 	move: "Kh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7k/8/8/p4p2/2B1pP1K/4r3/r7/8 b - - 1 61",
 	move: "Kh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7k/8/4B3/p4p2/4pP1K/4r3/6r1/8 b - - 3 62",
 	move: "Kh7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "7k/8/4B3/p4p1K/4pPr1/4r3/8/8 b - - 5 63",
 	move: "Kh7"
	}),
	output: {
 	0: 1
	}
}
];
