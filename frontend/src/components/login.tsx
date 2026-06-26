export interface LoginFormData {
  name: string
  id: string
}

type LoginProps = {
  login: (data: LoginFormData) => void
}

function Login({ login }: LoginProps) {
  return (
    <div className="App">Login</div>
  )
}

export default Login