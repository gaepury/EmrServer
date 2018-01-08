const prescription = require('../Entity/Prescription.js');

var PrescriptionModel = function (data) {
    this.data = data;
}

PrescriptionModel.createAll = function (data, callback) {

    var medicines = JSON.parse(data.prescription);
    prescription.bulkCreate(medicines).then(result => callback(result));
}

PrescriptionModel.find = async function (options) {

    const { where = {}, include = {}, order = [] } = options;
    return await prescription.findAll({
        where: where,
        order: order
    })
}

module.exports = PrescriptionModel;
