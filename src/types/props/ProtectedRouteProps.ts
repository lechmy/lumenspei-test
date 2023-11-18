export interface ProtectedRouteProps {
  children?: React.ReactElement
  isAllowed: boolean
  redirectPath?: string
}
