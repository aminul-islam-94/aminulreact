import "../styles/tailwind.css";
export default function Header() {
  return (
    <header class="lg:px-20 xl:px-32 mt-3">
      <div class="bg-yellow-500 text-grey-200">
        <div class="container mx-auto py-2">
          <div class="flex items-center justify-between">
            <ul id="top-buttons" class="flex items-center space-x-4">
              <li>
                <a href="https://www.google.com" class="hover:text-gray-300">
                  <i class="fa fa-sign-in"></i> Login
                </a>
              </li>
              <li>
                <a href="https://www.google.com" class="hover:text-gray-300">
                  <i class="fa fa-pencil-square-o"></i> Register
                </a>
              </li>
              <li class="divider"></li>
              <li class="relative group">
                <div class="language-switcher cursor-pointer">
                  <span>
                    <i class="fa fa-globe"></i> English
                  </span>
                  <ul class="hidden absolute bg-white text-black rounded-md p-2 space-y-1 group-hover:block">
                    <li>
                      <a href="https://www.google.com">Deutsch</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Español</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Français</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Português</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white border-b border-gray-300">
        <div class="container mx-auto py-4">
          <div class="flexflex items-center ">
            <a href="index.html" class="nav-logo">
              <img src="images/logo.png" alt="One Ring Rentals" class="w-32" />
            </a>

            <ul class="nav navbar-nav  flex justify-between mb-2">
              <li>
                <a href="https://www.google.com">Find a Rental</a>
              </li>
              <li>
                <a href="https://www.google.com">List your rental</a>
              </li>
              <li>
                <a href="https://www.google.com">Regions</a>
              </li>
              <li>
                <a href="https://www.google.com">Travel Guides</a>
              </li>
              <li>
                <a href="https://www.google.com">About Us</a>
              </li>
              <li>
                <a href="https://www.google.com">Regions</a>
              </li>
            </ul>
          </div>
          <div class="carousel-caption text-center md:text-left  text-white bg-black w-full">
            <div class="caption sfr slider-title text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Breathtaking views
            </div>
            <div class="caption sfl slider-subtitle text-lg md:text-xl lg:text-2xl text-center">
              Relaxation in the Bay of Belfalas
            </div>
            <div class="caption sfl slider-subtitle text-lg md:text-xl lg:text-2xl text-center">
              Learn more
            </div>
          </div>

          <button id="nav-mobile-btn" class="lg:hidden">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
