import { useState, useEffect } from 'react'

export default function Home() {
  const [ name, setName ] = useState('')
  const [ suggestedName, setSuggestedName ] = useState('')

  const handleSubmission = (e) => {
    e.preventDefault()
    setSuggestedName(name)
  }

  useEffect(() => {
    document.getElementById('suggestion').value = '';
  }, [suggestedName])
  

  return (
    <>
      <img src="/images/chloe_and_camper.jpg" alt="Chloe and the camper on the beach" />
      <h1>Hello!</h1>
      <p>Welcome to our website. We are Caroline and Chloe and we are exploring Europe together.</p>
      <p>What do you think our blog name should be?</p>
      <form onSubmit={handleSubmission}>
        <input id="suggestion" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Type here" required/><br />
        <button type="submit">Submit</button>
      </form>
      { suggestedName && <p>Thank you! Your suggested blog name is <br />{suggestedName}</p> }
    </>
  )
}
