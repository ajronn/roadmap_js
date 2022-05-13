import { useEffect, useState } from "react";
import { UsersService, USER } from "./services"

import style from "./App.module.css"
import ROADIMG from "./utils/images/road.png"

export const App = () => {
  const [users, setUsers] = useState<USER[]>([]);
  useEffect(() => {
    UsersService.getUsers().then((data) => setUsers(data))

  }, [])
  return (
    <div>
      <div className={style.roadmap} >
        {Array.from({length: 1}).map((_, i)=>{
          return(
            <img key={'road'+i} src={ROADIMG} height="149" width="128" alt="" />
          )
        })}
      </div>
    </div>
  );
}
