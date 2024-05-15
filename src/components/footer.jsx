import React from 'react'

export const footer = () => {
  return (
    <footer class="text-white px-8 py-6 bg-black">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="mb-8 md:mb-0">
            <h3 class="text-lg font-bold mb-4">BMW</h3>
            <p class="mb-2">Example</p>
            <p class="mb-2">123 Example Street, Example City, Example Country</p>
            <p class="mb-2"><a href="tel:+1514890000" class="hover:text-yellow-400">1-514-890-0000</a></p>
            <p><a href="mailto:calinscompagnies@calins.com"
                    class="hover:text-yellow-400">calinscompagnies@calins.com</a></p>
        </div>
        <div class="mb-8 md:mb-0">
            <h3 class="text-lg font-bold mb-4">Example</h3>
            <ul>
                <li><a href="#" class="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" class="hover:text-yellow-400">Delivery Policy</a></li>
                <li><a href="#" class="hover:text-yellow-400">Contact Us</a></li>
                <li><a href="#" class="hover:text-yellow-400">Our Stores</a></li>
                <li><a href="#" class="hover:text-yellow-400">Help</a></li>
                <li><a href="#" class="hover:text-yellow-400">Work at Hugs</a></li>
            </ul>
        </div>
        <div class="mb-8 md:mb-0">
            <h3 class="text-lg font-bold mb-4">Example</h3>
            <ul>
                <li><a href="#" class="hover:text-yellow-400">My Personal Information</a></li>
                <li><a href="#" class="hover:text-yellow-400">My Addresses</a></li>
                <li><a href="#" class="hover:text-yellow-400">My Orders</a></li>
                <li><a href="#" class="hover:text-yellow-400">My Favorites</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-lg font-bold mb-4">Contact Us</h3>
            <ul class="mb-4">
                <li><a href="tel:+1514890000" class="hover:text-yellow-400">1-514-890-0000</a></li>
                <li><a href="mailto:calinscompagnies@calins.com" class="hover:text-yellow-400">Send mail</a></li>
            </ul>
            <div class="mt-4 icons">
                <a href="#" class="mr-2"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#" class="mr-2"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="mailto:calinscompagnies@calins.com"><i class="far fa-envelope fa-2x"></i></a>
            </div>
        </div>
    </div>
    <p class="text-center mt-8">&copy;  2024 - All rights reserved.</p>
</footer>
  )
}
export default footer;

