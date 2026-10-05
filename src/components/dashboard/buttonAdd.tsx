import { IoMdAdd } from "react-icons/io";

export default function ButtonAdd() {
    return (
        <button
            className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-primary text-on-primary rounded-full shadow-[0_8px_30px_rgba(52,211,153,0.4)] flex items-center justify-center hover:scale-110 transition-transform z-50">
            <span className="material-symbols-outlined"><IoMdAdd /></span>
        </button>
    )
}