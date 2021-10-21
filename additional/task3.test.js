import 'regenerator-runtime/runtime';
import staffServices from '../src/services/staff';

xit('should staff list is not empty', async () => {
    const staffs = await staffServices.getStaff();

    expect(staffs.length).toBeGreaterThan(0);
});

xit('should create new staff', async () => {
    const data = {
        fullname: 'Dwayne Johnson',
        phone: '6281000999',
        email: 'dwayne.johnson@gmail.com'
    };
    const result = await staffServices.addStaff(data);

    expect(result.fullname).toMatch(data.fullname);
});

xit('should delete staff', async () => {
    const id = 10;
    const result = await staffServices.deleteStaff({ id });
    
    expect(result).toBeGreaterThanOrEqual(1);
});