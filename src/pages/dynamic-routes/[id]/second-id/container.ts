import { useRouter } from "next/router"
import { IModel } from "./model"

const useContainer = (): IModel => {

    const router = useRouter()
    return {
        some_props: router.query.second_id!
    }
}

export default useContainer