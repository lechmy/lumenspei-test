import { Outlet } from "react-router-dom"

const AuthLayout: React.FC = () => {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export default AuthLayout