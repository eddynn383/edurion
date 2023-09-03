import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Menu from "@/components/Menu";
import Content from "@/modules/Content";
import SettingsForm from "@/modules/SettingsForm";
import Side from "@/modules/Side";
import { getProfiles } from "@/lib/getData";
import { pageSectionsMenu } from "@/lib/sections";
import Toolbar from "@/modules/Toolbar";

const Settings = async () => {
    const session = await getServerSession(authOptions)
    const user = session?.user

    console.log(user)

    const profile = await getProfiles(user?.email)

    console.log("USER PROFILE: ", profile)

    return (
        <Content>
            <Content.Body orient="horizontal">
                <SettingsForm profile={profile} />
                <Side>
                    <Menu data={pageSectionsMenu} />
                </Side>
            </Content.Body>
            <Content.Footer >
                <Toolbar type="footer" />
            </Content.Footer>
        </Content>
    );
}

export default Settings;