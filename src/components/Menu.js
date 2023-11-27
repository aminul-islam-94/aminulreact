import "../styles/tailwind.css";
import Heading from "./Heading";
export default function Menu() {
  //console.log("[HomePage] rendering");
  return (
    <>
      <Heading>FEATURED PROPERTIES</Heading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mr-14 sm:ml-12">
        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/760x670"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/760x670"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/760x670"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/760x670"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/760x670"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/760x670"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </li>
      </ul>

      <Heading>POPULAR REGION</Heading>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mr-20 sm:ml-20">
        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/194x194"
              alt=""
              className="w-full h-auto"
            />
            <h3 className="ml-16">Rhovanion</h3>
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/194x194"
              alt=""
              className="w-full h-auto"
            />
            <h3 className="ml-16">Eriador</h3>
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/194x194"
              alt=""
              className="w-full h-auto"
            />
            <h3 className="ml-16">The Southwest</h3>
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/194x194"
              alt=""
              className="w-full h-auto"
            />
            <h3 className="ml-16">Mardor</h3>
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/194x194"
              alt=""
              className="w-full h-auto"
            />
            <h3 className="ml-16">Armor</h3>
          </a>
        </li>

        <li className="mb-2">
          <a href="https://www.google.com">
            <img
              src="http://placehold.it/194x194"
              alt=""
              className="w-full h-auto"
            />
            <h3 className="ml-16">Eriador</h3>
          </a>
        </li>
      </ul>
    </>
  );
}
