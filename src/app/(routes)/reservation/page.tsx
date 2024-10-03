import { ReservationForm } from '@/forms/reservation/reservation-form';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Reservation() {
  const session = await getSession();
  const user = session?.user!;

  return (
    <main>
      <div className="flex flex-col items-start justify-center">
        <ReservationForm user={user} />
      </div>
    </main>
  );
}
