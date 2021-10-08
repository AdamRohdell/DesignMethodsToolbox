const Method = require("../../models/method");

module.exports = {
    methods: async () => {
        try {
            const methodsFetched = await Method.find();
            return methodsFetched.map((method) => {
                return {
                    ...method._doc,
                    _id: method.id,
                    title: method.title,
                    input: method.input,
                    output: method.output,
                    what: method.what,
                    how: method.how,
                    experiences: method.experiences,
                    research: method.research,
                    createdAt: new Date(method._doc.createdAt).toISOString(),
                };
            });
        } catch (error) {
            throw error;
        }
    },

    sources: async () => {
        try {
            const sourcesFetched = await Source.find();
            return sourcesFetched.map((source) => {
                return {
                    ...source._doc,
                    _id: source.id,
                    title: source.title,
                    author: source.author,
                    year: source.year,
                    url: source.url,
                };
            });
        } catch (error) {
            throw error;
        }
    },

    createMethod: async (args) => {
        try {
            const { title, input, output, what, how, experiences, research } =
                args.method;
            const method = new Method({
                title,
                input,
                output,
                what,
                how,
                experiences,
                research,
            });

            const newMethod = await method.save();
            return { ...newMethod._doc, _id: newMethod.id };
        } catch (error) {
            throw error;
        }
    },
    addSource: async (args) => {
        try {
            const { title, author, year, url } = args.source;
            const source = new Source({
                title,
                author,
                year,
                url,
            });
            const newSource = await source.save();
            return { ...newSource._doc, _id: newSource.id };
        } catch (error) {
            throw error;
        }
    },
};
