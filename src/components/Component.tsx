import {useState} from "react";
import classes from './Component.module.scss';
export default function Component ():any {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span className={classes.span}>{count}</span>
            <button className={classes.btn} onClick={()=>setCount(count+1)}>INCREMENT</button>
        </div>
    )
}