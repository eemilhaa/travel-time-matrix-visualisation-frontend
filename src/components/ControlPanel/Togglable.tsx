import { useState } from "react"
import Button from "./Button"

const Togglable = ({ prompt, content }: any) => {
  const [showContent, setShowContent] = useState<boolean>(false)

  const handleClick = () => {
    setShowContent(!showContent)
  }
  return (
    <div>
      <Button onClick={handleClick} text={prompt} />
      {showContent && <div>{content}</div>}
    </div>
  )
}

export default Togglable
