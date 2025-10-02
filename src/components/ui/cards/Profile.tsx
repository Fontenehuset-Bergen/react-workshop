export interface Profile {
  name: string;
  avatar?: string;
  age: number;
  description: string;
  hobbies: string[];
}

export function ProfileCard(props: Profile) {
  const { name, avatar, age, description, hobbies } = props;
  return (
    <div className="flex flex-none gap-2 p-2 rounded-md text-white bg-gradient-to-br from-purple-800 to-orange-800">
      <img
        src={avatar || "/profile.png"}
        alt={"A profile picture of " + name}
      />
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>{description}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
      </div>
    </div>
  );
}
