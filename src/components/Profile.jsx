import react from "react";
import User from "./User";
import ShortCuts from "./ShortCuts";
import DonutChart from "./DonutChart";


const Profile = () => {
    return(
        <div className="px-2 py-4 bg-gray-200 rounded-lg w-full dark:bg-gray-700 lg:w-60 xl:w-80
        flex flex-col gap-4">
            <User />
            <ShortCuts />
            <DonutChart />
        </div>
    );
};


export default Profile;