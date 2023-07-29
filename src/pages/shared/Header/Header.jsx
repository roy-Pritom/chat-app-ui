
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-[#69235B]">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl font-[500]">9:41</a>
            </div>
            <div className="flex-none">
                <ul className="flex gap-2">
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.666687H15C14.4477 0.666687 14 1.1144 14 1.66669V10.3334C14 10.8856 14.4477 11.3334 15 11.3334H16C16.5523 11.3334 17 10.8856 17 10.3334V1.66669C17 1.1144 16.5523 0.666687 16 0.666687ZM10.333 3H11.333C11.8853 3 12.333 3.44772 12.333 4V10.3333C12.333 10.8856 11.8853 11.3333 11.333 11.3333H10.333C9.78072 11.3333 9.33301 10.8856 9.33301 10.3333V4C9.33301 3.44772 9.78072 3 10.333 3ZM6.66699 5.33337H5.66699C5.11471 5.33337 4.66699 5.78109 4.66699 6.33337V10.3334C4.66699 10.8857 5.11471 11.3334 5.66699 11.3334H6.66699C7.21928 11.3334 7.66699 10.8857 7.66699 10.3334V6.33337C7.66699 5.78109 7.21928 5.33337 6.66699 5.33337ZM2 7.33335H1C0.447715 7.33335 0 7.78107 0 8.33335V10.3334C0 10.8856 0.447715 11.3334 1 11.3334H2C2.55228 11.3334 3 10.8856 3 10.3334V8.33335C3 7.78107 2.55228 7.33335 2 7.33335Z" fill="black" />
                            </svg>
                        </a>
                    </li>
                    <li><a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66707 2.61504C9.8918 2.61514 12.0315 3.46925 13.6438 5.00084C13.7652 5.11909 13.9593 5.1176 14.0789 4.9975L15.2395 3.82717C15.3 3.76626 15.3338 3.68375 15.3333 3.5979C15.3328 3.51205 15.2981 3.42994 15.2368 3.36974C11.0049 -0.682491 4.32857 -0.682491 0.0966565 3.36974C0.0353544 3.4299 0.000572274 3.51198 6.99859e-06 3.59783C-0.000558277 3.68368 0.0331399 3.76621 0.0936446 3.82717L1.25459 4.9975C1.37409 5.11778 1.56831 5.11927 1.68965 5.00084C3.30221 3.46915 5.44212 2.61504 7.66707 2.61504ZM9.89504 9.21569C9.95704 9.1549 9.99118 9.07123 9.98941 8.98446C9.98764 8.89768 9.9501 8.81548 9.88567 8.75726C8.60501 7.67499 6.72937 7.67499 5.44871 8.75726C5.38423 8.81543 5.34663 8.8976 5.3448 8.98438C5.34296 9.07116 5.37704 9.15485 5.439 9.21569L7.44464 11.2377C7.50342 11.2971 7.58356 11.3306 7.66719 11.3306C7.75081 11.3306 7.83096 11.2971 7.88974 11.2377L9.89504 9.21569ZM10.9742 7.69628C10.0681 6.87651 8.88942 6.42255 7.66707 6.42263C6.44553 6.42313 5.26774 6.87705 4.36227 7.69628C4.23972 7.81263 4.04667 7.8101 3.92721 7.6906L2.76827 6.52027C2.70709 6.45897 2.6731 6.3757 2.67392 6.28914C2.67474 6.20257 2.7103 6.11996 2.77262 6.05983C5.53178 3.49542 9.8047 3.49542 12.5639 6.05983C12.6261 6.11996 12.6617 6.20253 12.6626 6.28907C12.6635 6.3756 12.6296 6.45888 12.5685 6.52027L11.4093 7.6906C11.2898 7.8101 11.0968 7.81263 10.9742 7.69628Z" fill="black" />
                        </svg>
                    </a></li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="11" viewBox="0 0 25 11" fill="none">
                                <path opacity="0.4" d="M23.333 4V8C24.1377 7.66122 24.661 6.87313 24.661 6C24.661 5.12687 24.1377 4.33878 23.333 4Z" fill="black" />
                                <rect opacity="0.35" x="0.5" y="0.5" width="21" height="10" rx="2.16667" stroke="black" />
                                <rect x="2" y="2" width="18" height="7" rx="1.33333" fill="black" />
                            </svg>
                        </a>
                    </li>
                    <li className='hidden'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Header;