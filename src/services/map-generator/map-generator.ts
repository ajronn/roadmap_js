import { OBJECTS, MAP, DIRECTIONS, rules } from "./models"

export class MapGenerator {

    constructor(size: number) {
        const map: OBJECTS[][] = []
        Array.from({ length: size }).forEach(() => {
            const row: OBJECTS[] = []
            Array.from({ length: size }).forEach(() => {
                row.push(OBJECTS.NONE)
            })
            map.push(row)
        })
        map[0][0] = this.randStartPoint()
        console.log(map[0][0])
        console.log(this.activeDirection)
    }

    randStartPoint(): OBJECTS {
        const variants = [OBJECTS.LEFTDOWN, OBJECTS.HORIZONTAL, OBJECTS.VERTICAL];
        const directions = [DIRECTIONS.DOWN, DIRECTIONS.RIGHT, DIRECTIONS.DOWN];
        const rand = Math.floor(Math.random() * variants.length);
        this.activeDirection = directions[rand];
        return variants[rand];
    }



    map: MAP = []
    activeDirection = DIRECTIONS.DOWN;
}