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

type FetchDecksResponce = {
    items: Deck[]
    maxCardsCount: number
    pagination: Pagination
}

export const decksApi = {
    fetchDecks() {
        return instance.get<FetchDecksResponce>(`decks`)
    }
}
