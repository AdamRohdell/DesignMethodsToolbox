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
};
