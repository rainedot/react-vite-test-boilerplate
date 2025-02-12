import {Link} from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Index page</h1>

      <Link to="/any">Go to 404</Link>
    </div>
  )
}