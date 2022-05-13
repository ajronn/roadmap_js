import { OBJECTS, MAP, DIRECTIONS, allowed_objects_rules, summand, change_direction_rules } from "./models"

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
        this.generateRoad(length, size);
    }

    private randStartPoint() {
        const variants = [OBJECTS.LEFTDOWN, OBJECTS.HORIZONTAL, OBJECTS.VERTICAL];
        const directions = [DIRECTIONS.DOWN, DIRECTIONS.RIGHT, DIRECTIONS.DOWN];
        const rand = Math.floor(Math.random() * variants.length);
        this.activeDirection = directions[rand];
        this.map[0][0] = variants[rand];

    }

    private generateRoad(length: number, size: number) {
        let currX = 0;
        let currY = 0;
        Array.from({ length }).forEach(() => {
            if (currX >= 0 && currY >= 0 && currX < size && currY < size) {
                const { x, y } = summand[this.activeDirection];
                const currSquare = this.map[currX][currY];
                if (currSquare) {
                    const rule = allowed_objects_rules[currSquare]
                    if (rule) {
                        const allowed_objects = rule[this.activeDirection]!;
                        if (allowed_objects) {
                            const obj = allowed_objects[Math.floor(Math.random() * allowed_objects.length)]
                            currX = currX + x;
                            currY = currY + y;
                            if (currX >= 0 && currY >= 0 && currX < size && currY < size) {
                                const nextSquare = this.map[currX][currY] || null

                                if (nextSquare === OBJECTS.NONE) {
                                    this.map[currX][currY] = obj;
                                    const prevDirection = change_direction_rules[obj]
                                    if (prevDirection) {
                                        this.activeDirection = prevDirection[this.activeDirection]!
                                    }
                                }
                            }
                        }

                    }
                }
            }
        })
    }

    getMap() {
        return this.map;
    }

    private map: MAP = []
    private activeDirection = DIRECTIONS.DOWN;
}