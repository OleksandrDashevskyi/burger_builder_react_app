import React from 'react';
import './Input.css'

const Input = (props) => {
    let inputElement = null;
    let inputClasses = ['InputElement'];
    let validationError = null;

    if(props.invalid && props.touched) {
        validationError = <p className="Invalid">Please enter a valid {props.valueType}</p>

    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
              onChange={props.changed}
            />;
            break;
            case ('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                value={props.value}>
                 onChange={props.changed}
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}/>;
    }
    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
};

export default Input;
