interface UserProfileProps{
    username:string;
    avatar:string;
    description:string;
    age:number;
    dateOfBirth: Date;
    hobbies: string[];
    isMember?:boolean;
}

export function UserProfileCard(props: UserProfileProps) {
    return (
        <div className="w-fit flex flex-col p-2 bg-slate-200">
        <span className="flex gap-2 items-center">
            <img src={props.avatar} alt={`A picture of ${props.username}`} />
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
                {props.hobbies.map((tag) =>
                <p className="bg-amber-300 p-1"></p>
                )}
             </span>
        </span>
    </div>
    )
}