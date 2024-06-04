import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion ({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    //this is defined in outside of map function that's why we need parameter to set index; but u can also set this inside of map
    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);//it is set as which label user click on label
        }
    };
   
    const renderedItems = items.map((item, index) => {
        // if (index === expandedIndex) {
        //    console.log('expanded');
        // } else {
        //    console.log('collapsed');
        //   }

        //this will compare every item's index with expandedIndex, it will give true or false
        const isExpanded = index === expandedIndex;
        //console.log(expandedIndex);

        const icon = <span className="text-3xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronRight />} 
            </span>

        return (
            <div key={item.id}>
                {/* here we have defined arrow fun to send index to outside handleClick fun */}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick = {() => { handleClick(index) }}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
            //here && operator will give falsy value first and if no falsy value is here then gives last truthy value; so if isExpanded false then then it will show and if isExpanded is true then second truthy value item.content will show, but react will not post false so isExpanded is false then is will not shown in screen
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;