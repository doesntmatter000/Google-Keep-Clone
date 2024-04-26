import "./CloseButton.scss"

type CloseButtonProps = {
    text: string
    colorText?: string
    fontWeight?: string
}

export const CloseButton = ({text, colorText, fontWeight}:CloseButtonProps) => {
  return (
    <div className='CloseButton' style={{color: `${colorText}`, fontWeight: `${fontWeight}`}}>{text}</div>
  )
}

