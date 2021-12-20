import type { NextComponentType } from 'next';
import Image from 'next/image';


const FriendsList: NextComponentType = () => {
  return (
    <div className="cs-block-style-grey-900 text-white content-center items-center text-center relative justify-items-center mt-4 lg:mt-0 lg:ml-4">
    <div>Recommand Friends</div>
    {/* <div>
      <img
        className="inline-block h-32 w-32 rounded-full ring-1 ring-white object-cover"
        src="/g1.jpeg"
        alt="g1"
      />
    </div> */}
    <div className="text-white px-2 divide-y divide-solid">
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
          <div>Name: Victoria Wirya</div>
          <div>Hobby: Piano</div>{' '}
        </div>
      </div>
      <div className="flex content-center items-center text-center py-4">
        <div className="relative  h-20 w-20 2xl:h-32 2xl:w-32">
          <Image
            className="rounded-full"
            src="/img/g1.jpg"
            alt="me"
            layout="fill"
            // width={120}
            // height={120}
            objectFit="cover"
          />
        </div>
        <div className="flex-col justify-start text-left pl-4">
          <div>Name: Trang Lê</div>
          <div>Hobby: Jazz</div>{' '}
        </div>
      </div>
      <div className="flex content-center items-center text-center py-4">
        <div className="relative  h-20 w-20 2xl:h-32 2xl:w-32">
          <Image
            className="rounded-full"
            src="/img/g3.jpg"
            alt="me"
            layout="fill"
            // width={120}
            // height={120}
            objectFit="cover"
          />
        </div>
        <div className="flex-col justify-start text-left pl-4">
          <div>Name: Teco Cheng</div>
          <div>Hobby: Hiking</div>{' '}
        </div>
      </div>
    </div>
  </div>
  );
};

export default FriendsList;
