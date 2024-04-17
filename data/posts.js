import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: require("../assets/photos/postPhotos/post-photo1.jpg"),
    userName: USERS[0].userName,
    profilePhoto: USERS[0].profilePhoto,
    likesCount: 7870,
    commentsCount: 2,
    sharesCount: 368,
    caption: "Road trips are the best medicine.😌 \nWhat are your thoughts?",
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
    postTime: "2h",
  },
  {
    imageUrl: require("../assets/photos/postPhotos/post-photo2.jpg"),
    userName: USERS[2].userName,
    profilePhoto: USERS[2].profilePhoto,
    likesCount: 203005,
    commentsCount: 4,
    sharesCount: 15497,
    caption: "I just love watching sunsets as some relaxing music..😬🏖️",
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
    postTime: "12h",
  },
  {
    imageUrl: require("../assets/photos/postPhotos/post-photo3.jpg"),
    userName: USERS[1].userName,
    profilePhoto: USERS[1].profilePhoto,
    likesCount: 15230,
    commentsCount: 1,
    sharesCount: 549,
    caption: "I found peace in the mountains.🏔️✌🏻",
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
    postTime: "3d",
  },
];
