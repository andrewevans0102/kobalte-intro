import { Progress, HoverCard, Popover, Tabs } from '@kobalte/core';
import './style.css';

// examples were copied from the Kobalte website
// https://kobalte.dev/docs/core/overview/getting-started
const KobalteAdvanced = () => {
    return (
        <main>
            <section>
                <h2>Progress Bar</h2>
                <Progress.Root value={80} class="progress">
                    <div class="progress__label-container">
                        <Progress.Label class="progress__label">
                            Loading...
                        </Progress.Label>
                        <Progress.ValueLabel class="progress__value-label" />
                    </div>
                    <Progress.Track class="progress__track">
                        <Progress.Fill class="progress__fill" />
                    </Progress.Track>
                </Progress.Root>
            </section>
            <section>
                <h2>Hover Card (move mouse over to see it)</h2>
                <HoverCard.Root>
                    <HoverCard.Trigger
                        class="hovercard__trigger"
                        href="https://twitter.com/mlfabien"
                        target="_blank"
                    >
                        @MLFabien
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        <HoverCard.Content class="hovercard__content">
                            <HoverCard.Arrow />
                            <img
                                src="https://pbs.twimg.com/profile_images/1509139491671445507/pzWYjlYN_400x400.jpg"
                                alt="Fabien MARIE-LOUISE"
                                class="hovercard__avatar"
                            />
                            <h2 class="hovercard__title">
                                Fabien MARIE-LOUISE
                            </h2>
                            <p class="hovercard__description">
                                Developer and UI Design enthusiast. Building UI
                                related stuffs for @solid_js
                            </p>
                        </HoverCard.Content>
                    </HoverCard.Portal>
                </HoverCard.Root>
            </section>
            <section>
                <h2>Popover (click open to see it)</h2>
                <Popover.Root>
                    <Popover.Trigger class="popover__trigger">
                        Open
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content class="popover__content">
                            <Popover.Arrow />
                            <div class="popover__header">
                                <Popover.Title class="popover__title">
                                    About Kobalte
                                </Popover.Title>
                                <Popover.CloseButton class="popover__close-button">
                                    X
                                </Popover.CloseButton>
                            </div>
                            <Popover.Description class="popover__description">
                                A UI toolkit for building accessible web apps
                                and design systems with SolidJS.
                            </Popover.Description>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
            </section>
            <section>
                <h2>Tabs</h2>
                <Tabs.Root aria-label="Main navigation" class="tabs">
                    <Tabs.List class="tabs__list">
                        <Tabs.Trigger class="tabs__trigger" value="profile">
                            Profile
                        </Tabs.Trigger>
                        <Tabs.Trigger class="tabs__trigger" value="dashboard">
                            Dashboard
                        </Tabs.Trigger>
                        <Tabs.Trigger class="tabs__trigger" value="settings">
                            Settings
                        </Tabs.Trigger>
                        <Tabs.Trigger class="tabs__trigger" value="contact">
                            Contact
                        </Tabs.Trigger>
                        <Tabs.Indicator class="tabs__indicator" />
                    </Tabs.List>
                    <Tabs.Content class="tabs__content" value="profile">
                        Profile details
                    </Tabs.Content>
                    <Tabs.Content class="tabs__content" value="dashboard">
                        Dashboard details
                    </Tabs.Content>
                    <Tabs.Content class="tabs__content" value="settings">
                        Settings details
                    </Tabs.Content>
                    <Tabs.Content class="tabs__content" value="contact">
                        Contact details
                    </Tabs.Content>
                </Tabs.Root>
            </section>
        </main>
    );
};

export default KobalteAdvanced;
