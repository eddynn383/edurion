import Content from "@/modules/Content"
import Section from "@/modules/Section"

const Profile = () => {
    return (
        <Content>
            <Content.Body>
                <Section>
                    <Section.Title>Last learnings</Section.Title>
                    <Section.Content>
                        <p>Aici vor fi afisate ultimele cursuri ale user-ului</p>
                    </Section.Content>
                </Section>
                <Section>
                    <Section.Title>My skills</Section.Title>
                    <Section.Content>
                        <p>Aici vor fi afisate skill-urile preferate de user cat si progresul pe fiecare skill</p>
                        <p>Daca user-ul a primit puncte la alte skill-uri decat cele preferate de el, acestea vor fi ascunse initial, iar daca user-ul doreste sa le vada, prin apasarea unui button &quot;Show all&quot; le v-a putea vedea</p>
                    </Section.Content>
                </Section>
                <Section>
                    <Section.Title>My certificates</Section.Title>
                    <Section.Content>
                        <p>Aici vor fi afisate toate certificarile obtinute de user</p>
                    </Section.Content>
                </Section>
            </Content.Body>
        </Content>
    )
}

export default Profile