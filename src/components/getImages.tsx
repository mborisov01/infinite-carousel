import { useState } from "react"

export const getImages = {
    0: {
        imgUrl: "https://picsum.photos/id/237/200/300",
        title: "Text 1"
    },

    1: {
        imgUrl: "https://picsum.photos/id/238/200/300",
        title: "Text 2"
    },

    2: {
        imgUrl: "https://picsum.photos/id/239/200/300",
        title: "Text 3"
    },

    3: {
        imgUrl: "https://picsum.photos/id/240/200/300",
        title: "Text 4"
    },

    4: {
        imgUrl: "https://picsum.photos/id/241/200/300",
        title: "Text 5"
    },

    5: {
        imgUrl: "https://picsum.photos/id/42/200/300",
        title: "Text 6"
    },

    6: {
        imgUrl: "https://picsum.photos/id/243/200/300",
        title: "Text 7",
    },

   
}


// async function getImage(url: string) {
//     try {
//         const response = await fetch(url)
//         if (!response.ok) {
//             throw new Error(response.status.toString())
//         }
//         const result = await response.json()
//         return result
//     } catch (error) { 
//         if (error instanceof Error) {
//             console.log(error.message);
//         } else {
//             console.log(String(error));
//         }
//         return null
//     }
// }