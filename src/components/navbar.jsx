import React from 'react'

const navbar = () => {
  return (
    <header class="lg:px-16 px-4 bg-black flex flex-wrap items-center py-4 shadow-md text-white">
    <div class="flex-1 flex justify-between items-center">
        <a href="#" class="text-xl">BMW</a>
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a class="md:p-4 py-3 px-0 block  text-white hover:text-red-600" href="#">AboutUs</a></li>
                <li><a class="md:p-4 py-3 px-0 block  text-white hover:text-red-600" href="#">Treatments</a></li>
                <li><a class="md:p-4 py-3 px-0 block  text-white hover:text-red-600" href="#">Blog</a></li>
                <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2  text-white hover:text-red-600" href="#">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>
    // <nav className ="flex gap-10 bg-blue text-white jusity-center">
    //         <ul className ="flex gap-10" >
    //             <li className ="hover:text-red-600">Home</li>
    //             <li className ="hover:text-red-600">About</li>
    //             <li className ="hover:text-red-600">VContact</li>
    //             <li className ="hover:text-red-600">Price</li>
    //         </ul>

    // </nav>
  )
}
export default navbar;
