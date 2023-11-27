import "../styles/tailwind.css";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 flex flex-wrap">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <a href="#">
            <img
              src="images/logo.png"
              alt="One Ring Rentals"
              className="mb-4"
            />
          </a>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo
            eros nibh, et dictum elit tincidunt eget. Pellentesque volutpat quam
            dignissim, convallis elit id, efficitur sem.
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                All rentals
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                List your rental
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Read our FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/2 mb-8">
          <h3 className="text-xl font-semibold mb-4">Popular regions</h3>
          <div className="grid">
            {/* Region 1 */}

            {/* Region 3 */}

            <div className="flex w-full sm:w-1/2 md:w-1/2 mb-4">
              <div className="mb-2">
                <a href="properties-detail.html">
                  <img
                    src="http://placehold.it/50x50"
                    alt=""
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <p>
                <a
                  href="properties-detail.html"
                  className="text-gray-300 hover:text-white"
                >
                  Bay of Belfalas
                </a>
              </p>
            </div>

            <div className="flex w-full sm:w-1/2 md:w-1/2 mb-4">
              <div className="mb-2">
                <a href="properties-detail.html">
                  <img
                    src="http://placehold.it/50x50"
                    alt=""
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <p>
                <a
                  href="properties-detail.html"
                  className="text-gray-300 hover:text-white"
                >
                  The Southwest
                </a>
              </p>
            </div>

            <div className="flex w-full sm:w-1/2 md:w-1/2 mb-4">
              <div className="mb-2">
                <a href="properties-detail.html">
                  <img
                    src="http://placehold.it/50x50"
                    alt=""
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <p>
                <a
                  href="properties-detail.html"
                  className="text-gray-300 hover:text-white"
                >
                  Eriador
                </a>
              </p>
            </div>

            {/* Add more regions as needed */}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-600 mt-8 pt-8">
        <div className="flex justify-between items-center container mx-auto">
          <div>&copy; 2014 One Ring Rentals</div>

          {/* SOCIAL NETWORKS */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fa fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fa fa-rss"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
