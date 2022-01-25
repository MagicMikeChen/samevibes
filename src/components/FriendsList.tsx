import type { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { translateMaker } from '../utils';
import { demoFriendList } from '../../fakeFriendList';

// type FriendsListProps = {
//   listItem: {
//     userId: string;
//     userName: string;
//     userAvatar: string;
//     hobbes: string[];
//     matchRate: number;
//   };
// };

const FriendsList = () => {
  const router = useRouter();
  const t = translateMaker(router);
  return (
    <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-gray-900 dark:text-white content-center items-center text-center relative justify-items-center mt-4 lg:mt-0 lg:ml-4">
      <div className="cs-gradient-logo-style-light dark:cs-gradient-logo-style-dark text-lg pt-4 font-semibold">
        {t['txt-recommend-friend']}
      </div>
      {/* <div>
      <img
        className="inline-block h-32 w-32 rounded-full ring-1 ring-white object-cover"
        src="/img/g2.jpg"
        alt="g1"
      />
    </div> */}
      <div className="text-gray-600 dark:text-white px-2 divide-y divide-solid divide-gray-300 dark:divide-gray-500">
        {demoFriendList.length > 0 &&
          demoFriendList.map((listItem) => {
            return (
              <div key={listItem.userId} className="flex-col py-4">
                <div className="flex content-center items-center text-center px-2">
                  <Link href={`/user/${listItem.userId}`} passHref>
                    <div className="relative h-16 w-16 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24 min-w-min aspect-square cursor-pointer">
                      <Image
                        className="rounded-full"
                        src={listItem.userAvatar}
                        alt="me"
                        layout="fill"
                        // width={120}
                        // height={120}
                        objectFit="cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-col justify-start text-left pl-4 text-sm md:text-base">
                    <div>{listItem.userName} {t['txt-also-likes']}</div>
                    <div className="flex flex-wrap py-1 text-sm text-gray-100 dark:text-white">
                      <div className="flex justify-center items-center content-center text-center px-1 bg-orange-400 rounded-full mr-1 mb-1">
                        {listItem.hobbes[0]}
                      </div>
                      <div className="flex justify-center items-center content-center text-center px-1 bg-blue-400 rounded-full mr-1 mb-1">
                        {listItem.hobbes[1]}
                      </div>
                      <div className="flex justify-center items-center content-center text-center px-1 bg-purple-400 rounded-full mr-1 mb-1">
                        {listItem.hobbes[2]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-lg md:text-xl py-1">
                  {listItem.matchRate}% {t['txt-match']}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FriendsList;
