
const skills: string[] = ['Bash', 'Counter','Hesling'];


interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometow?: string;
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometow = 'Rivendell';

console.table(strider);

export{};