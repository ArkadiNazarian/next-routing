import { IModel } from "./model";

const View = (props: IModel) => (
    <div>
        {props.some_props}
    </div>
)

export default View