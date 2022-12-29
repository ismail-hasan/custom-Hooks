import React from 'react';
import { Link } from 'react-router-dom';
import useHook from '../Custom/UseHook';
const refreshButton = () => {
    window.location.reload();
};
const Home = () => {
    const [hooks] = useHook("https://www.boredapi.com/api/activity");
    console.log(hooks)
    return (
        <>

            <div class="w-1/3 mx-auto rounded overflow-hidden shadow-lg">
                <img
                    class="w-full"
                    src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810"
                    alt="Sunset in the mountains"
                />
                <div class=" pt-4">
                    <div class="capitalize font-bold text-xl mb-2">{hooks?.type}</div>
                    <p class="text-gray-700 text-base">{hooks?.activity}</p>
                </div>
                <div class="py-3 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{hooks?.type}
                    </span>
                </div>
                <h1>{hooks?.price}</h1>
                <div className="my-4">
                    <Link onClick={refreshButton} className="btn borader bg-purple-500 rounded px-4 py-2  text-white refreshBtn">
                        Refresh
                    </Link>
                </div>
            </div>

        </>
    );
};

export default Home;