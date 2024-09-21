import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es/v1/',
    headers: {
        'x-auth-skip': true,
    },
})


type Author = {
    id: string
    name: string
}
export type Deck = {
    author: Author
    cardsCount: number
    cover: string
    created: string
    id: string
    userId: string
    name: string
    updated: string
    isFavorite: boolean
    isPrivate: boolean
}
type Pagination = {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
}
type FetchDecksResponse = {
    items: Deck[]
    maxCardsCount: number
    pagination: Pagination
}
export type UpdateDeckParams = {
    id: string
    name: string
}




export const decksApi = {
    fetchDecks() {
        return instance.get<FetchDecksResponse>(`decks`)
    },
    addDeck(name: string) {
        return instance.post<Deck>(`decks`, {name})
    },
    updateDeck({id, name}: UpdateDeckParams) {
        console.log(`Updating deck with id ${id} and name ${name}`);
        return instance.patch<Deck>(`decks/${id}`, {name})
    },
    deleteDeck(id: string){
        return instance.delete<Deck>(`decks/${id}`)
    }
}


