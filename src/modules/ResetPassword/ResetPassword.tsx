import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import useResetPassword from "./useResetPassword"
import Input from "../../components/Input/Input"

const ResetPassword: React.FC = () => {
  const { resetEmail, setResetEmail, handleResetPassword } = useResetPassword()

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset Password
        </h2>
        <p className="mt-6 text-center">Enter email address where you want to send recovery email</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <Button type="button" className="flex w-full justify-center" onClick={handleResetPassword}>Reset</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ResetPassword