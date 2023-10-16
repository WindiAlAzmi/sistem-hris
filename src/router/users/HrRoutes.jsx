import Employee from "../../pages/users/HR/Employee";
import Report from "../../pages/users/HR/Report";

export default function HrRoutes() {
  return [
    {
      name: 'Employee',
      path: '/employee',
      components: <Employee />
    }
    ,
     {
      name: 'Report',
      path: '/report',
      components: <Report />
    },

  ]
}