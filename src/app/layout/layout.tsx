import { useAppSelector } from "src/hooks";
import Setting from "./components/setting/setting";
import Classic from "./layouts/classic/classic";


export default function Layout() {
    const layout = useAppSelector(state => state.layout.value)
    return (
        <>
            {layout as string === 'classic' && <Classic />}
            <Setting />
        </>
    )
}