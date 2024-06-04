import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

    const handleClick = () => {
        console.log('click');
    };

    return ( 
        <div>
            <div>
                <Button primary rounded outline className='mb-5' onClick={handleClick}>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button secondary>Buy Now</Button>
            </div>
            <div>
                <Button success rounded outline>
                    <GoDatabase />
                    Submit
                </Button>
            </div>
            <div>
                <Button warning onMouseEnter={handleClick}>
                    Register
                </Button>
            </div>
            <div>
                <Button danger outline onMouseLeave={handleClick}>
                    <GoCloud />
                    Cancel
                </Button>
            </div>
        </div> 
    )
}

export default ButtonPage;