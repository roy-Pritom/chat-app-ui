import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Register = () => {
    const { cerateUser, logOut } = useContext(authContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password.length < 6) {
            setError('Password should be 6 character');
            return;
        }
        else if(password!=confirmPassword)
        {
            // return setError('Password should be same')
             
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Password should be same!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
  return;
        }
        cerateUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'success',
                    text: 'successfully register please login',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                setSuccess('Successfully register');
                form.reset();
                logOut();
                navigate('/login/login')

            })
            .catch(error => {
                setError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            })

    }

    return (
        <div className="">
            <Link to='/'>
                <button className="md:mt-8 mt-6 ml-5" id="title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#000E08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <ReactTooltip anchorId="title" place="bottom" content={'Back'}></ReactTooltip>

            </Link>
            <div className="md:mt-10 mt-7 md:px-11 px-8">
                <img src="https://s3-alpha-sig.figma.com/img/ecbb/ec0e/c1aaa1193fbc7dd453b99a0d3d826f32?Expires=1691366400&Signature=Yz-cXEmbMIIZ5c75k638qbBgXtLioveZR54dFhBqUF~r5PpG1lAMtjf1PzFkbC1Xlv7UHUO9366njnIBdykPNnV9pBDyNOCk04dCAHHLSM5pVf4J8Ye6yA7WjcxIqw9oxC9s85Dy8FxUB8blAjkY2tmvr-StnCxIWjwDrK2zNvPVNryXzN9X2pJu1gVb0VgcPKhGNDG2FGhsU0thEbwBxYzXaEXwmjj0R-p2bqCckSE8w0UTcPcL7pwwf62utt89~aG1tuSHVzMHb0ByZ4R31ZRXtkAtImsA6V8OpbKUA6LGckys1cSNhxpMEshUFRnq6WIx1FBqFlsdk6COXOuBmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-40 md:h-36 w-[72px] h-[64px] mx-auto" alt="" />
                <h2 className="text-[#69235B] font-bold md:text-5xl text-xl text-center mb-7">Sign up with Email</h2>
                <p className="text-[#69235B] md:text-xl text-sm font-light text-center">Welcome back! Sign in using your social <br /> account or email to continue us</p>



                <div className="md:w-1/2 mx-auto md:mt-10 mt-6">
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Your name</span>
                            </label>
                            <input type="text" placeholder="name" required name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Your email</span>
                            </label>
                            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Confirm Password</span>
                            </label>
                            <input type="password" required name="confirmPassword" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="mt-10">
                            <input type="submit" className="btn bg-[#FBDC94] text-[#EDA0A8] md:text-2xl text-xl font-medium rounded-md  md:w-full w-[300px] border-none capitalize md:mb-12 mbb-8" value="Create an account" />
                        </div>

                    </form>
                    <p className="text-red-600 text-center m-0">{error}</p>
                    <p className="text-green-600 text-center m-0">{success}</p>

                </div>
            </div>
        </div>
    );
};

export default Register;