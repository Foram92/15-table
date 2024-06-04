import Accordion from '../components/Accordion';

function AccordionPage() {
const items = [
    {
        id: '01',
        label: 'What type of cat is Tom?',
        content: 'Created by William Hanna and Joseph Barbera, he is a grey and white anthropomorphic domestic short haired mute tuxedo British cat who first appeared in the 1940 MGM animated short Puss Gets the Boot.'
    },
    {
        id: '02',
        label: 'Who is Jerry?',
        content: 'Jerry is a cute young brown mute anthropomorphic house mouse, who first appeared as a mouse named Jinx in the 1940 MGM animated short Puss Gets the Boot.'
    },
    {
        id: '03',
        label: 'About Popeye',
        content: 'Popeye and his ubiquitous can of spinach. Popeye, a pugnacious, wisecracking cartoon sailor who possesses superhuman strength after ingesting an always-handy can of spinach.'
    },
];

return <Accordion items={items} />
}

export default AccordionPage;