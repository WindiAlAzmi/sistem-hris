import {Card } from "flowbite-react";
import useRole from "../../hooks/useRole";

export default function Settings() {
  const {user} = useRole();

  return (
    <div className="bg-gray-500 flex flex-col"> 
        <Card >
       <img width={500} height={500} src={user?.image} className="w-[200px] h-[200px]" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

    </div>
  )
}
