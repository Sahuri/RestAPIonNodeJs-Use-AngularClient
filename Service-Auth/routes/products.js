var products = {
getAll: function(req, res) {
var allProducts = data; // Spoof a DB call
res.json(allProducts);
},
getOne: function(req, res) {
var id = req.params.id;
var product = data[0]; // Spoof a DB call
res.json(product);
},
create: function(req, res) {
var newProduct = req.body;
data.push(newProduct); // Spoof a DB call
res.json(newProduct);
},
update: function(req, res) {
var updateProduct = req.body;
var id = req.params.id;
data[id] = updateProduct // Spoof a DB call
res.json(updateProduct);
},
delete: function(req, res) {
var id = req.params.id;
data.splice(id, 1) // Spoof a DB call
res.json(true);
}
};
var data = [
    {name: 'Groceries',id: '1',desc:'Grocery stores often offer non-perishable food that is packaged in bottles, boxes, and cans; some also have bakeries, butchers, delis, and fresh produce. Large grocery stores that stock significant amounts of non-food products, such as clothing and household items, are called supermarkets. Some large supermarkets also include a pharmacy, and customer service, redemption, and electronics sections'}
    , {name: 'Beverages',id: '2',desc:'A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain water, milk, juices, coffee, tea, and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture and development for 8,000 years'}
    , {name: 'Snacks',id: '3',desc:'A snack is a portion of food, smaller than a regular meal, generally eaten between meals.[1] Snacks come in a variety of forms including packaged snack foods and other processed foods, as well as items made from fresh ingredients at home'}
    ,{name: 'Fruits',id: '5',desc:'Many common terms for seeds and fruit do not correspond to the botanical classifications. In culinary terminology, a fruit is usually any sweet-tasting plant part, especially a botanical fruit; a nut is any hard, oily, and shelled plant product; and a vegetable is any savory or less sweet plant product.[5] However, in botany, a fruit is the ripened ovary or carpel that contains seeds, a nut is a type of fruit and not a seed, and a seed is a ripened ovule'}
    ,{name: 'Vegetables',id: '6',desc:'The word vegetable was first recorded in English in the early 15th century. It comes from Old French,[1] and was originally applied to all plants; the word is still used in this sense in biological contexts.[2] It derives from Medieval Latin vegetabilis "growing, flourishing" (i.e. of a plant), a semantic change from a Late Latin meaning "to be enlivening, quickening"'}
];
module.exports = products;