import allMonsters from "../../../lib/json/monsters.json"
export function load({ params }){
    return allMonsters["monsters"].filter(x => x["numberId"].toString() === params.slug)[0]
}