import classNames from "classnames";
import useNavigation from '../hooks/use-navigation';

function Link ({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName,
    );

    const handleClick = (event) => {
        //console.log(event);

//to see if it works in window hold ctrl key and press any link it will open in new page
        if (event.metaKey || event.ctrlKey) {
            return;
        }
//this will stop standard navigation, that's stop total page reload
        event.preventDefault();

        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{ children }</a>
}

export default Link;