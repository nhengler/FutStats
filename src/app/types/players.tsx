export type Player = {
    id: string
    name: string
    image: string
    position: string
    label: string
    stats: {
        goals: number
        assists: number
        passes: number
        dribbles: number
        bigChances: number
        minutes: number
    }
}