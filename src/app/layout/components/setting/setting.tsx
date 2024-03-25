import { useState } from "react"

export default function Setting() {
    const [openSetting, setOpenSetting] = useState(false);

    return (
        <div id="setting"
            className={`${openSetting ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 fixed right-0 top-0 bottom-0`}
        >
            <div
                className={'absolute top-[35%] right-full flex justify-center items-center w-[40px] h-[40px] rounded-tl-lg rounded-bl-lg cursor-pointer bg-primary-600'}
                onClick={() => {
                    setOpenSetting(!openSetting)
                }}
            >
            </div>
            <div className="">

            </div>
            <div
                className="w-40 h-full bg-orange-900 "
            >

            </div>
        </div >
    )
}