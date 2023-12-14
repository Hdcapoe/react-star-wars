import { useEffect } from "react";

export function GetAllStarships(setApiData) {

    useEffect(() => {
        async function getApiData() {
            try {
                let response = await fetch('https://swapi.dev/api/starships/?format=json')
                let data =  await response.json()
                setApiData(data.results)
                console.log('all starships array:')
                console.log(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getApiData();
    }, [])
}