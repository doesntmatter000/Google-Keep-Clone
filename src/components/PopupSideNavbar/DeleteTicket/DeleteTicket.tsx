import "./DeleteTicket.scss"
import { CloseButton } from '../../UiComponents/CloseButton'

type DeleteTicketProps = {
    toggleDeleteTicketState: (id: string) => void
    state: boolean
    deleteTicket: (id: string) => void
    id: string
}

export const DeleteTicket = ({ toggleDeleteTicketState, state, deleteTicket, id }: DeleteTicketProps) => {
    return (
        <div className="deleteTicket" onClick={(e) => e.stopPropagation()} style={state ? { display: "block" } : { display: "none" }}>
            <div className="deleteTicket__container" onClick={() => toggleDeleteTicketState("undefined")}>
                <div className="deleteTicket__content" onClick={(e) => e.stopPropagation()}>
                    Această etichetă va fi ștearsă și eliminată din toate notele Keep. Notele nu vor fi șterse.
                    <div className="deleteTickets__buttons">
                        <label onClick={() => toggleDeleteTicketState("undefined")}>
                            <CloseButton text="Anulează" fontWeight="bold" />
                        </label>
                        <label onClick={() => {
                            toggleDeleteTicketState("undefined")
                            deleteTicket(id)
                        }}>
                            <CloseButton text="Șterge" colorText="blue" fontWeight="bold" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
