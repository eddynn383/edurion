// import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Access from "@/lib/pageAccess";
import { redirect } from "next/navigation";
import Loading from "@/components/Loading";
import Section from "@/modules/Section";
import Content from "@/modules/Content";

const Page = async ({ params }: { params: { slug: string } }) => {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     // if (!session?.user.roles) {

    //     // }
    //     redirect('/auth/login?callbackUrl=/dashboard')
    // }
    // console.log(session)
    console.log(params)
    return (
        <Content>
            <Content.Body>
                <Section>
                    <h2>Dashboard no. {params.slug}</h2>
                    <p>Există o varietate de locuri de muncă care pot fi considerate periculoase în funcție de diferite aspecte, cum ar fi expunerea la substanțe toxice, risc de accidente, condiții de lucru extreme etc. Iată câteva exemple de locuri de muncă periculoase:</p>
                    <ol className="list">
                        <li>Minerit subteran: Mineritul în subteran implică expunerea la riscuri precum prăbușiri de teren, explozii, gaz toxic și praf de mină.</li>
                        <li>Construcții înalte: Lucrătorii de pe șantierele de construcții înalte se confruntă cu riscuri de cădere de la înălțime, precum și cu pericole asociate utilizării de echipamente grele și mașini de construcții.</li>
                        <li>Lucrători la înălțime: Aceasta se referă la meserii precum instalatori de antene, lucrători de pe stâlpi de electricitate sau tehnicieni de instalații de climatizare care trebuie să lucreze la înălțimi mari și pot fi expuși la riscul de cădere.</li>
                        <li>Lucrători în industria chimică: Angajații din industria chimică pot fi expuși la substanțe toxice, vapori nocivi, explozii sau incendii.</li>
                        <li>Lucrători în exploatarea petrolului și gazelor: Aceștia lucrează în medii periculoase, inclusiv platforme de foraj în largul mării, și pot fi expuși la riscul de explozii, incendii și poluare.</li>
                        <li>Muncitori în industria de construcții navale: Aceștia pot fi expuși la substanțe chimice periculoase, vapori toxici și condiții de lucru stricte pe navele în construcție.</li>
                        <li>Lucrători în industria de prelucrare a metalelor: Aici sunt incluși sudorii, turnătorii și alți muncitori care pot fi expuși la temperaturi ridicate, substanțe toxice și pericole de accidente.</li>
                        <li>Lucrători în domeniul electric: Electricienii și tehnicienii de întreținere electrică se confruntă cu riscul de electrocutare, scurtcircuit și alte accidente electrice.</li>
                        <li>Pompieri: Pompierii se confruntă cu situații de urgență, inclusiv incendii și salvarea persoanelor în pericol.</li>
                        <li>Lucrători în construcții de drumuri: Aceștia pot fi expuși la riscuri de accidente rutiere, echipamente grele și expunere la trafic intens.</li>
                        <li>Este important să se menționeze că lista de mai sus nu este exhaustivă și că fiecare loc de muncă poate avea propriile riscuri specifice. În plus, normele și reglementările privind siguranța muncii sunt concepute pentru a minimiza riscurile și a asigura un mediu de lucru sigur pentru angajați în toate industriile.</li>
                    </ol>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla rutrum dolor, vitae scelerisque ante malesuada mollis. Nulla id libero gravida, vulputate magna sed, rutrum purus. Cras non sodales eros, pellentesque imperdiet dui. Mauris massa nibh, semper non maximus ut, ultricies eget purus. Donec ullamcorper ac nunc in ultrices. Nam egestas, orci at auctor tincidunt, dolor eros elementum massa, eu mollis risus ligula id ex. Ut et scelerisque massa. Proin facilisis viverra nibh a tempus. Nunc tellus lorem, imperdiet ut rhoncus in, elementum id elit. Curabitur consequat libero sed risus ullamcorper rhoncus. Vestibulum magna nisl, interdum non magna vel, lobortis commodo libero. Integer sed urna feugiat, auctor quam venenatis, blandit augue.</p>
                    <p>Morbi euismod et odio efficitur luctus. Aenean ultrices ut ex sit amet venenatis. Donec sed fermentum nisi, vel condimentum mi. Praesent luctus magna quis tortor vulputate, in iaculis augue pretium. Nullam a orci sit amet tellus ultrices feugiat. Nullam suscipit feugiat vestibulum. Sed vitae augue blandit, luctus purus non, fringilla justo. Pellentesque eros sapien, tincidunt eget sagittis quis, fermentum eget eros. Aenean ut metus mi. Etiam fermentum augue at neque placerat aliquet. In ligula nisi, rutrum quis pharetra sed, placerat ut arcu.</p>
                    <p>Aliquam suscipit est at elit vestibulum molestie. Proin ac suscipit enim. Mauris risus leo, fringilla eu molestie ut, ultricies eget enim. Praesent felis turpis, accumsan a efficitur quis, ullamcorper sed felis. Maecenas vel tellus arcu. Vestibulum id neque metus. Morbi elit justo, scelerisque a scelerisque ut, malesuada sed turpis. Aenean ultrices sollicitudin dictum. Aenean tempus ultricies rutrum. Ut tristique justo luctus tortor molestie pretium non quis massa. Ut volutpat sapien mollis nunc semper fringilla. In hac habitasse platea dictumst.</p>
                    <p>Nullam vestibulum dignissim massa. Vestibulum lacinia purus nec dui volutpat, non dignissim tortor vestibulum. Quisque scelerisque velit sit amet rutrum hendrerit. Fusce ultrices metus felis, eget lobortis tellus egestas ac. Aliquam eu orci metus. Integer non tempor augue. Donec in dui sed eros lobortis tempus sed sit amet nulla. In in metus at libero sagittis rutrum vitae in dui.</p>
                    <p>Aliquam erat volutpat. Aenean vulputate commodo dictum. Suspendisse maximus eros et pretium fermentum. Integer viverra, eros in tempus efficitur, ex nisl lobortis est, in molestie sem elit ut velit. Mauris sapien libero, consectetur ac eros sed, congue efficitur enim. Fusce fermentum arcu sit amet nisi commodo scelerisque. Proin tempor interdum massa in sagittis.</p>
                </Section>
            </Content.Body>
        </Content>
    )
}

// Dashboard.auth = {
//     roles: ["LEARNER", "MANAGER", "ADMIN"],
//     loading: <Loading />,
//     unauthorized: "/unauthorized", // redirect to this url
// }

export default Page