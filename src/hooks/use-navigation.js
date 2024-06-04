import { useContext } from "react";
import NavigationContext from '../context/Navigation3'

function useNavigation () {
    return useContext(NavigationContext);
}

export default useNavigation;