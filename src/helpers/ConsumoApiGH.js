
export const getApiGH = async (gh) =>{
    let response = await fetch (``);
    let usuarios = await response.json()
    return usuarios
}