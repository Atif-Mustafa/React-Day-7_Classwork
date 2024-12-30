import { useRef , useEffect} from 'react';
import './Form.css'

const Form = (props) => {   
    return (
        <form action="" onSubmit={props.formSubmitted}>
            <input type="text" ref={props.inputBoxRef} required/>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default Form;