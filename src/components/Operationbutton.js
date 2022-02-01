import { actions } from "../App"

export default function Operationbutton({dispatch,operation}){
    return( 
    <button 
    onClick={() => dispatch({type:actions.choose_operation,payload:{operation}})}>
    {operation}
    </button>
    )
}