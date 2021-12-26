import type { NextComponentType } from 'next';
import Image from 'next/image';

const PostContent: NextComponentType = () => {
  return (
    <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-grey-900 dark:text-white divide-y divide-gray-300 dark:divide-gray-500">
      <div className='px-4 py-4'>
      <div className="flex content-center items-center text-center py-4">
        <div className="relative  h-20 w-20 2xl:h-32 2xl:w-32">
          <Image
            className="rounded-full"
            src="/img/g2.jpg"
            alt="me"
            layout="fill"
            // width={120}
            // height={120}
            objectFit="cover"
          />
        </div>
        <div className="flex-col justify-start text-left pl-4">
          <div>
            <span>Victoria Wirya</span>
            <span className="pl-2">is listening to</span>
            <span className="pl-1">A idoit</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <div className="flex items-center justify-center">
          <div className="relative h-40 w-40 2xl:h-32 2xl:w-32">
            <Image
              className="rounded-md"
              src="/img/album-01.jpg"
              alt="me"
              layout="fill"
              // width={120}
              // height={120}
              objectFit="cover"
            />
          </div>
          <div className="pl-4">
            <div>American idiot</div>
            <div className="text-gray-400">Green Day</div>
          </div>
        </div>
      </div>

      </div>
      <div className="flex justify-center">
        <div className="cs-post-btn-style rounded-bl-xl">
          Like
        </div>
        <div className="cs-post-btn-style rounded-br-xl">
          Comment
        </div>
      </div>
    </div>
  );
};

export default PostContent;