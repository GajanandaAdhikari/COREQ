import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function TopResearchArticlesList() {
    const [recommendedArticles, setRecommendedArticles] = useState([]);
    const token = Cookies.get("token");

    useEffect(() => {
        const fetchRecommendedArticles = async () => {
            try {
                console.log(Cookies.get('userId'))
                const response = await axios.get(
                    'http://localhost:8000/feed/recommendedArticles',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setRecommendedArticles(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRecommendedArticles();
    }, []);
    return (
        <div>
            {
                recommendedArticles.map(user => <SuggestedResearchArticles
                    name={user.fullName}
                    userName={user.username}
                    userImage={user.profilePic}
                    projTitle={user.title}
                    key={user._id}
                ></SuggestedResearchArticles>)
            }
        </div>
    )
}

function SuggestedResearchArticles({ name, userName, userImage, projTitle }) {
    return (
        <>
            <li className="py-2  ">
                <div className="flex items-left space-x-4">
                    <div class="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={userImage} />
                    </div>
                    <div class="flex-1 min-w-0">
                        <h1 className=' hover:text-purple-700 md:text-[20px] 2xl:text-[20px]'><a href=''>{projTitle}</a></h1>
                        <p className="text-[16px] hover:text-sky-700">
                            {name} <span className="text-[14px] text-gray-700  dark:text-gray-700">@{userName}</span>
                        </p>
                        {/* <p className="text-sm text-gray-700 truncate dark:text-gray-700">
                            @{userName}
                        </p> */}
                    </div>

                </div>
            </li>
        </>
    )
}

function TopResearchArticles() {
    return (
        <>
            <div className="flex">

                <div class="max-sm:w-[175px] md:w-[180px] lg:w-[240px]  2xl:w-[376px]   p-1  border border-gray-200 rounded-lg shadow  ">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="md:text-md lg:text-lg 2xl:text-3xl font-bold leading-none  ">Top Articles</h5>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <TopResearchArticlesList />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopResearchArticles;