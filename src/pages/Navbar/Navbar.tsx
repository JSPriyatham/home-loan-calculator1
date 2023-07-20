import { Navbar, NavbarBrand } from "reactstrap"
import logoImage from '../../assets/Images/calculator.png'


export const NavBar = () => {
    return (
        <>
            <Navbar
                className="mx-1"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={logoImage}
                        style={{
                            height: 40,
                            width: 100
                        }}
                    />
                    Home Loan Calculator
                </NavbarBrand>
            </Navbar>
        </>
    )
}