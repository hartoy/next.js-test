export type PaginationType = {
    "totalPages": number,
    "totalElements": number,
    "page": number,
    "size": number,
    "first": number,
    "last": number,
}

export type PageType<T> = {
    "content": T[],
    "pagination": PaginationType,
}