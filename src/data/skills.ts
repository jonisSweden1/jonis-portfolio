export class Skill {
    private id: number;
    private name: string;
    private yearsOfExperience: number;

    public constructor(id: number, name: string, yearsOfExperience: number) {
        this.id = id;
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getYearsOfExperience(): number {
        return this.yearsOfExperience;
    }
}

export const skills: Skill[] = [
    new Skill(0, "Programming", 6),
    new Skill(1, "Game Development", 6),
    new Skill(2, "3D Modeling", 6),
    new Skill(3, "Web Development", 3),
    new Skill(4, "Software Development", 3),
]