import { IModel } from "./model"

const useContainer = (): IModel => {

    const some_props = "nav nested"

    return {
        some_props: some_props
    }
}

export default useContainer