import Language from "../language/Language";

export default function Toolbar() {
    return <>
        <div className="w-full bg-primary-300 h-full relative">
            <div className='absolute top-4 right-4'>
                <Language />
            </div>
        </div>
    </>
}