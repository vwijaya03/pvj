import staffServices from '../../services/staff';

async function getStaff(req, res) {
    try {
        const { query } = req.query;
        const result = await staffServices.getStaff({q: query});
        const out = {};

        out.staffs = result;
        out.code = 200;
        out.msg = 'Success';

        res.json(out);
    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, msg: error.message});
    }
}

async function addStaff(req, res) {
    try {
        const { fullname, phone, email } = req.body;
        await staffServices.addStaff({fullname, phone, email});

        res.json({code: 200, msg: 'Staff data has been added'});
    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, msg: error.message});
    }
}

async function deleteStaff(req, res) {
    try {
        const { id } = req.body;
        await staffServices.deleteStaff({ id });

        res.json({code: 200, msg: 'Staff data has been deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, msg: error.message});
    }
}

const obj = {};
obj.getStaff = getStaff;
obj.addStaff = addStaff;
obj.deleteStaff = deleteStaff;

export default obj;