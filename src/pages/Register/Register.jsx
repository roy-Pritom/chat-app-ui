import { Link } from "react-router-dom";

const Register = () => {
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
                <img src="https://s3-alpha-sig.figma.com/img/ecbb/ec0e/c1aaa1193fbc7dd453b99a0d3d826f32?Expires=1691366400&Signature=Yz-cXEmbMIIZ5c75k638qbBgXtLioveZR54dFhBqUF~r5PpG1lAMtjf1PzFkbC1Xlv7UHUO9366njnIBdykPNnV9pBDyNOCk04dCAHHLSM5pVf4J8Ye6yA7WjcxIqw9oxC9s85Dy8FxUB8blAjkY2tmvr-StnCxIWjwDrK2zNvPVNryXzN9X2pJu1gVb0VgcPKhGNDG2FGhsU0thEbwBxYzXaEXwmjj0R-p2bqCckSE8w0UTcPcL7pwwf62utt89~aG1tuSHVzMHb0ByZ4R31ZRXtkAtImsA6V8OpbKUA6LGckys1cSNhxpMEshUFRnq6WIx1FBqFlsdk6COXOuBmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-40 md:h-36 w-[72px] h-[64px] mx-auto" alt="" />
                <h2 className="text-[#69235B] font-bold md:text-5xl text-xl text-center mb-7">Sign up with Email</h2>
                <p className="text-[#69235B] md:text-xl text-sm font-light text-center">Welcome back! Sign in using your social <br /> account or email to continue us</p>



                <div className="md:w-1/2 mx-auto md:mt-10 mt-6">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Your name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Your email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#69235B] md:text-lg text-sm font-medium">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="mt-10">
                            <input type="submit" className="btn bg-[#FBDC94] text-[#EDA0A8] md:text-2xl text-xl font-medium rounded-md lg:w-[700px] md:w-full w-[300px] border-none capitalize md:mb-12 mbb-8" value="Create an account" />
                        </div>

                    </form>
            
                </div>
            </div>
        </div>
    );
};

export default Register;