type AddReviewProps = {
  user: { id: string; name: string } | null
}

function AddReview({ user }: AddReviewProps) {
  return (
    <div className="App">Add Review</div>
  )
}

export default AddReview