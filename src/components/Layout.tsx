import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import IssuePage from "../pages/IssuePage"
import RepoPage from "../pages/RepoPage"
import User from "./User"

interface ILayout {
  login: string
}

const Layout: React.FC<ILayout> = ({ login }) => {
  return (
    <div className="row userpage">
      <div className="col-12 col-lg-3 stickybox">
        <User login={login} />
      </div>
      <div className="col-12 col-lg-9">
        <Routes>
          <Route index path="/" element={<Home login={login} />} />
          <Route path="/:repo" element={<RepoPage login={login} />} />
          <Route path="/:repo/:num" element={<IssuePage login={login} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout