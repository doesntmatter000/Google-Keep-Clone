import React, { useState, useRef } from 'react'
import "./CardTicketList.scss"

type CardTicketListProps = {
    newTicket: boolean
    value: string
    addTicket: (id:string) => void
    changeValueTicket: (id:string, text:string) => void
    id: string
    toggleDeleteTicketState: (id:string) => void
}

export const CardTicketList = ({ newTicket, value, addTicket, changeValueTicket, id, toggleDeleteTicketState }: CardTicketListProps) => {
    const InputRef = useRef<HTMLInputElement | null>(null)
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isInputFocused, setInputFocused] = useState<boolean>(false)
    const [iconsLeft, setIconsLeft] = useState<boolean>(false)
    const [iconsRight, setIconsRight] = useState<boolean>(true)
    const [inputValue, setInputValue] = useState<string>(value)

    const handleEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && newTicket && inputValue.length > 0) addTicket(id)
    }

    const changeValue = (e:any) => {
        setInputValue(e.target.value)
        changeValueTicket(id, e.target.value)
    }  

    const handleMouseEnter = () => {
        !newTicket && setIsHovered(true);
    };

    const handleMouseLeave = () => {
       !newTicket && setIsHovered(false);
    };

    const handleFocus = () => {
        setInputFocused(true);
        setIconsLeft(true)
        InputRef.current?.focus()
    };

    const handleBlur = () => {
        setInputFocused(false);
        InputRef.current?.blur()
    };

    const toggleIconsLeft = () => {
        setIconsLeft(!iconsLeft)
        iconsLeft ? InputRef.current?.blur() : InputRef.current?.focus()
        !newTicket && toggleDeleteTicketState(id)
    }

    const toggleIconsRight = () => {
        (newTicket && inputValue.length > 0) && addTicket(id)
        setIconsRight(!iconsRight)
        iconsRight ? InputRef.current?.blur() : InputRef.current?.focus()
    }

    return (
        <div className="tickets__list">
            <div className={isHovered ? "tickets__list-hover" : "tickets__list-noHover"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => toggleIconsLeft()}
                style={
                    newTicket
                        ? iconsLeft
                            ? { backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMCAwaDE4djE4aC0xOHpoMTh2MThoLTE4eiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0ibTE0LjUzIDQuNTNsLTEuMDYtMS4wNi00LjQ3IDQuNDctNC40Ny00LjQ3LTEuMDYgMS4wNiA0LjQ3IDQuNDctNC40NyA0LjQ3IDEuMDYgMS4wNiA0LjQ3LTQuNDcgNC40NyA0LjQ3IDEuMDYtMS4wNi00LjQ3LTQuNDd6Ii8+Cjwvc3ZnPgo=)" }
                            : { backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMzggMjZoLTEydjEyaC00di0xMmgtMTJ2LTRoMTJ2LTEyaDR2MTJoMTJ2NHoiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K)"}
                        : { display: "block" }}>
            </div>
            <input className="tickets__list-input"
                onFocus={handleFocus} onBlur={handleBlur}
                type="text" maxLength={50}
                ref={InputRef}
                value={inputValue}
                onKeyDown={(e) => handleEnter(e)}
                onChange={(e) => changeValue(e)}
                placeholder="Creează o etichetă nouă" />
            <div className="tickets__list-delete"
                onClick={() => toggleIconsRight()}
                style={
                    newTicket 
                    ? isInputFocused 
                    ? { backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMCAwaDE4djE4aC0xOHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Im02LjYxIDExLjg5bC0zLjExLTMuMTEtMS4wNiAxLjA2IDQuMTcgNC4xNiA4Ljk1LTguOTUtMS4wNi0xLjA1eiIvPgo8L3N2Zz4K)"}
                    : { backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMCAwaDE4djE4aC0xOHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Im02LjYxIDExLjg5bC0zLjExLTMuMTEtMS4wNiAxLjA2IDQuMTcgNC4xNiA4Ljk1LTguOTUtMS4wNi0xLjA1eiIvPgo8L3N2Zz4K)" } 
                    : !iconsRight
                    ? {backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtNiAzNC41djcuNWg3LjVsMjIuMTMtMjIuMTMtNy41LTcuNS0yMi4xMyAyMi4xM3ptMzUuNDEtMjAuNDFjMC43OC0wLjc4IDAuNzgtMi4wNSAwLTIuODNsLTQuNjctNC42N2MtMC43OC0wLjc4LTIuMDUtMC43OC0yLjgzIDBsLTMuNjYgMy42NiA3LjUgNy41IDMuNjYtMy42NnoiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K)"}
                    : { backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMCAwaDE4djE4aC0xOHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Im02LjYxIDExLjg5bC0zLjExLTMuMTEtMS4wNiAxLjA2IDQuMTcgNC4xNiA4Ljk1LTguOTUtMS4wNi0xLjA1eiIvPgo8L3N2Zz4K)"}}>
            </div>
        </div>
    )
}
