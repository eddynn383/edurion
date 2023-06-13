import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import Content from '@/modules/Content'
import Section from '@/modules/Section'

const Buttons = () => {

    return (
        <Content>
            <Content.Body>
                <Section style={{ "height": "100%", "gap": "20px" }}>
                    <Section.Title>Primary</Section.Title>
                    <div className="container">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, auto)", gridAutoFlow: "row", gap: '20px' }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                                <div>
                                    <Button type="button" size="L" mode="primary" status="accent">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" status="success">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" status="fail">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" status="warning">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" status="info">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" status="accent">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" status="success">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" status="fail">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" status="warning">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" status="info">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" status="accent">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" status="success">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" status="fail">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" status="warning">Button 1</Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" status="info">Button 1</Button>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon" status="accent"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon" status="success"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon" status="fail"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon" status="warning"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="L" mode="primary" content="icon" status="info"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon" status="accent"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon" status="success"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon" status="fail"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon" status="warning"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="M" mode="primary" content="icon" status="info"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon" status="accent"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon" status="success"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon" status="fail"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon" status="warning"><Icon value="home" /></Button>
                                </div>
                                <div>
                                    <Button type="button" size="S" mode="primary" content="icon" status="info"><Icon value="home" /></Button>
                                </div>
                            </div>



                        </div>
                    </div>
                </Section>
                <Section style={{ "height": "100%", "gap": "20px" }}>
                    <Section.Title>Secondary</Section.Title>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px", backgroundColor: "var(--background-color-150)", padding: "20px" }}>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" status="info">Button 1</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="100" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="100" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="100" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px", backgroundColor: "var(--background-color-100)", padding: "20px" }}>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" status="info">Button 1</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" shade="150" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" shade="150" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" shade="150" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px", backgroundColor: "var(--background-color-150)", padding: "20px" }}>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" status="info">Button 1</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="100" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="100" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="100" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px", backgroundColor: "var(--background-color-100)", padding: "20px" }}>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="accent"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="success"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="fail"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="warning"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text-icon" status="info"><Icon value="home" /> Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text" status="accent"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text" status="success"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text" status="fail"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text" status="warning"><Icon value="home" /> Button</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon-text" status="info"><Icon value="home" /> Button</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="text-icon" status="accent">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="text-icon" status="success">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="text-icon" status="fail">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="text-icon" status="warning">Button <Icon value="chevron-right" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="text-icon" status="info">Button <Icon value="chevron-right" /></Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" status="info">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" status="accent">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" status="success">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" status="fail">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" status="warning">Button 1</Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" status="info">Button 1</Button>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: '20px' }}>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="L" mode="secondary" variant="outline" shade="150" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="M" mode="secondary" variant="outline" shade="150" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon" status="accent"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon" status="success"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon" status="fail"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon" status="warning"><Icon value="home" /></Button>
                            </div>
                            <div>
                                <Button type="button" size="S" mode="secondary" variant="outline" shade="150" content="icon" status="info"><Icon value="home" /></Button>
                            </div>
                        </div>
                    </div>
                </Section>
            </Content.Body>
        </Content>
    )
}

Buttons.auth = {
    roles: ["ADMIN"],
    loading: <Loading />,
    unauthorized: "/unauthorized", // redirect to this url
}


export default Buttons