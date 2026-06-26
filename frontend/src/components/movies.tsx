type MovieProps = {
  user: { id: string; name: string } | null
}

function Movie({ user }: MovieProps) {
  return (
    <div className="App">Movie</div>
  )
}

export default Movie