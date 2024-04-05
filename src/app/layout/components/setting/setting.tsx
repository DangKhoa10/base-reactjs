import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faGear, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Theme } from "src/assets/styles/color";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { changeScheme } from "src/redux/features/scheme/scheme";
import { changeTheme } from "src/redux/features/theme/theme";

export default function Setting() {
    const [openSetting, setOpenSetting] = useState<boolean>(false);
    const themes = Object.keys(Theme)
    const theme: string = useAppSelector((state) => state.theme.value)
    const dispatch = useAppDispatch()
    const scheme = useAppSelector((state) => state.scheme.value)


    return (
        <div id="setting" className="z-[99999]">
            <div onClick={() => {
                setOpenSetting(false)
            }} className={`${openSetting ? ' opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 z-10 bg-black inset-0 fixed`}>
            </div>
            <div
                className={`${openSetting ? 'translate-x-0' : 'translate-x-full'} z-20 transition-transform duration-300 fixed right-0 top-0 bottom-0`}
            >
                <div
                    className={'absolute top-[35%]  right-full flex justify-center items-center w-[40px] h-[40px] rounded-tl-lg rounded-bl-lg cursor-pointer bg-primary'}
                    onClick={() => {
                        setOpenSetting(!openSetting)
                    }}
                >
                    <FontAwesomeIcon icon={faGear} className="animate-spin" size="lg" style={{ color: "#ffffff", }} />
                </div>
                <div
                    className="w-96 bg-background h-full"
                >
                    <div className="p-5 bg-primary flex justify-between items-center">
                        <div className=" flex items-center">
                            <div className="mr-4">
                                <FontAwesomeIcon icon={faGear} size="lg" style={{ color: "#ffffff", }} />
                            </div>
                            <h3 className="m-0 font-bold text-white text-2xl">Settings</h3>
                        </div>
                        <div className="cursor-pointer"
                            onClick={() => {
                                setOpenSetting(false)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="p-5 ">
                        <div className="mb-8">
                            <h5 className="text-md font-semibold text-primary mb-1">THEME</h5>
                            <div className="flex flex-wrap mx-[-8px]">
                                {themes.map((_theme: string, i: number) => {
                                    return <div key={i} className="w-4/12 px-2 mt-4">
                                        <div className={`${theme === _theme ? "border-primary" : "border-transparent"} cursor-pointer border-2 border-solid w-full h-10 rounded-full bg-slate-100 dark:bg-[#293445] flex items-center justify-center`}
                                            onClick={() => {
                                                dispatch(changeTheme(_theme as "brand" | "teal" | "amber" | "rose" | "purple" | "amber" | "primary"
                                                ))
                                            }}
                                        >
                                            <div className="flex-0 w-3 h-3 mr-2 rounded-full"
                                                style={{ backgroundColor: Theme[_theme]['--primary-color-export'] }}
                                            ></div>
                                            <span className={`${theme === _theme ? "text-gray-800 dark:text-foreground" : "text-secondary dark:text-[#94A3b8]"} capitalize  font-medium leading-5 truncate `}>{_theme}</span>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="mb-8">
                            <h5 className="text-md font-semibold text-primary mb-1">SCHEME</h5>
                            <div className="flex flex-wrap mx-[-8px]">
                                <div className="w-4/12 px-2 mt-4">
                                    <div className={`${(scheme as string) === 'light' ? "border-primary" : "border-transparent"} cursor-pointer border-2 border-solid w-full h-10 rounded-full bg-slate-100 dark:bg-[#293445] flex items-center justify-center`}
                                        onClick={() => {
                                            dispatch(changeScheme('light'))
                                        }}
                                    >
                                        <FontAwesomeIcon className="mr-2 text-secondary dark:text-[#94A3b8]" icon={faSun} size="sm" />
                                        <span className={`${(scheme as string) === 'light' ? "text-gray-800 dark:text-foreground" : "text-secondary dark:text-[#94A3b8]"} capitalize  font-medium leading-5 truncate `}>Light</span>
                                    </div>
                                </div>
                                <div className="w-4/12 px-2 mt-4">
                                    <div className={`${(scheme as string) === 'dark' ? "border-primary" : "border-transparent"} cursor-pointer border-2 border-solid w-full h-10 rounded-full bg-slate-100 dark:bg-[#293445] flex items-center justify-center`}
                                        onClick={() => {
                                            dispatch(changeScheme('dark'))
                                        }}
                                    >
                                        <FontAwesomeIcon className="mr-2 text-secondary dark:text-[#94A3b8]" icon={faMoon} size="sm" />
                                        <span className={`${(scheme as string) === 'dark' ? "text-gray-800 dark:text-foreground" : "text-secondary dark:text-[#94A3b8]"} capitalize  font-medium leading-5 truncate `}>Dark</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h5 className="text-md font-semibold text-primary mb-5">LAYOUT</h5>
                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}