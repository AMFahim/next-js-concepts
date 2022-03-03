import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1>Oooops....</h1>
      <p>That page cannot be found.</p>
      <p>Go back to <Link href="/"><a>Home Page</a></Link></p>
    </div>
  );
};

export default NotFound;