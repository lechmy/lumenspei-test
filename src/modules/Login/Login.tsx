import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import useLogin from './useLogin'
import Input from '../../components/Input/Input'

const Login: React.FC = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin()

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome
        </h2>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to='/auth/reset-password' className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div>
            <Button type="button" className="flex w-full justify-center" onClick={handleLogin}>Log in</Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont have account?{' '}
          <Link to='/auth/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create one here</Link>
        </p>
      </div>
    </section>
  )
}

export default Login