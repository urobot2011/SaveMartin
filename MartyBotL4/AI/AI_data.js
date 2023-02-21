function AIobjSort(obj){
    var Sort = {};
    for(var _obj in obj){
        Sort[_obj] = obj[_obj].replace(/b/g, '0')
            .replace(/w/g, '1')
            .replace(/P/g, '1')
            .replace(/N/g, '2')
            .replace(/B/g, '3')
            .replace(/R/g, '4')
            .replace(/Q/g, '5')
            .replace(/K/g, '6');
    }
    return Sort;
}
function DataSort(obj){
    return {
        obj: AIobjSort(Chessboard.fenToObj(obj["fen"])),
        move: obj["move"].replace(/a/g, '1')
            .replace(/b/g, '2')
            .replace(/c/g, '3')
            .replace(/d/g, '4')
            .replace(/e/g, '5')
            .replace(/f/g, '6')
            .replace(/g/g, '7')
            .replace(/h/g, '8');
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
];
