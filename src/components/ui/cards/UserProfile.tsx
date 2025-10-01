import { DropdownMenu } from "@/components/ui/menus/Dropdown.tsx";

interface UserProfileProps {
    username: string,
    avatar: string,
    description: string,
    age: number,
    dateOfBirth: Date,
    hobbies: string[],
    isMember?: boolean,
}

export function UserProfileCard(props: UserProfileProps) {

    return (
        <div className={`w-fit flex flex-col p-2 ${props.isMember ? "bg-blue-950" : "bg-amber-950"}`}>
            {/* checking if user is member and choosing bg color based on that */}
            <span className="flex gap-2 items-center">
                <img src={props.avatar} alt={`A picture of ${props.username}`} /> {/*  alt={`${}`} - a string that can be dynamically changed */}
                <p> {props.username}</p>
            </span>
            {/* span is for info on a single line/inline, div is more information and more lines  */}
            <p>{props.description}</p>
            <span className="flex gap-2">
                <p>Age:</p>
                <p>{props.age}</p>
            </span>
            <span className="flex gap-2">
                <p>Birthday:</p>
                <p>{props.dateOfBirth.toDateString()}</p>
                {/* todatestring changes it to only show date */}
            </span>
            <span className="flex gap-2">
                <p>Hobbies:</p>
                <span className="flex gap-2">
                    {props.hobbies.map((tag) => <p className="bg-amber-500 p-1">{tag}</p>)}
                    {/* creates a p tag for all the different elements in the hobbies array, and each gets the value of the string */}
                </span>
            </span>
            <DropdownMenu />
        </div>
    );
}