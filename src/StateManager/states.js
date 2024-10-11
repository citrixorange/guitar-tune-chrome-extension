const States = {
    MAIN: 'MAIN',
    MENU: 'MENU',
    CONFIGURATIONS: 'CONFIGURATIONS',
    ABOUT: 'ABOUT',
    VERSION: 'VERSION',
    TUNER: 'TUNER'
};

const Triggers = {
    MAIN: 'goToMain',
    MENU: 'goToMenu',
    CONFIGURATIONS: 'goToConfigurations',
    ABOUT: 'goToAbout',
    VERSION: 'goToVersion',
    TUNER: 'goToTuner'
}

export {
    States,
    Triggers
}