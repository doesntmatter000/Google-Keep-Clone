import { mainStatePopupToggle } from "../../store/Slices/popupSideNavbarSlice"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { CloseButton } from "../UiComponents/CloseButton"
import "./PopuSideNavbar.scss"
import { useState } from "react"
import { CardTicketList } from "./CardTicketList/CardTicketList"
import { DeleteTicket } from "./DeleteTicket/DeleteTicket"
import { useLocalStorage } from "./DeleteTicket/useLocalStorage"

type deleteTicketState = {
  state: boolean
  id: string
}

type ticket = {
  value: string
  newTicket: boolean
  id:string
}



export const PopuSideNavbar = () => {
  const [valuetickets, setValueTickets] = useLocalStorage("tickets", [{value: "", newTicket: true, id: crypto.randomUUID()}])
  
  
  const [deleteTicketState, setDeleteTicketState] = useState<deleteTicketState>({state: false, id: ""})

  const toggleDeleteTicketState = (id:string) => {
    deleteTicketState.state === false ? setDeleteTicketState({state: true, id: id}) : setDeleteTicketState({state: false, id: ""})
  }

  const deleteTicket = (id: string) => {
    setValueTickets(valuetickets.filter((ticket:ticket) => ticket.id !== id))
  }

  const addTicket = (id: string) => {
    valuetickets.forEach((item:ticket) => {
      if (item.id === id) item.newTicket = false
    })
    setValueTickets([{ value: "", newTicket: true, id: crypto.randomUUID() }, ...valuetickets])
  }

  const changeValueTicket = (id: string, text: string) => {
    valuetickets.forEach((item:ticket) => {
      if (item.id === id) item.value = text
    })


    setValueTickets([...valuetickets])
  }

  const popupState = useAppSelector((state) => state.popupSideNavbarSlice.statePopup)
  const dispatch = useAppDispatch()
  return (
    <>
      {popupState && <div onClick={() => dispatch(mainStatePopupToggle(!popupState))} className="tickets">
        <DeleteTicket toggleDeleteTicketState={toggleDeleteTicketState} state={deleteTicketState.state} deleteTicket={deleteTicket} id={deleteTicketState.id}/>
        <div className="tickets__container" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
          <div className="tickets__innerContainer">
            <h2>Editeaza etichetele</h2>
            {valuetickets.map((item:ticket) => (<CardTicketList toggleDeleteTicketState={toggleDeleteTicketState} id={item.id} newTicket={item.newTicket} key={item.id} addTicket={addTicket} changeValueTicket={changeValueTicket} value={item.value} />))}
          </div>

          <div className="tickets__CloseButton">
            <div onClick={() => dispatch(mainStatePopupToggle(!popupState))}>
              <CloseButton text="Terminate" />
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}
