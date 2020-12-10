// scheme-model
const db = require('./../../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where('id', id).first();
}

function findSteps(id) {
    // select
    //     st.id,
    //     sc.scheme_name,
    //     st.step_number,
    //     st.instructions
    // from schemes sc
    // join steps st
    // on st.scheme_id = sc.id
    // where sc.id = 2
    // order by st.step_number asc
    return db('schemes as sc')
        .join('steps as st', 'st.scheme_id', 'sc.id')
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
        .where('sc.id', id)
        .orderBy('st.step_number');
}

async function add(scheme) {
    const newId = await db('schemes').insert(scheme)
    return db('schemes').where('id', newId).first();
}

async function update(changes, id) {
    await db('schemes').where('id', id).update(changes);
    return db('schemes').where('id', id)
}

async function remove(id) {
    const scheme = await db('schemes').where('id', id);
    await db('schemes').where('id', id).del();
    return scheme;
}