
export const subtitle = "Usually to note all of the changes I made to the website. Also I note some of my thoughts on these changes. This is to remind of what I did to this site as I have no idea what I did to the site at certain times"

type changeLogListItem = {
    date: Date
    title: string
    description: string
}

export const changelogList: Array<changeLogListItem> = [
    {
        date: new Date(23, 7, 29),
        title: 'Upgrade site to Next 13',
        description: "I haven't worked on the site for a while due to my internship so doing some upgrades would be a good to get back into the swing of things. I also rearranged some of the components so that it makes more sense to me when doing developement."
    }
]