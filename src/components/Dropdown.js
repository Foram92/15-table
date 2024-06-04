import Panel from './Panel';
import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";

function Dropdown ({ options, value, onChange }) {

   const [isOpen, setIsOpen] = useState(false);//bcoz we doesn't want to show options 

   const handleClick = () => {
    //here whatever selected(open or close) that is saved in isOpen so !isOpen does it's oposite and set in setIsOpen
        setIsOpen(!isOpen);
   };

   const handleOptionClick = (option) => {
        //as soon as close open label list when user clicks on any option
        setIsOpen(false);
        //print that option which was selected(clicked)
        onChange(option);
    };

   const renderdOptions = options.map((option) => {
    //here value of options doesn't change so key is option.value
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
   });

//    let content = 'Select...';
//     if(value) {
//         content = value.label;
//     };

   return (
        <div className='w-48 relative'>
            {/* bcoz with ? in (selection?.label) it will give undefined if label is null or undefined; but without ? it will give error if label is null*/}
            {/* why we use panel: watch Panel.js */}
            <Panel className='flex justify-between item-center cursor-pointer' onClick={handleClick}>
                {value?.label || 'Select..'}
                <GoChevronDown className='text-lg' />
            </Panel>

            {/* u can use this with above conditional thing,but upperone is better */}
            {/* <div onClick={handleClick}>{content}</div> */}

            {isOpen && <Panel className='absolute top-full'>{renderdOptions}</Panel>}
        </div>
   );
}

export default Dropdown;
