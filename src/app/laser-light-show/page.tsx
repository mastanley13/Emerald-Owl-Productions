
import { redirect } from 'next/navigation';

export default function LaserLightShowAppRoute() {
  // Use a more specific redirection approach to avoid routing conflicts
  redirect('/laser-light-show?source=app-router');
}
