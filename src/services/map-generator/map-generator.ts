import { OBJECTS, MAP, DIRECTIONS, allowed_objects_rules } from "./models"

export class MapGenerator {

    constructor(size: number, length: number) {
        const map: OBJECTS[][] = []
        Array.from({ length: size }).forEach(() => {
            const row: OBJECTS[] = []
            Array.from({ length: size }).forEach(() => {
                row.push(OBJECTS.NONE)
            })
            map.push(row)
        })
        this.map = map;
        this.randStartPoint();
        this.generateRoad(length);
    }

    private randStartPoint() {
        const variants = [OBJECTS.LEFTDOWN, OBJECTS.HORIZONTAL, OBJECTS.VERTICAL];
        const directions = [DIRECTIONS.DOWN, DIRECTIONS.RIGHT, DIRECTIONS.DOWN];
        const rand = Math.floor(Math.random() * variants.length);
        this.activeDirection = directions[rand];
        this.map[0][0] = variants[rand];
    }

    private generateRoad(length: number) {
        let x = 0;
        let y = 0;

        Array.from({ length }).forEach(() => {
            const square = this.map[x][y];
            const rule = allowed_objects_rules[square]!;
            const allowed_objects = rule[this.activeDirection]!;
            
        })
    }

    getMap() {
        return this.map;
    }

    private map: MAP = []
    private activeDirection = DIRECTIONS.DOWN;
}