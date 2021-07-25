import {Tab, Tabs} from "@blueprintjs/core";
import Profile from "./Profile";
import Messages from "./Messages";
import News from "./News";
import Music from "./Music";
import Settings from "./Settings";

function NavbarComp() {
    return (
        <nav className='nav'>
            <Tabs
                animate={false}
                id="TabsExample"
                key={"vertical"}
                renderActiveTabPanelOnly={false}
                vertical={true}
            >
                <Tab id="Profile" title="Profile" panel={<Profile />}  />
                <Tab id="Messages" title="Messages" panel={<Messages />} />
                <Tab id="News" title="News" panel={<News />}  />
                <Tab id="Music" title="Music" panel={<Music />} />
                <Tab id="Settings" title="Settings" panel={<Settings />} />
            </Tabs>
        </nav>
    );
}

export default NavbarComp;
