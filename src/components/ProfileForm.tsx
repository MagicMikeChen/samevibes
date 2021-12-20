import type { NextComponentType } from 'next';

const ProfileForm: NextComponentType = () => {
  return (
    <div className="cs-block-style-grey-900">
    <div className="relative mt-8 mx-2">
      <input
        id="name"
        name="name"
        type="text"
        className="peer h-10 w-full border-b-2 bg-transparent border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-grey-500"
        placeholder="name"
      />
      <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
        User name
      </label>
    </div>
    <div className="relative mt-8 mx-2">
      <input
        id="email"
        name="email"
        type="text"
        className="peer h-10 w-full border-b-2 bg-transparent border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-grey-500"
        placeholder="john@doe.com"
      />
      <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
        Email address
      </label>
    </div>
    <div className="flex">
      <div className="relative mt-8 mx-2 flex-1">
        <input
          id="email"
          name="email"
          type="text"
          className="peer h-10 w-full border-b-2 bg-transparent border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-grey-500"
          placeholder="john@doe.com"
        />
        <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
          Birthday
        </label>
      </div>
      <div className="relative mt-8 mx-2 flex-1">
        <input
          id="age"
          name="age"
          type="text"
          className="peer h-10 w-full border-b-2 bg-transparent border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-grey-500"
          placeholder="john@doe.com"
        />
        <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
          Email address
        </label>
      </div>
    </div>
    <div className="my-8 mx-2">
      <label className="font-medium text-white ">Gender</label>
      <div className="mt-2">
        <select
          name="company-size"
          id="company-size"
          className="cs-border-btn-t-100 w-full rounded-xl text-lg font-medium text-gray-400 bg-transparent"
        >
          <option value="">Please select</option>
          <option value="small">Male</option>
          <option value="medium">Female</option>
          <option value="large">Reamin Secret</option>
        </select>
      </div>
    </div>
    <div className='flex mb-8'>
    <div className="mx-2 flex-1">
      <label className="font-medium text-white ">Gender</label>
      <div className="mt-2">
        <select
          name="company-size"
          id="company-size"
          className="cs-border-btn-t-100 w-full rounded-xl text-lg font-medium text-gray-400 bg-transparent"
        >
          <option value="">Please select</option>
          <option value="small">Male</option>
          <option value="medium">Female</option>
          <option value="large">Reamin Secret</option>
        </select>
      </div>
    </div>
    <div className="mx-2 flex-1">
      <label className="font-medium text-white ">Gender</label>
      <div className="mt-2">
        <select
          name="company-size"
          id="company-size"
          className="cs-border-btn-t-100 w-full rounded-xl text-lg font-medium text-gray-400 bg-transparent"
        >
          <option value="">Please select</option>
          <option value="small">Male</option>
          <option value="medium">Female</option>
          <option value="large">Reamin Secret</option>
        </select>
      </div>
    </div>
    </div>
  </div>
  );
};

export default ProfileForm;
