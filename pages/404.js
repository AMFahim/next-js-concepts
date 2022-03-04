import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])
  return (
    <div>
      <h1>Oooops....</h1>
      <p>That page cannot be found.</p>
      <p>Go back to <Link href="/"><a>Home Page</a></Link></p>
    </div>
  );
};

export default NotFound;