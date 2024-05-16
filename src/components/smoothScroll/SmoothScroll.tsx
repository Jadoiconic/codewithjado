interface SmoothScrollLinkProps {
    to: string;
    children: React.ReactNode;
}
const SmoothScrollLink = ({ to, children }:SmoothScrollLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = document.querySelector(to);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <a href={to} onClick={handleClick} className="text-gray-300 font-bold hover:text-white hover:border-b-2 py-2">
            {children}
        </a>
    );
};

export default SmoothScrollLink;