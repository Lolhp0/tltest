import { useEffect, useState } from 'react';

// export function useSkin(username: string) {
//     const [skinUrl, setSkinUrl] = useState<string | null>(null);

//     useEffect(() => {
//         async function fetchSkin(username: string) {
//             try {
//                 const resp = await fetch(`https://render.crafty.gg/3d/bust/${username}`);
//                 const url = resp.url;
//                 setSkinUrl(url);
//             } catch (err) {
//                 console.error("Error fetching skin:", err);
//                 setSkinUrl(null);
//             }
//         }

//         if (username) {
//             fetchSkin(username);
//         }
//     }, [username]);

//     return skinUrl;
// }
export const useSkin = (username: string) => {
    const [skinUrl, setSkinUrl] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSkin(username: string) {
            try {
                const resp = await fetch(`https://render.crafty.gg/3d/bust/${username}`);
                const url = resp.url;
                setSkinUrl(url);
            } catch (err) {
                console.error("Error fetching skin:", err);
                setSkinUrl(null);
            }
        }

        if (username) {
            fetchSkin(username);
        }
    }, [username]);

    return skinUrl;
}