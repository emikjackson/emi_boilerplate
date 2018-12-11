
export function getNavButtons() {
    let buttons = [
        {
            name: "About",
            link: "https://www.google.com",
            isImage: false,
        },
        {
            name: "SQUARES",
            link: "https://www.google.com", // TODO: Hook this up to the squares page!
            isImage: false,
        },
        {
            name: "Profile pic",
            link: "https://www.google.com",
            isImage: true,
            isProfilePic: true,
            src: "profile_pic.png",
        },
        {
            name: "Google bell",
            link: "https://www.google.com",
            isImage: true,
            isProfilePic: false,
            src: "notification-google.svg",
        },
        {
            name: "Google Squares",
            link: "https://www.google.com",
            isImage: true,
            isProfilePic: false,
            src: "squares-google.svg",
        },
        {
            name: "Images",
            link: "https://www.google.com",
            isImage: false,
        },
        {
            name: "Gmail",
            link: "https://www.google.com",
            isImage: false,
        },
    ]
    return buttons;
}

export function getFooterButtons() {
    let buttons = [
        {
            name: "Advertising",
            link: "https://www.google.com",
        },
        {
            name: "Business",
            link: "https://www.google.com",
        },
        {
            name: "Privacy",
            link: "https://www.google.com",
        },
        {
            name: "Terms",
            link: "https://www.google.com",
        },
        {
            name: "Settings",
            link: "https://www.google.com",
        },
    ]
    return buttons;
}