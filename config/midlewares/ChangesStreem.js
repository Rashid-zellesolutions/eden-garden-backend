const { Appetizers, MainEntries, Desserts, TeaCoffe, JuiceDrinks } = require('../../config/Model/FoodMenue/Packages');
const FoodType = require('../../config/Model/FoodMenue/FoodType');

const appetizerChangeStream = Appetizers.watch();
const mainEntriesChangeStream = MainEntries.watch();
const dessertsChangeStream = Desserts.watch();
const teaCoffeChangeStream = TeaCoffe.watch();
const juicesDrinksChangeStream = JuiceDrinks.watch();

// Appetizers Midleware
appetizerChangeStream.on('change', async (change) => {
  console.log('Change stream event:', change);

  if (change.operationType === 'insert' || change.operationType === 'update') {
    // Retrieve the updated appetizer
    const updatedAppetizerId = change.documentKey._id; // Get the updated appetizer ID
    // const updatedAppetizerId = '66643e4008954eaa4b72a3c8'
    const updatedAppetizer = await Appetizers.findById(updatedAppetizerId);
    console.log('Updated Appetizer:', updatedAppetizer);

    // Find and update all foodtypes that have this appetizer
    const updatedFoodTypes = await FoodType.updateMany(
      { 'packages.appetizers._id': updatedAppetizerId }, // Match the appetizer by its _id
      { $set: { 'packages.$.appetizers': updatedAppetizer } } // Update the appetizer details
    );
    console.log('Updated FoodTypes:', updatedFoodTypes);
  }
});

// Main Entries Midleware
mainEntriesChangeStream.on('change', async (change) => {
    // console.log('Change stream event for main entries:', change);

    try {
        if (change.operationType === 'insert' || change.operationType === 'update') {
            // const updatedMainEntriesId = change.documentKey._id;
            const updatedMainEntriesId = change.documentKey._id;
            // const updatedMainEntriesId = '6662f70f5deb5d7dacccf94a';
            const updatedMainEntries = await MainEntries.findById(updatedMainEntriesId);
            console.log('Updated Main Entries:', updatedMainEntries);
            console.log("Main entries id:", updatedMainEntriesId);

            // Update FoodTypes with the updated Main Entry
            const filter = { 'packages.mainEntries._id': updatedMainEntriesId };
            const update = { $set: { 'packages.$.mainEntries': updatedMainEntries } };
            const options = { multi: true }; // Update multiple documents
            const updatedFoodTypes = await FoodType.updateMany(filter, update, options);

            console.log('Updated FoodTypes for main entries:', updatedFoodTypes);
            if (updatedFoodTypes.nModified === 0) {
                console.log('No FoodTypes were updated. Make sure the documents exist and the filter criteria match.');
            }
        }
    } catch (error) {
        console.error('An error occurred while updating FoodTypes:', error);
    }
});

// Desserts Midleware
dessertsChangeStream.on('change', async (change) => {
    console.log("Change Stream Dessert: ", change);
    if(change.operationType === 'insert' || change.operationType === 'update'){
        const updatedDessertId = change.documentKey._id;
        // const updatedDessertId = '66643ea008954eaa4b72a3ce';
        const updatedDessert = await Desserts.findById(updatedDessertId);
        console.log("Updated Dessert Object: ", updatedDessert);

        const filter = {'packages.desserts._id': updatedDessertId};
        const update = {$set: {'packages.$.desserts': updatedDessert}};
        const options = {multi : true};
        const updatedFoodTypes = await FoodType.updateMany(filter, update, options);
        console.log("Updated Food Type: ", updatedFoodTypes)
    }
});

// TeaCoffe Midleware
teaCoffeChangeStream.on('change', async (change) => {
    console.log("Change event of teaCoffe", change);
    if(change.operationType === 'insert' || change.operationType === 'update'){
        const updatedTeaCoffeId = change.documentKey._id;
        // const updatedTeaCoffeId = '6662f7deffded55bbc11a5ef';
        const updatedTeaCoffe = await TeaCoffe.findById(updatedTeaCoffeId);
        console.log("Updated TeaCoffe: ", updatedTeaCoffe);

        const filter = {'packages.teaCoffe._id': updatedTeaCoffeId};
        const update = {$set: {'packages.$.teaCoffe': updatedTeaCoffe}};
        const options = {multi: true};
        const updatedFoodTypes = await FoodType.updateMany(filter, update, options);
        console.log("updated Food Type: ", updatedFoodTypes);
    }
});

// Juices Drinks Midleware
juicesDrinksChangeStream.on('change', async(change) => {
    console.log("Juices Change Event: ", change);
    if(change.operationType === 'insert' || change.operationType === 'update'){
        const updatedJuicesDrinksId = change.documentKey._id;
        // const updatedJuicesDrinksId = '6661cfaccdb4c3b8808e340a';
        const updatedJuicesDrinks = await JuiceDrinks.findById(updatedJuicesDrinksId);
        console.log("updated juices dinks", updatedJuicesDrinks);

        const filter = {'packages.juicesDrinks._id': updatedJuicesDrinksId};
        const update = {$set: {'packages.$.juicesDrinks': updatedJuicesDrinks}};
        const options = {multi: true};
        const updatedFoodTypes = await FoodType.updateMany(filter, update, options);
        console.log("updated Food Type: ", updatedFoodTypes);
    }
})