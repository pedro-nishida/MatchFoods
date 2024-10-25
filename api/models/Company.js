import mongoose from "mongoose";


const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
			type: String,
			required: true,
		},
        bio: { 
            type: String, 
            default: "" 
        },
		image: { 
            type: 
            String, 
            default: "" 

        },
        cnpj: {
            type: String,
            required: true,
            unique: true,
            match: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 

        },
        category: {
            type: String,
            required: true,

        },
        locate: {
            type: String,
            required: true,
        },
        likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],






    });

companySchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
companySchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
        

const Company = mongoose.model("Company", companySchema);

export default Company;