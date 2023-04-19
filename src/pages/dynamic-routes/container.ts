import { IModel } from "./model"

const useContainer = (): IModel => {

    const some_props = "dynamic routes"

    return {
        some_props: some_props
    }
}

export default useContainer