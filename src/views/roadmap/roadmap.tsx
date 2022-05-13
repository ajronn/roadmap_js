import { MapGenerator } from "../../services/map-generator"


import horizontal from "../../utils/images/roads/horizontal.png"
import vertical from "../../utils/images/roads/vertical.png"
import leftdown from "../../utils/images/roads/leftdown.png"
import leftup from "../../utils/images/roads/leftup.png"
import rightup from "../../utils/images/roads/rightup.png"
import rightdown from "../../utils/images/roads/rightdown.png"
import none from "../../utils/images/roads/none.png"

import style from "./roadmap.module.css"
import { OBJECTS } from "../../services/map-generator/models"

const SIZE = 10;
const IMG_SIZE = 70;
const IMAGES: { [key in OBJECTS]: string } = {
    [OBJECTS.HORIZONTAL]: horizontal,
    [OBJECTS.VERTICAL]: vertical,
    [OBJECTS.LEFTDOWN]: leftdown,
    [OBJECTS.LEFTUP]: leftup,
    [OBJECTS.RIGHTDOWN]: rightdown,
    [OBJECTS.RIGHTUP]: rightup,
    [OBJECTS.NONE]: none,

}
export const Roadmap = () => {
    const mapGenerator = new MapGenerator(SIZE, 100);

    return (
        <div className={style.roadmap_container} style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }} >
            {mapGenerator.getMap().map((row, i) => {
                return row.map((img, j) => {
                    return (
                        <img key={img + j + i} src={IMAGES[img]} alt="" width={IMG_SIZE} />
                    )
                })
            })}
        </div>
    )
}