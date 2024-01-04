import React from "react";
import { FC, PropsWithChildren, useState } from "react";
import './App.css';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';

// const Icon: FC<PropsWithChildren> = ({ children }) => (
//   <i className="material-symbols-outlined">{children}</i>
// );

const App=()=>{

  const [isOpen, setIsopen]= useState(false)
  return(
    <div className={`fab ${isOpen? "open":""}`}>
     <button onClick={()=>setIsopen(!isOpen)}>
      <AddBoxIcon/>
     </button>

     <div className="menu">
         <button>
           <GroupAddIcon/>
           <span>Add Users</span>
         </button>

          <button>
           <DescriptionIcon/>
           <span>Documents</span>
          </button>

          <button>
            <SettingsIcon/>
            <span>Settings</span>
          </button>
     </div>
     

    </div>
  )


}
export default App