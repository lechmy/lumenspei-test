import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full px-2 sm:w-3/4 md:w-1/2 m-auto">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout