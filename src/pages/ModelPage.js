import { useState } from 'react';
import Model from '../components/Model';
import Button from '../components/Button';

function ModelPage () {

    const [showModel, setShowModel] = useState(false);

    const handleClick = () => {
        setShowModel(true);
    }

    const handleClose = () => {
        setShowModel(false);
    }

    const onAction = <Button onClick={handleClose} primary>I Accept</Button>

    const model = <Model onClose={handleClose} onAction={onAction}>
        <p>You can click on 'button' or 'gray-backgorund' to close me.</p>
    </Model>

    return (
        <div className='relative'>
            <Button onClick={handleClick} primary>
                Open Model
            </Button>
            { showModel && model }
            <p className='mt-5'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            <p className='mt-2'>
                Dexter's Laboratory[c] is an American animated television series created by Genndy Tartakovsky for Cartoon Network. The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents, who are only referred to as "Mom" and "Dad". Dexter is at constant odds with his older and more extroverted sister Dee Dee, who always gains access to the lab and inadvertently foils his experiments. Dexter has a bitter rivalry with his neighbor and classmate Mandark, a nefarious boy-genius who attempts to undermine Dexter at every opportunity. Prominently featured in the first and second seasons are other segments focusing on superhero-based characters Monkey, Dexter's pet lab-monkey/superhero, and the Justice Friends, a trio of superheroes who share an apartment.
            </p>
            {/* <Button onClick={handleClick} primary>
                Open Model
            </Button>
            { showModel && model } */}
        </div>
    );
}

export default ModelPage;