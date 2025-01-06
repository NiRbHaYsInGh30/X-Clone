
import { SignupForm } from '../Components/Login/Signup'
import { Head, SignupWrapper } from '../Components/Styles/Styles'



const SignupLoader = () => {
    return (
        <Head>
            <SignupWrapper>
                <SignupForm/>
            </SignupWrapper>
        </Head>
    )
}

export  default SignupLoader;