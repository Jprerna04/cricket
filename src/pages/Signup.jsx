import React from 'react';

const SignUp = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden" style={{ fontFamily: 'Work Sans, Noto Sans, sans-serif' }}>
      <div className="flex items-center bg-[#f8fafb] p-4 pb-2 justify-between">
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">Sign up</h2>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-6">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Username"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e8edf3] focus:border-none h-14 placeholder:text-[#4f7396] py-4 text-base font-normal leading-normal w-80"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-6">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Email address"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e8edf3] focus:border-none h-14 placeholder:text-[#4f7396] p-4 text-base font-normal leading-normal w-80"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-6">
        <label className="flex flex-col min-w-40 flex-1">
          <div className="flex w-full flex-1 items-stretch rounded-xl">
            <input
              placeholder="Password"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e8edf3] focus:border-none h-14 placeholder:text-[#4f7396] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal w-80"
              value=""
            />
            <div
              className="text-[#4f7396] flex border-none bg-[#e8edf3] items-center justify-center pr-4 rounded-r-xl border-l-0"
              data-icon="Eye"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46 ,0,0,1 ,231.05,128C223.84,141.46,192.43,192 ,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                ></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-4 gap-3 max-w-[480px] flex-col items-stretch px-4 py-6">
          <button
            className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 py-4 px-4 bg-[#e8edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full"
          >
            <span className="truncate">Sign up</span>
          </button>
          <button
            className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 py-4 px-4 bg-[#e8edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full"
          >
            <span className="truncate">Continue with Google</span>
          </button>
        </div>
      </div>
      <p className="text-[#4f7396] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
        By continuing, you agree to our Terms of Service and confirm that you have read our Privacy Policy.
      </p>
      <div className="h-5 bg-[#f8fafb]"></div>
    </div>
  );
};

export default SignUp;