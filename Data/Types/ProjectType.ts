
export type projectDataType = {
    id: number,
    Name: string,
    Desc: string,
    ShortDesc: string,
    Date: string,
    Skills: string[],
    Thumbnail: string | null,
    GIF: string | null,
    Github: string | null,
    LivePreview ?: string | null
}