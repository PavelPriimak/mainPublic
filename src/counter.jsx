import { useDispatch, useSelector } from "react-redux";



function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handlePlus = () => dispatch({type: 'PLUS'});
    const handkeMinus = () => dispatch({type: 'MINUS'});
    return (
        <div>
            <div>{count}</div>
            <button onClick={handlePlus}>Plus</button>
            <button onClick={handkeMinus}>Minus</button>
        </div>
    )
}

export default Counter;