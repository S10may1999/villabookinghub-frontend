import React from 'react'

function Footer() {
  return (
    <div>
       <footer class="hidden md:block md:bg-gray-800 md:text-white md:py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        
        {/* <!-- Company Info --> */}
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 class="text-xl font-bold mb-4">Company Name</h3>
          <p class="mb-2">1234 Street Name</p>
          <p class="mb-2">City, State, 56789</p>
          <p>Email: info@company.com</p>
        </div>

        {/* <!-- Navigation Links --> */}
        <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" class="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition">Services</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* <!-- Social Media Icons --> */}
        <div class="w-full md:w-1/3 px-4">
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h11v-8.29H9.34v-3.24h3.42V9.39c0-3.39 2.07-5.24 5.1-5.24 1.45 0 2.7.11 3.06.16v3.54h-2.1c-1.65 0-1.97.79-1.97 1.93v2.53h3.93l-.51 3.24h-3.42V24h6.71A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.19 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.004 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.84-2.35 4.69-4.58 4.94.36.31.68.91.68 1.83 0 1.32-.01 2.39-.01 2.72 0 .27.18.58.69.48A10.007 10.007 0 0022 12.04c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 4.184c.95-.56 1.583-1.5 1.888-2.7-.92.52-1.89.9-2.95 1.08A5.07 5.07 0 0016.71 2c-2.5 0-4.5 2.04-4.5 4.55 0 .36.04.72.11 1.06-3.75-.19-7.07-1.98-9.29-4.68-.4.68-.62 1.48-.62 2.34 0 1.61.82 3.03 2.08 3.87-.77-.02-1.49-.24-2.12-.6v.06c0 2.24 1.58 4.1 3.68 4.52-.38.1-.78.16-1.19.16-.29 0-.57-.03-.84-.08.57 1.8 2.23 3.1 4.2 3.14-1.54 1.2-3.48 1.92-5.6 1.92-.36 0-.71-.02-1.06-.07 2 1.29 4.36 2.04 6.9 2.04 8.28 0 12.81-6.93 12.81-12.95 0-.2 0-.39-.01-.58.88-.63 1.64-1.42 2.24-2.32z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>

    </div>
  )
}

export default Footer