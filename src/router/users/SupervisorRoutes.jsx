import Persetujuan from "../../pages/users/Supervisor/Persetujuan";

export default function SupervisorRoutes() {
  return [
    {
      name: 'Persetujuan',
      path: '/persetujuan',
      components: <Persetujuan />
    }

  ]
}