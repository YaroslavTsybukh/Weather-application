
export const useHTTP = () => {
    const request = async(url: string) => {
        try{
            const response = await fetch(url)
            const result = await response.json()
            // console.log(result)
            return result
        }catch(e){
            if(e instanceof Error){
                console.log(e)
            }
        }
    }
    return request
}