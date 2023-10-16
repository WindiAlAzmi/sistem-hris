import Cuti from "../../pages/users/Employee/Cuti";
import Dinas from "../../pages/users/Employee/Dinas";
import Pelatihan from "../../pages/users/Employee/Pelatihan";

export default function EmployeeRoutes() {
  return [
    {
      name: 'Cuti',
      path: '/cuti',
      components: <Cuti />
    }
    ,
     {
      name: 'Pelatihan',
      path: '/pelatihan',
      components: <Pelatihan />
    },
        {
      name: 'Dinas',
      path: '/dinas',
      components: <Dinas/>
    }
  ]
}