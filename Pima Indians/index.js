var final_model = null;
var done = false;

async function load_model() {
    return await tf.loadLayersModel("https://drive.google.com/open?id=1-K6Hwvkx0GC3_BpnLAxDZPC_LVZoksue");
}

function print_model(model) {
    console.log(model)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Taking a break...');
    await sleep(3000);
    console.log('Two seconds later');
}

demo();

pima_model = load_model();
pima_model.then(model => {
   final_model = model;
   done = true;
   print_model(final_model);
});
// // pima_model = load_model();
// // pima_model = await tf.loadLayersModel("model.json");
//
// // console.log(pima_model.then(print_model));
// while(!done) {print_model(final_model);sleep(2000)}
print_model(final_model);
