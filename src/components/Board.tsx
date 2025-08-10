import { calculateWinner } from "../utils/constants";
import { v4 } from "uuid";
import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";
import { move, restart } from "../redux/gameSlice";
import type { AppDispatch, RootState } from "../redux/store";
import { useCallback, useMemo } from "react";

const Board = () => {
    // const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
    // const [xIsNext, setXIsNext] = useState<boolean>(true);

    const{ score, squares, xIsNext } = useSelector((state: RootState) => state.game);
    const dispatch: AppDispatch = useDispatch();
    
    // Жизненный цикл компонента(обновление)
    // Меморизация значения (кэширует значение) - чтобы не пересчитывать тяжёлые функции
    const winner = useMemo(() => calculateWinner(squares), [squares]);
    const status = useMemo(() => winner ? winner : `Ход: ${xIsNext ? 'X' : 'O'}`, [winner, xIsNext])

    // useCallback(() => {}, [])

    // Меморизация функции (кэширует функцию) - чтобы не пересоздавать функции каждый render
    const handleClick = useCallback((i: number) => {
        if (!winner) dispatch(move(i));
    }, [winner, dispatch])

    // const restart = () => {
    //     setSquares(Array(9).fill(''));
    //     setXIsNext(true);
    // }

    return (
    <div>
        <div>Нолики {score[0]} : {score.x} Крестики</div>

        <div>{status}</div>

        <div className="mx-auto d-flex justify-content-around" style={{maxWidth: '400px'}}>
        {squares.map((e, i) => (
            <Square key={v4()} value={e} move={() => handleClick(i)} />
        ))}
        </div>

        <button onClick={() => dispatch(restart())}>Again ?</button>
    </div>
  )
}

export default Board;