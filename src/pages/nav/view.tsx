import { IModel } from "./model";
import Link from "next/link";

const View = (props: IModel) => (
    <div>
        {props.some_props}
        <Link href="/dynamic-routes/id/1">gotoid</Link>
        <button onClick={()=>props.gotohome()}>goto home</button>
    </div>
)

export default View