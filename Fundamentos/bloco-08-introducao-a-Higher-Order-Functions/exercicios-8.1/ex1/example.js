const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (thing) => console.log(thing());

doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleep);
