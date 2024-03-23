import Setting from "./components/setting/setting";
import Classic from "./layouts/classic/classic";

export default function Layout() {
    const layout: 'classic' | 'classy' | 'dense' = 'classic';
    return (
        <>
            {layout === 'classic' && <Classic />}
            <Setting />
        </>
    )
}