import "../styles/tailwind.css";
export default function Heading({ children }) {
  return <h1 className="font-bold pb-3 text-2xl text-center">{children}</h1>;
}
