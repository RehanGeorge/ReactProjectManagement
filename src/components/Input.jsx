import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            data() {
                return inputRef.current.value;
            }
        }
    })

    const classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isTextarea ? <textarea className={classes} {...props} ref={inputRef} /> : <input className={classes} {...props} ref={inputRef} />}
        </p>
    )
}
);

export default Input;