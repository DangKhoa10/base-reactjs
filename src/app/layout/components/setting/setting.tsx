import { useState } from "react"

export default function Setting() {
    const [openSetting, setOpenSetting] = useState(false);

    return (
        <div id="setting"
            className={`${openSetting ? '' : ''} fixed right-0 top-0 bottom-0`}
        >
            <div
                className={'relative top-[40%] flex justify-center items-center w-[40px] h-[40px] rounded-tl-lg rounded-bl-lg cursor-pointer bg-primary-600'}
                onClick={() => {
                    setOpenSetting(!openSetting)
                }}
            >

            </div>
            <div
            className="w-40 h-full bg-background backdrop:bg-slate-600"
            >

            </div>
        </div >
    )
}