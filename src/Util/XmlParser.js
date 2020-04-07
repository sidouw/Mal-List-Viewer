

const parseAnimeXML = AnimeList =>{
    const AnimeArray = []
    for (const AnimeNode of AnimeList) {
        const Anime = {
            id:AnimeNode.children[0].textContent,
            title:AnimeNode.children[1].textContent,
            episodes:AnimeNode.children[3].textContent,
            watched:AnimeNode.children[5].textContent,
            score:AnimeNode.children[9].textContent,
            status:AnimeNode.children[12].textContent,
        }
        AnimeArray.push(Anime)        
    }
    return AnimeArray
}



const parseMangaXML = MangaList =>{
    const MangaArray = []
    for (const MangaNode of MangaList) {
        const Manga = {
            id:MangaNode.children[0].textContent,
            title:MangaNode.children[1].textContent,
            volumes:MangaNode.children[2].textContent,
            chapters:MangaNode.children[3].textContent,
            readvolumes:MangaNode.children[5].textContent,
            readchapters:MangaNode.children[6].textContent,
            score:MangaNode.children[10].textContent,
            status:MangaNode.children[12].textContent,
        }
        MangaArray.push(Manga)        
    }
    return MangaArray
}


export {parseAnimeXML,parseMangaXML}