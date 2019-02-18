
exports.filter = (settings, components) => {

    const arrComp = components.map((c) => c.name);

    return settings.filter((s) => {

        if (!s.requires.length) {

            return true;

        }

        return s.requires.some((r) => arrComp.includes(r));


    });

};
