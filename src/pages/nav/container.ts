import { useRouter } from "next/router"
import { IModel } from "./model"

const useContainer = (): IModel => {

    const some_props = "useContainer"
    const router = useRouter();

    const gotohome = () => {
        router.push("/")
    }

    return {
        some_props: some_props,
        gotohome
    }
}

export default useContainer