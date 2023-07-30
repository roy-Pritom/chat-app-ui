import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { login } = useContext(authContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('successfully login');
            form.reset();

        })
        .catch(error => {
            setError(error.message)

        })

    }
    return (
        <div className="">
            <Link to='/'>
                <button className="md:mt-8 mt-6 ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#000E08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </Link>
            <div className="md:mt-10 mt-7 md:px-11 px-8">
                <h2 className="text-[#69235B] font-bold md:text-5xl text-xl text-center mb-7">Log in to Mokx</h2>
                <p className="text-[#69235B] md:text-xl text-sm font-light text-center">Welcome back! Sign in using your social <br /> account or email to continue us</p>

                {/*  */}
                <div className="flex gap-5 my-9 justify-center">
                    <button className="btn btn-circle btn-outline border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" fill="none">
                            <path d="M35.4287 17.6836C35.4287 11.0562 30.0561 5.68359 23.4287 5.68359C16.8013 5.68359 11.4287 11.0562 11.4287 17.6836C11.4287 23.6731 15.8169 28.6376 21.5537 29.5378V21.1523H18.5068V17.6836H21.5537V15.0399C21.5537 12.0323 23.3452 10.3711 26.0863 10.3711C27.3992 10.3711 28.7725 10.6055 28.7725 10.6055V13.5586H27.2593C25.7686 13.5586 25.3037 14.4836 25.3037 15.4326V17.6836H28.6318L28.0998 21.1523H25.3037V29.5378C31.0405 28.6376 35.4287 23.6731 35.4287 17.6836Z" fill="#1877F2" />
                            <path d="M28.0998 21.1523L28.6318 17.6836H25.3037V15.4326C25.3037 14.4836 25.7686 13.5586 27.2593 13.5586H28.7725V10.6055C28.7725 10.6055 27.3992 10.3711 26.0863 10.3711C23.3452 10.3711 21.5537 12.0323 21.5537 15.0398V17.6836H18.5068V21.1523H21.5537V29.5378C22.174 29.635 22.8009 29.6838 23.4287 29.6836C24.0666 29.6836 24.6928 29.6337 25.3037 29.5378V21.1523H28.0998Z" fill="white" />
                        </svg>
                    </button>
                    <button className="btn btn-circle btn-outline border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" fill="none">
                            <path d="M34.5649 18.4852C34.5659 17.6961 34.4992 16.9085 34.3655 16.1309H23.4463V20.5902H29.7003C29.5724 21.3024 29.3015 21.9814 28.904 22.5861C28.5066 23.1908 27.9908 23.7088 27.3878 24.1088V27.0035H31.1203C33.3058 24.9885 34.5649 22.0086 34.5649 18.4852Z" fill="#4285F4" />
                            <path d="M23.4462 29.8001C26.5708 29.8001 29.2017 28.7741 31.1202 27.0051L27.3878 24.1105C26.3489 24.8148 25.0109 25.2169 23.4462 25.2169C20.4261 25.2169 17.8628 23.181 16.9461 20.4375H13.1011V23.4206C14.0648 25.3383 15.5425 26.9503 17.3693 28.0768C19.1961 29.2034 21.3 29.8 23.4462 29.8001Z" fill="#34A853" />
                            <path d="M16.9461 20.4386C16.4615 19.0009 16.4615 17.4441 16.9461 16.0065V13.0234H13.1011C12.2904 14.6366 11.8682 16.4171 11.8682 18.2225C11.8682 20.028 12.2904 21.8084 13.1011 23.4216L16.9461 20.4386Z" fill="#FBBC04" />
                            <path d="M23.4465 11.2265C25.0977 11.1995 26.6932 11.8234 27.8881 12.9633L31.1928 9.65859C29.0973 7.69036 26.3212 6.60976 23.4465 6.64334C21.3003 6.64344 19.1963 7.24004 17.3695 8.36656C15.5428 9.49307 14.065 11.1051 13.1013 13.0228L16.9464 16.0059C17.863 13.2624 20.4264 11.2265 23.4465 11.2265Z" fill="#EA4335" />
                        </svg>
                    </button>
                    <button className="btn btn-circle btn-outline border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" fill="none">
                            <path d="M32.6841 24.3869C32.3211 25.2254 31.8915 25.9972 31.3938 26.7068C30.7153 27.6742 30.1597 28.3438 29.7316 28.7157C29.0679 29.326 28.3568 29.6386 27.5954 29.6564C27.0487 29.6564 26.3895 29.5008 25.6221 29.1853C24.8522 28.8712 24.1446 28.7156 23.4977 28.7156C22.8192 28.7156 22.0915 28.8712 21.3132 29.1853C20.5336 29.5008 19.9057 29.6653 19.4255 29.6815C18.6953 29.7127 17.9675 29.3912 17.241 28.7156C16.7773 28.3112 16.1973 27.6179 15.5025 26.6357C14.7571 25.5868 14.1442 24.3706 13.6641 22.984C13.1499 21.4863 12.8921 20.0359 12.8921 18.6318C12.8921 17.0234 13.2396 15.6362 13.9358 14.4737C14.4829 13.54 15.2107 12.8034 16.1216 12.2627C17.0325 11.722 18.0168 11.4464 19.0768 11.4288C19.6568 11.4288 20.4173 11.6082 21.3625 11.9608C22.305 12.3145 22.9102 12.4939 23.1755 12.4939C23.3738 12.4939 24.0461 12.2842 25.1858 11.866C26.2636 11.4781 27.1731 11.3175 27.9183 11.3808C29.9375 11.5437 31.4545 12.3397 32.4634 13.7737C30.6575 14.8679 29.7642 16.4005 29.7819 18.3665C29.7982 19.8978 30.3538 21.1722 31.4456 22.184C31.9404 22.6536 32.493 23.0166 33.1078 23.2744C32.9745 23.661 32.8337 24.0314 32.6841 24.3869V24.3869ZM28.0531 6.16374C28.0531 7.364 27.6146 8.4847 26.7406 9.52201C25.6858 10.7552 24.41 11.4677 23.0265 11.3553C23.0079 11.2044 22.9986 11.0525 22.9986 10.9005C22.9986 9.74822 23.5002 8.51506 24.391 7.50681C24.8357 6.9963 25.4014 6.57183 26.0873 6.23322C26.7717 5.89966 27.4191 5.71519 28.0279 5.68359C28.0457 5.84405 28.0531 6.00452 28.0531 6.16372V6.16374Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <div className="divider md:w-[70%] md:mx-auto text-[#69235B] md:text-lg text-sm font-thin">OR</div>
                <div className="md:w-1/2 mx-auto">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Your email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="mt-10">
                            <input type="submit" className="btn bg-[#FBDC94] text-[#EDA0A8] md:text-2xl text-xl font-medium rounded-md  md:w-full w-[300px] border-none capitalize" value="Login" />
                        </div>

                    </form>
                    <p className="text-[#FBBC04] font-normal text-xl text-center mt-6 md:mb-8 mb-6"><Link to='/login/chat'>Forgot Password</Link>?</p>
                </div>
            </div>
        </div>
    );
};

export default Login;