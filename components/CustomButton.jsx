import Link from "next/link";
const CustomButton = ({ secondary, children, to, type }) => {
    return (
        <>
            <Link href={to || "#"}>
                <a>
                    {secondary ? (
                        <div>
                            <button
                                type={type}
                                className="border bg-white border-main hover:border-transparent hover:bg-main hover:text-white px-6 py-3 my-8 text-main rounded transition-all"
                            >
                                <h4 className="uppercase font-bold">
                                    {children}
                                </h4>
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button
                                type={type}
                                className="px-6 py-3 my-8 bg-main text-white rounded border border-transparent hover:border-main hover:bg-white hover:text-main transition-all"
                            >
                                <h4 className="uppercase font-bold">
                                    {children}
                                </h4>
                            </button>
                        </div>
                    )}
                </a>
            </Link>
        </>
    );
};

export default CustomButton;
