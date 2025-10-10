import type { Route } from "./+types/members"
import members from "@/data/memberData.json"


export function loader({ params }: Route.LoaderArgs) {
    const result = members.find(query => query.userName.toLowerCase() == params.userName.toLowerCase())

    return result
}

export default function MemberPage({ loaderData }: Route.ComponentProps) {
    if (!loaderData) {
        return <h1>Unable to get details for this person</h1>
    }

    const { firstName, lastName, bio, address, age, city, phoneNumber, postNumber, userName, profilePicture } = loaderData
    return (
        <div>
            <h1 className="m-3 w-full">Members Page</h1>
            <div className="flex flex-col bg-pink-200 rounded-2xl gap-1 p-5 text-pink-900">
                <div className="flex gap-2 bg-pink-400 rounded-2xl mb-2 w-fit pl-2 pr-2">
                    <p className="font-bold text-2xl">Username:</p>
                    <p className="text-2xl">{userName}</p>
                </div>
                <img src={profilePicture} className="h-full aspect-auto w-60 rounded-md" />

                <div className="flex gap-2">
                    <p className="font-bold">Name:</p>
                    <p>{firstName} {lastName}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Age:</p>
                    <p>{age}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Phone number:</p>
                    <p>{phoneNumber}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Address:</p>
                    <p>{address}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">City:</p>
                    <p>{city}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Post Number:</p>
                    <p>{postNumber}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Bio:</p>
                    <p>{bio}</p>
                </div>

            </div>
        </div>
    )
}