import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import useLogin from "./useRegister"
import Input from "../../components/Input/Input"
import useRegister from "./useRegister"

const Register: React.FC = () => {
  const { 
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail, 
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    handleRegister,
 } = useRegister()

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
        <p className="mt-6">Please fill in your personal informations</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="first-name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                required
              />
            </div>
          </div>
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
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Repeat Password
            </label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Button type="button" className="flex w-full justify-center" onClick={handleRegister}>Register</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register