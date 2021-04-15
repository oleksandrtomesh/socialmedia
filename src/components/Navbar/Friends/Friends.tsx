import React from 'react';
import c from './Friends.module.css';
type PropsType = {
  name: string
  id: number
}
const Friends: React.FC<PropsType> = ({name, id}) => {
  return (
  <div className={c.friend}>
    <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="user icon"/>
    <div>{name}</div>
  </div>
  );
}

export default Friends;