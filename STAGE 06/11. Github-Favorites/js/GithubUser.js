export class GithubUser{
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`


        // Buscar no endpoint que é o site da api o dados, então (then), transformar em json e posteriormente em forma de objeto
        return fetch(endpoint)
        .then(data => data.json())
        .then(data => ({
            login: data.login,
            name: data.name,
            public_repos: data.public_repos,
            followers: data.followers
        }))
    }
}
