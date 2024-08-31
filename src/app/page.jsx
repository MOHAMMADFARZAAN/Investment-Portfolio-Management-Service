import React from 'react'

const Home = () => {
  return (
   
    <>
  {/* Hero */}
  <div className="overflow-hidden">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
        {/* Title */}
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
            Small business solutions
          </p>
          <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
            Invest With Us To Get {" "}
            <span className="text-red-500">Extraordinary Returns</span>
          </h1>
        </div>
        {/* End Title */}
        {/* Avatar Group */}
        <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
          <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
            {/* Avatar Group */}
            <div className="flex justify-center -space-x-3">
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt="Avatar"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
              <span className="inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-neutral-900 dark:ring-neutral-900">
                <span className="text-xs font-medium leading-none text-white uppercase">
                  7k+
                </span>
              </span>
            </div>
            {/* End Avatar Group */}
          </div>
          <div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0 dark:border-neutral-700" />
          <div className="pt-5 sm:pt-0 sm:ps-5">
            <div className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Trust pilot
            </div>
            <div className="text-sm text-gray-500 dark:text-neutral-500">
              Rated best over 37k reviews
            </div>
          </div>
        </div>
        {/* End Avatar Group */}
        {/* Form */}
        <form>
          <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
            <div className="w-full pb-2 sm:pb-0">
              <label
                htmlFor="hs-hero-name-1"
                className="block text-sm font-medium dark:text-white"
              >
                <span className="sr-only">Your name</span>
              </label>
              <input
                type="text"
                id="hs-hero-name-1"
                className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Your Username"
              />
            </div>
            <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s w-full dark:border-neutral-700">
              <label
                htmlFor="hs-hero-email-1"
                className="block text-sm font-medium dark:text-white"
              >
                <span className="sr-only">Your email address</span>
              </label>
              <input
                type="email"
                id="hs-hero-email-1"
                className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Your Reference Number"
              />
            </div>
            <div className="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Login
              </a>
            </div>
          </div>
        </form>
          <hr className='mt-5 border-neutral-600' />
          <div className='flex items-center justify-center'>
          <a
                className="py-3 w-[50%] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Join Us!
              </a>
          </div>


        {/* End Form */}
        {/* SVG Element */}
        <div
          className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80"
          aria-hidden="true"
        >
          <svg
            className="w-52 h-auto"
            width={717}
            height={653}
            viewBox="0 0 717 653"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
              fill="currentColor"
              className="fill-gray-800 dark:fill-white"
            />
            <path
              d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z"
              fill="currentColor"
              className="fill-orange-500"
            />
            <path
              d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
              fill="currentColor"
              className="fill-cyan-500"
            />
          </svg>
        </div>
        {/* End SVG Element */}
        {/* SVG Element */}
        <div
          className="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80"
          aria-hidden="true"
        >
          <svg
            className="w-72 h-auto"
            width={1115}
            height={636}
            viewBox="0 0 1115 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
              fill="currentColor"
              className="fill-orange-500"
            />
            <path
              d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
              fill="currentColor"
              className="fill-cyan-500"
            />
            <path
              d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
              fill="currentColor"
              className="fill-gray-800 dark:fill-white"
            />
          </svg>
        </div>
        {/* End SVG Element */}
      </div>
    </div>
  </div>
  {/* End Hero */}

  <>
  {/* Testimonials */}
  <div className="relative h-[500px] mt-10 z-10 overflow-hidden">
    <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
      {/* Gradients */}
      <div aria-hidden="true" className="flex -z-[1] absolute start-0">
        <div className="bg-red-200 opacity-20 border blur-3xl w-[1136px] h-[300px] dark:bg-red-900 dark:opacity-20" />
      </div>
      {/* End Gradients */}
      {/* Grid */}
      <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
        <div className="hidden lg:block lg:col-span-2">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Avatar"
          />
        </div>
        {/* End Col */}
        <div className="lg:col-span-4">
          {/* Blockquote */}
          <blockquote>
            <svg
              className="w-24 h-auto mb-4"
              viewBox="-0.3 0 320.3999999999999 99.9"
              xmlns="http://www.w3.org/2000/svg"
              width={2500}
              height={779}
            >
              <path
                d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z"
                fill="#ff5a5f"
              />
            </svg>
            <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
              Yahan tumhare chacchaa ki photo lagegi To say that switching to Preline has been life-changing is an
              understatement. My business has tripled and I got my life back.
            </p>
            <footer className="mt-6">
              <div className="flex items-center">
                <div className="lg:hidden shrink-0">
                  <img
                    className="size-12 rounded-full"
                    src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                </div>
                <div className="ms-4 lg:ms-0">
                  <p className="font-medium text-gray-800 dark:text-neutral-200">
                    Nicole Grazioso
                  </p>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Head of Finance
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>
          {/* End Blockquote */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Testimonials */}
</>



  <>
  {/* Team */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        Our leadership
      </h2>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            David Forren
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Founder / CEO
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Amil Evara
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Ebele Egbuna
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Maria Powers
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Director of sales
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Delia Pawelke
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Front-end Developer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Tom Lowry
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Louise Donadieu
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Jeff Fisher
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Project Manager
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-xl sm:size-48 lg:size-60 mx-auto"
          src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
            Sophia Harrington
          </h3>
          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
            Project Manager
          </p>
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Team */}
</>



</>








  )
}

export default Home
