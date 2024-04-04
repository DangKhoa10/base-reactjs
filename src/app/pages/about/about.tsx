import { useAppDispatch, useAppSelector } from "src/hooks"
import { decrement, increment } from "src/redux/features/counter/counter"

export function About() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return <>
        <h1>About</h1>
        <div>
            <div className="mt-5 ">
                <button
                className="p-2 m-2 rounded-lg bg-primary text-white"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className="text-red-500 text-2xl font-medium">{count}</span>
                <button
                                className="p-2 m-2 rounded-lg bg-primary text-white"

                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    </>
}