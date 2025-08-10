export function calculateWinner(squares:string[]): string | null {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // выигрышные комбинации по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // выигрышные комбинации по вертикали
        [0, 4, 8], [2, 4, 6] // выигрышные комбинации по диагонали
    ]

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return `Победитель ${squares[a]}`;
        }
    }

    if (!squares.filter((e) => e === '').length) return 'Ничья'
    
    return null;
};

export type ISquare = 'x' | '0' | ''