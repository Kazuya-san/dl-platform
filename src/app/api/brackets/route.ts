import { NextResponse } from 'next/server';
import brackets from '@/lib/brackets.json';

// import { BracketsManager } from 'brackets-manager';
// import { JsonDatabase } from 'brackets-json-db';
// const storage = new JsonDatabase();
// const manager = new BracketsManager(storage);
// // await manager.update.match({
// //   id: 0, // First match of winner bracket (round 1)
// //   opponent1: { score: 16, result: 'win' },
// //   opponent2: { score: 12 },
// // });
// const teams = [
//   'Team Armanyie',
//   'Team Cali Strong',
//   'Team Zeke',
//   'Team Cheryl',
//   'Team Young Money',
//   'Team Strouser',
//   'Team Leon',
//   'Team Taylor',
//   'Team Raka',
//   'Team Tyler',
//   'Team Philip',
//   'Team Reed',
//   'Team Gio',
//   'Team Kaz',
//   'Team Nike',
//   'Team Snoop Dogg',
// ];

// const make = async () => {
//   await manager.create.stage({
//     tournamentId: 3,
//     name: 'Elimination stage',
//     type: 'single_elimination',
//     seeding: teams,
//     settings: { grandFinal: 'simple' },
//   });
// };

export const GET = async () => {
  // Create an elimination stage for tournament `3`.

  return NextResponse.json({
    brackets,
  });
};
