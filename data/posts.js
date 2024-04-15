import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: require("../assets/photos/postPhotos/post-photo1.jpg"),
    userName: USERS[0].userName,
    profilePhoto: USERS[0].profilePhoto,
    likesCount: 7870,
    commentsCount: 2,
    sharesCount: 368,
    caption:
      "Road trips are the best medicine.😌 What are your thoughts?\n.\n.\n.\n.\n.\n.\n.\n#mountains #roadtrip #travel",
    comments: [
      {
        username: "indranil_kumar_",
        comment: "Wow! 😍",
      },
      {
        username: "randomguy",
        comment: "Where's this place? 🤩",
      },
    ],
  },
  {
    imageUrl: require("../assets/photos/postPhotos/post-photo2.jpg"),
    userName: USERS[2].userName,
    profilePhoto: USERS[2].profilePhoto,
    likesCount: 203005,
    commentsCount: 4,
    sharesCount: 15497,
    caption:
      "I just love watching sunsets.😬🏖️\n\n\n\n.\n.\n.\n#sunset #beach #travel",
    comments: [
      {
        username: "indranil_kumar_",
        comment: "Wow! 😍",
      },
      {
        username: "randomguy",
        comment: "Where's this place? 🤩",
      },
      {
        username: "randomguy",
        comment: "Where's this place? 🤩",
      },
      {
        username: "randomguy",
        comment: "Where's this place? 🤩",
      },
    ],
  },
  {
    imageUrl: require("../assets/photos/postPhotos/post-photo3.jpg"),
    userName: USERS[1].userName,
    profilePhoto: USERS[1].profilePhoto,
    likesCount: 15230,
    commentsCount: 1,
    sharesCount: 549,
    caption:
      "I found peace in the mountains.🏔️✌🏻\n\n\n\n\n\n.\n.\n.\n#mountains #roadtrip #travel",
    comments: [
      {
        username: "indrani_kumar_",
        comment: "Beautiful!!! 😍",
      },
      {
        username: "randomguy",
        comment: "Where's this place? 🤩",
      },
    ],
  },
];
