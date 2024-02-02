
const NavBar = () => {
    return (
        <div className="h-[8vh absolute top-0 w-full flex items-center p-2">
            <Logo />
        </div>
    )
}


const Logo = () => {
    return (
        <>
            <svg width="60" height="60" viewBox="0 0 475 475" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="250.698" width="336.003" height="336.003" rx="48" transform="rotate(-48.2552 0 250.698)" fill="#2962FF" />
                <g clip-path="url(#clip0_338_2)">
                    <path d="M337.624 167.933C337.624 191.618 318.382 210.818 294.645 210.818H250.55V125.047H294.645C318.382 125.047 337.624 144.248 337.624 167.933Z" fill="white" stroke="black" stroke-width="15.081" />
                    <path d="M163.475 167.933C163.475 191.618 182.718 210.818 206.454 210.818H250.55V125.047H206.454C182.718 125.047 163.475 144.248 163.475 167.933Z" fill="white" stroke="black" stroke-width="15.081" />
                    <path d="M163.475 253.705C163.475 277.39 182.718 296.591 206.454 296.591H250.55V210.82H206.454C182.718 210.82 163.475 230.02 163.475 253.705Z" fill="white" stroke="black" stroke-width="15.081" />
                    <path d="M163.475 339.475C163.475 363.16 182.995 382.361 206.732 382.361C230.777 382.361 250.55 362.911 250.55 338.918V296.59H206.454C182.718 296.59 163.475 315.79 163.475 339.475Z" fill="white" stroke="black" stroke-width="15.081" />
                    <path d="M250.55 253.705C250.55 277.39 269.792 296.591 293.529 296.591H294.645C318.382 296.591 337.624 277.39 337.624 253.705C337.624 230.02 318.382 210.82 294.645 210.82H293.529C269.792 210.82 250.55 230.02 250.55 253.705Z" fill="white" stroke="black" stroke-width="15.081" />
                </g>
                <defs>
                    <clipPath id="clip0_338_2">
                        <rect width="192.01" height="275.136" fill="white" transform="translate(154.545 120.592)" />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}


export default NavBar