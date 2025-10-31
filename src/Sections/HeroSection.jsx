import Logo from "../LogoAndSideNav/Logo"
import NavigationItems from "../LogoAndSideNav/NavigationItems"

const HeroSection = () => {
    return (
        <div className="flex pt-30 m-9 gap-9 ">
        <NavigationItems />
        <span className="w-[1px] min-[1300px]:block hidden mt-0 bg-gray-200"></span>
        <Logo />
      </div>
    )
}

export default HeroSection;