import { DecksList } from './DecksList/DecksList'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
