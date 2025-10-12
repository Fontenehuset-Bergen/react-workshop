import { useState } from "react";
import { ProfileCard, type Profile } from "../ui/cards/Profile";
//import { text } from "stream/consumers";

export function ProfileExample() {
  const [profile, setProfile] = useState<Profile>({
    age: 0,
    avatar: "",
    description: "",
    hobbies: [],
    name: "",
  });

  return (
    <section>
      <h2>Vi kan sitte opp enkle form bindings</h2>
      <p>Prøv å skriv noe i feltene under</p>
      <div className="flex flex-wrap gap-6">
        <form className="flex-1 p-2 rounded-md bg-blue-100/25">
          <label>
            <p>Name</p>
            <input
              type="text"
              placeholder="What is your name?"
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full p-1 bg-white border-black text-black rounded"
            />
          </label>
          <label>
            <p>Age</p>
            <input
              type="number"
              placeholder="What is your age?"
              min={0}
              max={200}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, age: Number(e.target.value) }))
              }
              className="w-full p-1 bg-white border-black text-black rounded"
            />
          </label>
           <label>
            <p>Hobbies</p>
            <input
              type="text"
              placeholder="What is your hobbies"
              min={0}
              max={200}
              onChange={(e) => setProfile((prev) => ({...prev, hobbies: e.target.value.split(",")}))}
           
              className="w-full p-1 bg-white border-black text-black rounded"
            />
          </label>
        </form>
        <span className="flex-1">
          <ProfileCard {...profile} />
        </span>
      </div>
    </section>
  );
}
