import linkedIn from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
        className="hover:opacity-50 transition duration-500"
        href='https://www.linkedin.com/in/mahesh-bv-b72124204/'
        target="_black"
        rel="noreferrer"
        >
            <img alt="linked-link" src={linkedIn}/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href='https://github.com/maheshbvcode'
        target="_black"
        rel="noreferrer"
        >
            <img alt="twitter" src={github} width="30px" height="30px"/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href='https://twitter.com/MaheshBV2000'
        target="_black"
        rel="noreferrer"
        >
            <img alt="twitter" src={twitter}/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href='https://www.facebook.com/profile.php?id=100009188404835'
        target="_black"
        rel="noreferrer"
        >
            <img alt="facebook" src={facebook}/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href='https://www.instagram.com/mahesh_the_boss007/'
        target="_black"
        rel="noreferrer"
        >
            <img alt="instagram" src={instagram}/>
        </a>
       </div>
    )
  }
  
  export default SocialMediaIcons