type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}

type GeoType = {
    lat: string
    lng: string
}

type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

export type IUuser = {
    id: number
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}

export type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export type AlbumType = {
    userId: number
    id: number
    title: string
}

export type AlbumPhotoType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type PostsType = {
    userId: 1
    id: 1
    title: string
    body: string
}