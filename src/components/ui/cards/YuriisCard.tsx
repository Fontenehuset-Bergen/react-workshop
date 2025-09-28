import styles from './assets/styles/CardStyle.module.css'
import { DropdownMenu } from "../menus/Dropdown";

interface YuriisCardProps {
  username: string;
  avatar: string;
  description: string;
  age: number;
  dateOfBirth: Date;
  hobbies: string[];
  isMember?: boolean;
}

export function YuriisCard(props: YuriisCardProps) {
  return (
    <div className={styles.mainC}>
      <div className={styles.flexC}>
        <div className={styles.imageC}>
          <img src="/src/assets/pepe.png" alt={`A picture of ${props.username}`} />
        </div>
      <div className={styles.infolist}>
        <p className={styles.h1s}>{props.username}</p>
        <span className={styles.age}>
          <p className={styles.pstyles}>Age:</p>
          <p>{props.age}</p>
        </span>
        <span className={styles.birthday}>
          <p className={styles.pstyles}>Birthday:</p>
          <p>{props.dateOfBirth.toDateString()}</p>
        </span>
      <span className={styles.hobbies}>
        <p className={styles.pstyles}>Hobbies:</p>
        <span className={styles.tagsC}>
          {props.hobbies.map((tag) => (
            <p className={styles.tags}>{tag}</p>
          ))}
        </span>
      </span>
      <DropdownMenu />
      </div>
      </div>
    </div>
  );
}

/* 
    <div
      className={`w-fit flex flex-col p-2 ${
        props.isMember ? "bg-lime-200" : "bg-slate-200"
      }`}
    >
      <span className="flex gap-2 items-center">
        <img style={{height: '200px', width: '200px' }} src={props.avatar} alt={`A picture of ${props.username}`} />
        <p>{props.username}</p>
      </span>
      <p>{props.description}</p>
      <span className="flex gap-2">
        <p>Age:</p>
        <p>{props.age}</p>
      </span>
      <span className="flex gap-2">
        <p>Birthday:</p>
        <p>{props.dateOfBirth.toDateString()}</p>
      </span>
      <span className="flex gap-2">
        <p>Hobbies:</p>
        <span className="flex gap-1">
          {props.hobbies.map((tag) => (
            <p className="bg-amber-300 p-1">{tag}</p>
          ))}
        </span>
      </span>
      <DropdownMenu />
    </div>
*/