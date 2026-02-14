const entriesMap = [
    {
        id: "photography",
        url: "/photography",
        subEntries: [
            {
                id: "photography_dailies",
                url: "/photography?dailies",
            },
            {
                id: "photography_favorites",
                url: "/photography?favorites",
            },
        ],
    },
    {
        id: "music",
        url: "/music",
        subEntries: [
            {
                id: "music_tracks",
                url: "/music?track",
            },
            {
                id: "music_albums",
                url: "/music?album",
            },
        ],
    },
    {
        id: "blog",
        url: "/blog",
        subEntries: [
            {
                id: "blog_lifestyle",
                url: "/blog?lifestyle",
            },
            {
                id: "blog_philosophy",
                url: "/blog?philosophy",
            },
            {
                id: "blog_photography",
                url: "/blog?photography",
            },
            {
                id: "blog_technology",
                url: "/blog?technology",
            },
        ],
    },
];

export default entriesMap;
