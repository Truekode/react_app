import { Alignment, Navbar } from "@blueprintjs/core";
function Header() {
    return (
        <header className='header'>
            <Navbar >
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Messanger</Navbar.Heading>
                    {/*<Navbar.Divider />*/}
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default Header;
