export interface Product {
    id?: number
    name: string
    price: number
}

// export interface Game {
//     title: string;
//     description: string;
//     avaliation: number;
//     plataform: string[];
//     showDetails: (title: string, description: string) => void;
// }

// const NFS: Game = {
//     title: "Need for Speed",
//     description: "Car games",
//     avaliation: 7.7,
//     plataform: ["PS3", "PS4"],
//     showDetails: (title: string, description: string) => {
//         console.log(`Esse é o ${title}`)
//     }
// }

// NFS.showDetails(NFS.title, NFS.description);