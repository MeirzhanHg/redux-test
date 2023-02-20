import {inc, dec, rnd} from '../actions';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

/* const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
} */

/* const mapDispatchToProps = (dispatch) => {
} */

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;