import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const data = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value
        }

        if(data.title.trim() === "" || data.description.trim() === "" || data.dueDate.trim() === "") {
            modal.current.open();
            return;
        }
        
        onSave(data);
    }

    return (
        <>
        <Modal ref={modal} buttonCaption={"Okay"}>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
            <p className='text-stone-600 mb-4'>Please fill in all fields</p>
        </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title"/>
                    <Input ref={description} label="Description" isTextarea/>
                    <Input ref={dueDate} label="Due Date" type="date"/>
                </div>
            </div>
        </>
    )
}