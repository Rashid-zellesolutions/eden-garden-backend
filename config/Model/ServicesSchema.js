const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema(
    {
        servicesId: {
            type: String,
            // unique: true
        },
        ser: {
            type: String,
            // unique: true
        },
        services: {
            type: Array,
            required: true
        }
    },
    { timestamps: true }
)
ServicesSchema.pre("save", async function (next) {
    // Only generate a custom ID if this is a new store (not updating an existing one)
    if (this.isNew) {
        try {
            // Find the last store in the database to determine the next custom ID
            const lastStore = await this.constructor
                .findOne({}, { servicesId: 1 })
                .sort({ servicesId: -1 })
                .limit(1);

            // If there are no stores yet, start with BK0001
            let newIdNumber = 1;
            if (lastStore && lastStore.servicesId) {
                const lastId = parseInt(lastStore.servicesId.replace("SR", ""), 10);
                newIdNumber = lastId + 1;
            }

            // Pad the ID with zeros to achieve the desired format (e.g., Bk0001)
            const newId = `SR${String(newIdNumber).padStart(4, "0")}`;
            this.servicesId = newId;
            next();
        } catch (err) {
            next(err);
        }
    } else {
        // If this is not a new store, just proceed with the save operation
        next();
    }
});
const ServicesModel = mongoose.model("Services", ServicesSchema);
module.exports = ServicesModel;