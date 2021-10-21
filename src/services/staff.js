import Staff from '../models/staff';

import { Op } from 'sequelize';

async function getStaff({q=null}={}) {
    const query = {};
    const attributes = ['id', 'fullname', 'phone', 'email'];

    query.attributes = attributes;

    if (q) {
        query.where = {
            [Op.or]: [
                { fullname: { [Op.like]: `%${q}%` } },
                { phone: { [Op.like]: `%${q}%` } },
                { email: { [Op.like]: `%${q}%` } }
            ]
        };
    }
    const staffs = await Staff.findAll(query);

    return staffs;
}

async function addStaff({fullname=null, phone=null, email=null}={}) {
    const data = { fullname, phone, email};

    return await Staff.create(data);
}

async function deleteStaff({id=null}={}) {
    return await Staff.destroy({ where: { id } });
}

const obj = {};
obj.getStaff = getStaff;
obj.addStaff = addStaff;
obj.deleteStaff = deleteStaff;

export default obj