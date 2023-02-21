function AIobjSort(obj){
    var Sort = {};
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
    return Sort;
}
function DataSort(obj){
    return {
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
    };
}
var MartyL5_V1_AI_data = [
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "h5"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Nb8"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Nd8"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Nce7"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Nxe5"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Nd4"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Nb4"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "Na5"
        }),
        output: {
         0: 1
        }
    },
    {
        input: DataSort({
         fen: "r1b1kbnr/ppq4p/2nQ4/4Pp2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 1 8",
         move: "f3"
        }),
        output: {
         0: 1
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
         move: "g5"
     }),
     output: {
       1: 1
     }
    },
    {
     input: DataSort({
         fen: "r1bqkbnr/ppp4p/2n1P3/1N1p1pp1/5B2/8/PPP1PPPP/R2QKBNR b KQkq - 0 6",
         move: "gxf4"
     }),
     output: {
       1: 1
     }
    },
    {
     input: DataSort({
         fen: "r1bqkbnr/ppp1P2p/2n5/1N1p1p2/5p2/8/PPP1PPPP/R2QKBNR b KQkq - 0 7",
         move: "Bxe7"
     }),
     output: {
       1: 1
     }
    },
    {
     input: DataSort({
         fen: "r1bqk1nr/ppp1b2p/2n5/1N1Q1p2/5p2/8/PPP1PPPP/R3KBNR b KQkq - 0 8",
         move: "Bb4+"
     }),
     output: {
       1: 1
     }
    },
    {
     input: DataSort({
         fen: "r1bqk1nr/ppp4p/2n5/1N1Q1p2/1b3p2/2P5/PP2PPPP/R3KBNR b KQkq - 0 9",
         move: "Qxd5"
     }),
     output: {
       1: 1
     }
    },
    {
     input: DataSort({
         fen: "r1b1k1nr/ppN4p/2n5/3q1p2/1b3p2/2P5/PP2PPPP/R3KBNR b KQkq - 0 10",
         move: "Kd8"
     }),
     output: {
       1: 1
     }
    },
    {
     input: DataSort({
         fen: "r1bk2nr/pp5p/2n5/3N1p2/1b3p2/2P5/PP2PPPP/R3KBNR b KQ - 0 11",
         move: "Bd6"
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
 	fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
 	move: "Ne7"
	}),
	output: {
 	0: 1
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
 	fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2NP1N2/PPP2PPP/R1BQKB1R b KQkq - 0 4",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2NP1N2/PPP2PPP/R1BQKB1R b KQkq - 0 4",
 	move: "Bb4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2NP1N2/PPP2PPP/R1BQKB1R b KQkq - 0 4",
 	move: "Ba3"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1ppp/2n2n2/4p1B1/1b2P3/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 2 5",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1ppp/2n2n2/4p1B1/1b2P3/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 2 5",
 	move: "d5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/pppp1ppp/2n2n2/4p1B1/1b2P3/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 2 5",
 	move: "g6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/ppp2ppp/2n2n2/3Pp1B1/1b6/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 0 6",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/ppp2ppp/2n2n2/3Pp1B1/1b6/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 0 6",
 	move: "Qxd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1bqk2r/ppp2ppp/2n2n2/3Pp1B1/1b6/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 0 6",
 	move: "Kf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2n2n2/3qp3/1b6/2NP1N2/PPPB1PPP/R2QKB1R b KQkq - 1 7",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2n2n2/3qp3/1b6/2NP1N2/PPPB1PPP/R2QKB1R b KQkq - 1 7",
 	move: "Qd6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2n2n2/3qp3/1b6/2NP1N2/PPPB1PPP/R2QKB1R b KQkq - 1 7",
 	move: "Qd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2nq1n2/4p3/1b6/P1NP1N2/1PPB1PPP/R2QKB1R b KQkq - 0 8",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2nq1n2/4p3/1b6/P1NP1N2/1PPB1PPP/R2QKB1R b KQkq - 0 8",
 	move: "Bxc3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2nq1n2/4p3/1b6/P1NP1N2/1PPB1PPP/R2QKB1R b KQkq - 0 8",
 	move: "Bxa3"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2nq1n2/4p3/8/P1BP1N2/1PP2PPP/R2QKB1R b KQkq - 0 9",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2nq1n2/4p3/8/P1BP1N2/1PP2PPP/R2QKB1R b KQkq - 0 9",
 	move: "Bf5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "r1b1k2r/ppp2ppp/2nq1n2/4p3/8/P1BP1N2/1PP2PPP/R2QKB1R b KQkq - 0 9",
 	move: "Bg4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k2r/ppp2ppp/2nq1n2/4pb2/8/P1BP1N2/1PP1QPPP/R3KB1R b KQkq - 2 10",
 	move: "Rb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "r3k2r/ppp2ppp/2nq1n2/4pb2/8/P1BP1N2/1PP1QPPP/R3KB1R b KQkq - 2 10",
 	move: "O-O-O"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/ppp2ppp/2nq1n2/4Nb2/8/P1BP4/1PP1QPPP/R3KB1R b KQ - 0 11",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/ppp2ppp/2nq1n2/4Nb2/8/P1BP4/1PP1QPPP/R3KB1R b KQ - 0 11",
 	move: "Rde8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/ppp2ppp/2nq1n2/4Nb2/8/P1BP4/1PP1QPPP/R3KB1R b KQ - 0 11",
 	move: "Rdf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k1r2r/ppp2ppp/2nq1n2/4Nb2/8/P1BP4/1PP1QPPP/2KR1B1R b - - 2 12",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k1r2r/ppp2ppp/2nq1n2/4Nb2/8/P1BP4/1PP1QPPP/2KR1B1R b - - 2 12",
 	move: "Qd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k1r2r/ppp2ppp/2nq1n2/4Nb2/8/P1BP4/1PP1QPPP/2KR1B1R b - - 2 12",
 	move: "Qd4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k1r2r/ppp2ppp/2n2n2/3qNb2/3P4/P1B5/1PP1QPPP/2KR1B1R b - - 0 13",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k1r2r/ppp2ppp/2n2n2/3qNb2/3P4/P1B5/1PP1QPPP/2KR1B1R b - - 0 13",
 	move: "Reg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k1r2r/ppp2ppp/2n2n2/3qNb2/3P4/P1B5/1PP1QPPP/2KR1B1R b - - 0 13",
 	move: "Re7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2Npp/2n2n2/3q1b2/3P4/P1B5/1PP1QPPP/2KR1B1R b - - 0 14",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2Npp/2n2n2/3q1b2/3P4/P1B5/1PP1QPPP/2KR1B1R b - - 0 14",
 	move: "Qxf7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2Npp/2n2n2/3q1b2/3P4/P1B5/1PP1QPPP/2KR1B1R b - - 0 14",
 	move: "Qe5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2qpp/2n2n2/3P1b2/8/P1B5/1PP1QPPP/2KR1B1R b - - 0 15",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2qpp/2n2n2/3P1b2/8/P1B5/1PP1QPPP/2KR1B1R b - - 0 15",
 	move: "Nxd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2qpp/2n2n2/3P1b2/8/P1B5/1PP1QPPP/2KR1B1R b - - 0 15",
 	move: "Be6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2qpp/2n5/3R1b2/8/P1B5/1PP1QPPP/2K2B1R b - - 0 16",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2qpp/2n5/3R1b2/8/P1B5/1PP1QPPP/2K2B1R b - - 0 16",
 	move: "Qxd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp2qpp/2n5/3R1b2/8/P1B5/1PP1QPPP/2K2B1R b - - 0 16",
 	move: "Qe7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n5/3q1b2/6P1/P1B5/1PP1QP1P/2K2B1R b - g3 0 17",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n5/3q1b2/6P1/P1B5/1PP1QP1P/2K2B1R b - g3 0 17",
 	move: "Qxh1"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n5/3q1b2/6P1/P1B5/1PP1QP1P/2K2B1R b - g3 0 17",
 	move: "Qd4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n5/5P2/8/P1B5/1PP1QP1P/2K2B1q b - - 0 18",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n5/5P2/8/P1B5/1PP1QP1P/2K2B1q b - - 0 18",
 	move: "Qd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n5/5P2/8/P1B5/1PP1QP1P/2K2B1q b - - 0 18",
 	move: "Qxh2"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n2P2/3q4/8/P1B5/1PP1QP1P/2K2B2 b - - 0 19",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n2P2/3q4/8/P1B5/1PP1QP1P/2K2B2 b - - 0 19",
 	move: "Qg5+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n2P2/3q4/8/P1B5/1PP1QP1P/2K2B2 b - - 0 19",
 	move: "Qh5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n2P2/6q1/8/P1B5/1PP1QP1P/1K3B2 b - - 2 20",
 	move: "Kd8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n2P2/6q1/8/P1B5/1PP1QP1P/1K3B2 b - - 2 20",
 	move: "Rd8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2k3rr/ppp3pp/2n2P2/6q1/8/P1B5/1PP1QP1P/1K3B2 b - - 2 20",
 	move: "a6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/ppp3Pp/2n5/6q1/8/P1B5/1PP1QP1P/1K3B2 b - - 0 21",
 	move: "Kd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/ppp3Pp/2n5/6q1/8/P1B5/1PP1QP1P/1K3B2 b - - 0 21",
 	move: "Rhg8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2kr3r/ppp3Pp/2n5/6q1/8/P1B5/1PP1QP1P/1K3B2 b - - 0 21",
 	move: "Rhf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2kr2r1/ppp3Pp/2n1Q3/6q1/8/P1B5/1PP2P1P/1K3B2 b - - 2 22",
 	move: "Rd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3Pp/2n1Q3/6q1/8/P1BB4/1PP2P1P/1K6 b - - 4 23",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3Pp/2n1Q3/6q1/8/P1BB4/1PP2P1P/1K6 b - - 4 23",
 	move: "Qd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3Pp/2n1Q3/6q1/8/P1BB4/1PP2P1P/1K6 b - - 4 23",
 	move: "Qc5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3Pp/2n5/3Q4/8/P1BB4/1PP2P1P/1K6 b - - 0 24",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3Pp/2n5/3Q4/8/P1BB4/1PP2P1P/1K6 b - - 0 24",
 	move: "Rxd5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3Pp/2n5/3Q4/8/P1BB4/1PP2P1P/1K6 b - - 0 24",
 	move: "Rc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k4r1/ppp3PB/2n5/3r4/8/P1B5/1PP2P1P/1K6 b - - 0 25",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k4r1/ppp3PB/2n5/3r4/8/P1B5/1PP2P1P/1K6 b - - 0 25",
 	move: "Rd1+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k4r1/ppp3PB/2n5/3r4/8/P1B5/1PP2P1P/1K6 b - - 0 25",
 	move: "Rc5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k4r1/ppp3PB/2n5/8/8/P1B5/KPP2P1P/3r4 b - - 2 26",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k4r1/ppp3PB/2n5/8/8/P1B5/KPP2P1P/3r4 b - - 2 26",
 	move: "Rdd8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k4r1/ppp3PB/2n5/8/8/P1B5/KPP2P1P/3r4 b - - 2 26",
 	move: "Re1"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3PB/2n5/8/5P2/P1B5/KPP4P/8 b - f3 0 27",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3PB/2n5/8/5P2/P1B5/KPP4P/8 b - f3 0 27",
 	move: "b6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/ppp3PB/2n5/8/5P2/P1B5/KPP4P/8 b - f3 0 27",
 	move: "b5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p3PB/1pn5/5P2/8/P1B5/KPP4P/8 b - - 0 28",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p3PB/1pn5/5P2/8/P1B5/KPP4P/8 b - - 0 28",
 	move: "a5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/p1p3PB/1pn5/5P2/8/P1B5/KPP4P/8 b - - 0 28",
 	move: "b5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/2p3PB/1pn2P2/p7/8/P1B5/KPP4P/8 b - - 0 29",
 	move: "Kc8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/2p3PB/1pn2P2/p7/8/P1B5/KPP4P/8 b - - 0 29",
 	move: "Ka7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "1k1r2r1/2p3PB/1pn2P2/p7/8/P1B5/KPP4P/8 b - - 0 29",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "3r2r1/k1p2PPB/1pn5/p7/8/P1B5/KPP4P/8 b - - 0 30",
 	move: "Rde8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "3r2r1/k1p2PPB/1pn5/p7/8/P1B5/KPP4P/8 b - - 0 30",
 	move: "Rxg7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "3r2r1/k1p2PPB/1pn5/p7/8/P1B5/KPP4P/8 b - - 0 30",
 	move: "Rgf8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "3r4/k1p2PBB/1pn5/p7/8/P7/KPP4P/8 b - - 0 31",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "3r4/k1p2PBB/1pn5/p7/8/P7/KPP4P/8 b - - 0 31",
 	move: "a4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "3r1Q2/k1p3BB/1pn5/8/p7/P7/KPP4P/8 b - - 0 32",
 	move: "Re8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "3r1Q2/k1p3BB/1pn5/8/p7/P7/KPP4P/8 b - - 0 32",
 	move: "Rxf8"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "3r1Q2/k1p3BB/1pn5/8/p7/P7/KPP4P/8 b - - 0 32",
 	move: "Rd7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1pn5/8/p7/P7/KPP4P/8 b - - 0 33",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1pn5/8/p7/P7/KPP4P/8 b - - 0 33",
 	move: "Na5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/n7/p7/P6P/KPP5/8 b - - 0 34",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/n7/p7/P6P/KPP5/8 b - - 0 34",
 	move: "Nc4"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/n7/p7/P6P/KPP5/8 b - - 0 34",
 	move: "Nb3"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/8/p1n4P/P7/KPP5/8 b - - 0 35",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/8/p1n4P/P7/KPP5/8 b - - 0 35",
 	move: "Nd2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/8/p1n4P/P7/KPP5/8 b - - 0 35",
 	move: "Nxb2"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/7P/p7/P7/KPPn4/8 b - - 0 36",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/7P/p7/P7/KPPn4/8 b - - 0 36",
 	move: "Nf3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p6/7P/p7/P7/KPPn4/8 b - - 0 36",
 	move: "Nf1"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p5P/8/p7/P4n2/KPP5/8 b - - 0 37",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p4B/1p5P/8/p7/P4n2/KPP5/8 b - - 0 37",
 	move: "Nd2"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/p7/P7/KPPn4/8 b - - 2 38",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/p7/P7/KPPn4/8 b - - 2 38",
 	move: "Nb3"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/p7/P7/KPPn4/8 b - - 2 38",
 	move: "Nc4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/p7/PP6/KP6/8 b - - 0 39",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/p7/PP6/KP6/8 b - - 0 39",
 	move: "axb3+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/8/PK6/1P6/8 b - - 0 40",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/8/PK6/1P6/8 b - - 0 40",
 	move: "c5"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k1p5/1p5P/5B2/8/PK6/1P6/8 b - - 0 40",
 	move: "b5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k6P/1p6/2p2B2/8/PK6/1P6/8 b - - 0 41",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k6P/1p6/2p2B2/8/PK6/1P6/8 b - - 0 41",
 	move: "c4+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k6P/1p6/5B2/2K5/P7/1P6/8 b - - 0 42",
 	move: "Ka8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k6P/1p6/5B2/2K5/P7/1P6/8 b - - 0 42",
 	move: "Ka6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/k6P/1p6/5B2/2K5/P7/1P6/8 b - - 0 42",
 	move: "b5+"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B1Q/8/kp6/5B2/2K5/P7/1P6/8 b - - 0 43",
 	move: "Ka7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B1Q/8/kp6/5B2/2K5/P7/1P6/8 b - - 0 43",
 	move: "b5+"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B1Q/8/k7/1p3B2/8/P1K5/1P6/8 b - - 1 44",
 	move: "Ka7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B1Q/8/k7/1p3B2/8/P1K5/1P6/8 b - - 1 44",
 	move: "Kb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B1Q/8/k7/1p3B2/8/P1K5/1P6/8 b - - 1 44",
 	move: "Ka5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/8/1k6/1p3B2/3Q4/P1K5/1P6/8 b - - 3 45",
 	move: "Kb7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/8/1k6/1p3B2/3Q4/P1K5/1P6/8 b - - 3 45",
 	move: "Kc7"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/8/1k6/1p3B2/3Q4/P1K5/1P6/8 b - - 3 45",
 	move: "Kc6"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/2kQ4/8/1p3B2/8/P1K5/1P6/8 b - - 5 46",
 	move: "Kb8"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/2kQ4/8/1p3B2/8/P1K5/1P6/8 b - - 5 46",
 	move: "Kb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/3Q4/1k6/1p3B2/3K4/P7/1P6/8 b - - 7 47",
 	move: "Ka5"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/3Q4/1k6/1p3B2/3K4/P7/1P6/8 b - - 7 47",
 	move: "Ka6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "5B2/3Q4/1k6/1p3B2/3K4/P7/1P6/8 b - - 7 47",
 	move: "b4"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2Q2B2/8/k7/1p3B2/3K4/P7/1P6/8 b - - 9 48",
 	move: "Ka7"
	}),
	output: {
 	0: 1
	}
},
{
	input: DataSort({
 	fen: "2Q2B2/8/k7/1p3B2/3K4/P7/1P6/8 b - - 9 48",
 	move: "Kb6"
	}),
	output: {
 	1: 1
	}
},
{
	input: DataSort({
 	fen: "2Q2B2/8/k7/1p3B2/3K4/P7/1P6/8 b - - 9 48",
 	move: "Ka5"
	}),
	output: {
 	0: 1
	}
},
];
