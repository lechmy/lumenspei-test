import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import useNewPassword from "./useNewPassword"

const ResetPassword: React.FC = () => {
  const { newPassword, setNewPassword, repeatedPassword, setRepeatedPassword, handleResetPassword } = useNewPassword()

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          New password
        </h2>
        <p className="mt-6 text-center">Please enter new password and then repeat it</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              New password
            </label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Repeat new password
            </label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
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