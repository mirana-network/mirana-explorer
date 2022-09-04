import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { FaCheck, FaCopy, FaClipboard, FaClipboardCheck } from "react-icons/fa"
import { BiCopy, BiCheckCircle } from "react-icons/bi"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export default (props) => {

    const [justCopied, setJustCopied] = useState(false)

    // useEffect(() => {
    //     document.getElementById('coins').animate([
    //         // keyframes
    //         { transform: 'rotate(0.5turn)'}
    //       ], {
    //         // timing options
    //         duration: 300
    //       });
    // }, [justCopied])

    const handleOnClick = (e) => {
        setJustCopied(true)
        navigator.clipboard.writeText(props.text)
        setTimeout(() => {
            setJustCopied(false)
        }, 1000)
    }

    if (justCopied) {
        return <OverlayTrigger key="copied" overlay={<Tooltip contentStyle={{ backgroundColor: '#ff0000' }} id="tooltip-copied">copied</Tooltip>}><span><FaCheck className="mx-1 copy-symbol-success" /></span></OverlayTrigger>
    } else {
        return <OverlayTrigger key="copy-cb" overlay={<Tooltip contentStyle={{ backgroundColor: '#ff0000' }} id="tooltip-copy-cb">copy to clipboard</Tooltip>}><span><BiCopy className="fa ms-1 copy-symbol" onClick={handleOnClick} /></span></OverlayTrigger>
    }
}