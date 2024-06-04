import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {

    const [selection , setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Tom', value: 'white cat'},
        {label: 'Jerry', value: 'mouse'},
        {label: 'Bugs Bunny', value: 'rabbit'},
        {label: 'Tweety', value: 'bird'},
        {label: 'Silvester', value: 'black cat'},
    ];

    return <Dropdown options={options} value={selection} onChange={handleSelect} />;
}

export default DropdownPage;


// && will give falsy value first or last truthy value
//means: A && B : if A is true then last truthy B will print and if A is false then falsy value A will print
// || will give first tuthy value
// means: A || B : if A is true then A will print and if A is false then B will print 