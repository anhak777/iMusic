export interface PlayList {
  id?: string
  coverImg?: string
  songTitle: string
  artistName: string
  duration: string
  playing?: boolean
}

export interface GenreList {
  genreName: string
  bgColor: string
  gradient: string
  hover: boolean
}

export interface AlbumList {
  coverImg: string
  albumName: string
  artistName: string
  year: number
}
